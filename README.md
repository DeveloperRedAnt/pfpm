# Next.js JSON Event API

## Struktur Endpoint

- `GET /api/events`  
  Mengembalikan seluruh data event (dari `event.json`).

- `GET /api/events/[id]`  
  Mengembalikan detail event berdasarkan ID (mapping ID ke file JSON statis, misal: 1 = event-detail-belum-beruntung.json, dst).

## Cara Menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan server Next.js:
   ```bash
   npm run dev
   ```
3. Akses endpoint via browser atau tools seperti Postman:
   - http://localhost:3000/api/events
   - http://localhost:3000/api/events/1

## Catatan
- Semua data diambil dari file JSON statis di root project.
- Tidak ada autentikasi.
- Endpoint hanya untuk read-only.
