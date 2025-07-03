const eventData = {
  "active_program": {
    "id": 5,
    "product_id": 2,
    "name_event": "Gift Voucher Dadakan",
    "start_date": "2025-05-01 00:00:00",
    "end_date": "2025-07-20 23:59:59",
    "slug": "2024-05-07-gift-voucher-dadakan",
    "image_url": "http://localhost:8000/storage/37/coupon-voucher.png",
    "is_active": 1,
    "draw_date": "2025-07-25 00:00:00",
    "description": "<p>Gift Voucher Dadakan</p>"
  },
  "past_program": {
    "current_page": 1,
    "data": [
      {
        "id": 4,
        "product_id": null,
        "name_event": "Promo BLT",
        "start_date": "2024-05-07 00:00:00",
        "end_date": "2024-05-22 23:59:59",
        "slug": "2024-05-07-promo-blt",
        "image_url": "http://localhost:8000/storage/36/promo-blt.png",
        "is_active": 0,
        "draw_date": "2024-05-25 00:00:00",
        "description": "<p>Promo Bio Fosfat Langsung Tunai</p>"
      },
      {
        "id": 7,
        "product_id": null,
        "name_event": "Akhir Bulan Menawan",
        "start_date": "2024-05-27 00:00:00",
        "end_date": "2024-05-30 23:59:59",
        "slug": "2024-05-07-akhir-bulan-menawan",
        "image_url": "http://localhost:8000/storage/40/banner-3.jpg",
        "is_active": 0,
        "draw_date": "2024-05-31 00:00:00",
        "description": "<p>Akhir Bulan Menawan</p>"
      },
      {
        "id": 1,
        "product_id": null,
        "name_event": "Tabrak Mendadak",
        "start_date": "2024-05-07 00:00:00",
        "end_date": "2024-05-31 23:59:59",
        "slug": "2024-05-07-tabrak-mendadak",
        "image_url": "http://localhost:8000/storage/30/banner-2.jpg",
        "is_active": 0,
        "draw_date": "2024-06-01 00:00:00",
        "description": "<p>Event Tabrak Mendadak</p>"
      }
    ],
    "first_page_url": "http://localhost:8000/api/lucky-draw/events?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://localhost:8000/api/lucky-draw/events?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "http://localhost:8000/api/lucky-draw/events?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://localhost:8000/api/lucky-draw/events",
    "per_page": 10,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  }
};

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(eventData);
}
