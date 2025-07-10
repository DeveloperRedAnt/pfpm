// Endpoint: GET /api/prizes
// Returns a list of prizes with bannerImage and remaining count

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  res.status(200).json({
    bannerImage: 'https://example.com/banner.jpg',
    prizes: [
      {
        id: 1,
        name: 'Tax',
        backgroundColor: '#FF0000',
        textColor: '#FFFFFF'
      },
      {
        id: 2,
        name: 'Queue Counter',
        backgroundColor: '#00FF00',
        textColor: '#000000'
      }
    ],
    remaining: 3
  });
}
