// Endpoint: POST /api/redeem-spin
// Accepts identity_card and location_address

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { identity_card, location_address } = req.body;

  if (!identity_card || !location_address) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  // Simulate redeem logic
  res.status(200).json({ success: true });
}
