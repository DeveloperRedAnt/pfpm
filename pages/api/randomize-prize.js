// Endpoint: POST /api/randomize-prize
// Returns a random prize

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // For demonstration, return static prize
  res.status(200).json({
    id: 1,
    name: 'Tax',
    image: 'https://example.com/image.jpg',
    remaining: 3
  });
}
