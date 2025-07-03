import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const mockDatabase = [];

const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), "/public/uploads"),
      keepExtensions: true,
      maxFileSize: 1 * 1024 * 1024, // 1MB
      multiples: false,
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} tidak diizinkan.` });
  }

  const { event_id } = req.query;

  try {
    const { fields, files } = await parseForm(req);

    const {
      full_name,
      address,
      government_id,
      postal_code
    } = fields;

    const government_id_image = files.government_id_image;
    const errors = {};

    const safeString = (val) => Array.isArray(val) ? val[0] : val ?? "";
    const fullName = safeString(full_name);
    const addressValue = safeString(address);
    const govId = safeString(government_id);
    const postal = safeString(postal_code);

    if (fullName.trim() === "") errors.full_name = "Nama lengkap wajib diisi.";
    if (addressValue.trim() === "") errors.address = "Alamat wajib diisi.";
    if (govId.trim() === "") errors.government_id = "Nomor identitas wajib diisi.";
    if (postal.trim() === "") errors.postal_code = "Kode pos wajib diisi.";
    if (!event_id || isNaN(Number(event_id))) errors.event_id = "ID event tidak valid.";

    const duplicate = mockDatabase.find(
      (item) => item.event_id === event_id && item.government_id === govId
    );
    if (duplicate) {
      errors.government_id = "Nomor identitas sudah digunakan pada event ini.";
    }

    if (!government_id_image) {
      errors.government_id_image = "Gambar identitas wajib diunggah.";
    } else {
      const file = Array.isArray(government_id_image)
        ? government_id_image[0]
        : government_id_image;

      const allowedExt = [".jpg", ".jpeg", ".png"];
      const ext = path.extname(file.originalFilename || "").toLowerCase();

      // console.log("Ekstensi file:", ext);
      // console.log("File info:", file);

      if (!allowedExt.includes(ext)) {
        errors.government_id_image = "Format gambar harus JPG, JPEG, atau PNG.";
      }

      if (file.size > 1024 * 1024) {
        errors.government_id_image = "Ukuran gambar maksimal 1MB.";
      }
    }

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ message: "Validasi gagal", errors });
    }

    const file = Array.isArray(government_id_image)
      ? government_id_image[0]
      : government_id_image;

    const record = {
      full_name: fullName,
      address: addressValue,
      government_id: govId,
      postal_code: postal,
      event_id,
      government_id_image_path: `/uploads/${path.basename(file.filepath)}`,
      registered_at: new Date().toISOString(),
    };

    mockDatabase.push(record);

    return res.status(201).json({
      message: "Registrasi berhasil.",
      data: record,
    });

  } catch (err) {
    return res.status(400).json({ message: "Gagal memproses data.", error: err.message });
  }
}
