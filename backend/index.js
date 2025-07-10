const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/leads', async (req, res) => {
  const { term = '', location = '', minRating = 0 } = req.query;

  try {
    const response = await axios.get('https://serpapi.com/search.json', {
      params: {
        engine: 'google_maps',
        type: 'search',
        q: `${term} in ${location}`,
        api_key: process.env.SERPAPI_KEY,
      },
    });

    const results = response.data.local_results || [];

    const filtered = results
      .filter((item) => item.rating && item.rating >= parseFloat(minRating))
      .map((item) => ({
        name: item.title,
        address: item.address,
        website: item.website || item.gmaps_link,
        email: 'Not Available',
        source: 'Google Maps via SerpAPI',
      }));

    res.json(filtered);
  } catch (err) {
    console.error('SerpAPI Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch from SerpAPI' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
