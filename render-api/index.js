// const express = require('express');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// // const PORT = 3001;
// const PORT = process.env.PORT || 3001;


// app.get('/', async (req, res) => {
//   try {
//     // קבלת ה-API Key מהסביבה
//     const apiKey = process.env.RENDER_API_KEY;

//     // שליחת בקשה ל-Render API כדי לקבל את רשימת האפליקציות
//     const response = await axios.get('https://api.render.com/v1/services', {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });

//     // החזרת נתוני האפליקציות ב-JSON
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching data from Render API:', error);
//     res.status(500).json({ message: 'Error fetching data' });
//   }
// });

// // הפעלת השרת
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


app.get('/render-apps', async (req, res) => {
  try {
    const apiKey = process.env.RENDER_API_KEY;
    if (!apiKey) {
      throw new Error('RENDER_API_KEY is missing');
    }

    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Render API:', error.response?.status || error.message);
    res.status(error.response?.status || 500).json({
      message: 'Error fetching data',
      error: error.message,
      details: error.response?.data,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});