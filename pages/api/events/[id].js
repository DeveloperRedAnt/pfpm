const eventDetails = {
  '1': {
    "status": "belum beruntung",
    "data": {
      "user_id": 6,
      "full_name": "Agung C",
      "address": null,
      "event_id": 1,
      "start_date": "2025-06-01 00:00:00",
      "end_date": "2025-06-30 23:59:59",
      "draw_date": "2025-06-31 00:00:00",
      "name_event": "Tabrak Mendadak Juni",
      "event_image_url": "http://localhost:8000/storage/32/banner-2.jpg",
      "description": "<p>Tabrak Mendadak Juni</p>",
      "link": " "
    }
  },
  '2': {
    "status": "diskualifikasi",
    "data": {
      "user_id": 6,
      "full_name": "Agung C",
      "address": "Bawen",
      "event_id": 10,
      "start_date": "2025-07-01 00:00:00",
      "end_date": "2025-07-30 23:59:59",
      "draw_date": "2025-07-31 00:00:00",
      "name_event": "Tabrak Mendadak Juli",
      "event_image_url": "http://localhost:8000/storage/32/banner-2.jpg",
      "description": "<p>Tabrak Mendadak Juli</p>",
      "link": " "
    }
  },
  '3': {
    "status": "memenuhi syarat",
    "data": {
      "user_id": 6,
      "full_name": "Agung C",
      "address": null,
      "event_id": 2,
      "start_date": "2025-06-01 00:00:00",
      "end_date": "2025-07-30 23:59:59",
      "draw_date": "2025-08-01 00:00:00",
      "name_event": "Tabrak Mendadak Agustus",
      "event_image_url": "http://localhost:8000/storage/32/banner-2.jpg",
      "description": "<p>Tabrak Mendadak Agustus</p>",
      "link": " "
    }
  },
  '4': {
    "status": "menang",
    "data": {
      "user_id": 6,
      "full_name": "Agung C",
      "address": null,
      "event_id": 4,
      "start_date": "2024-05-07 00:00:00",
      "end_date": "2024-05-22 23:59:59",
      "draw_date": "2024-05-25 00:00:00",
      "name_event": "Promo BLT",
      "image_url": "http://localhost:8000/storage/36/promo-blt.png",
      "description": "<p>Promo Bio Fosfat Langsung Tunai</p>",
      "link": " ",
      "prizes": [
        {
          "name": "album",
          "image_url": "http://localhost:8000/storage/161/Linkin_Park_-_From_Zero_Lead_Press_Photo_-_James_Minchin_III.jpg"
        },
        {
          "name": "daisy",
          "image_url": "http://localhost:8000/storage/160/Painted-Daisy-Seeds-6590.jpg"
        },
        {
          "name": "Perabotan Kebun",
          "image_url": null
        }
      ]
    }
  },
  '5': {
    "status": "mengikuti",
    "data": {
      "user_id": 6,
      "full_name": "Agung C",
      "address": null,
      "event_id": 2,
      "start_date": "2025-06-01 00:00:00",
      "end_date": "2025-07-30 23:59:59",
      "draw_date": "2025-08-01 00:00:00",
      "name_event": "Tabrak Mendadak Agustus",
      "event_image_url": "http://localhost:8000/storage/32/banner-2.jpg",
      "description": "<p>Tabrak Mendadak Agustus</p>",
      "link": " "
    }
  },
  '6': {
    "status": "tidak memenuhi syarat",
    "data": {
      "event_id": 10,
      "start_date": "2025-06-24 00:00:00",
      "end_date": "2025-07-30 23:59:59",
      "draw_date": "2025-07-31 00:00:00",
      "name_event": "Test Promo Undian Juli 2025",
      "image_url": "https://staging-dashboard.petanifullpower.com/storage/230/5d3e4a7777fabc9f97a9d552681680da93d0105b.jpg",
      "description": "<p><meta charset=\"utf-8\"><span style=\"white-space:pre-wrap;\">Promo Akhir Bulan Menawan hadir untuk memberikan kejutan spesial di penghujung bulan! Cukup dengan berbelanja selama periode promo, kamu sudah berkesempatan mengikuti undian berhadiah dengan berbagai hadiah menarik yang sayang untuk dilewatkan.</span><br><br><span style=\"white-space:pre-wrap;\">Semakin sering bertransaksi, semakin besar peluangmu untuk menang. Jangan lewatkan kesempatan seru ini dan jadikan akhir bulanmu lebih berwarna dengan kejutan dari Akhir Bulan Menawan!</span></p>",
      "link": " "
    }
  },
  '7': {
    "message": ""
  }
};

export default function handler(req, res) {
  const { id } = req.query;
  const detail = eventDetails[id];
  if (!detail) {
    return res.status(404).json({ error: 'Event detail not found' });
  }
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(detail);
}
