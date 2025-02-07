const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

// Middleware untuk meng-handle data form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine ke EJS
app.set('view engine', 'ejs');

// Routing untuk courses (jika belum ada)
app.use('/courses', require('./routes/courseRoutes'));

// Routing untuk videos
app.use('/videos', require('./routes/videoRoutes'));

// Redirect halaman utama ke daftar courses (atau videos, sesuai kebutuhan)
app.get('/', (req, res) => {
  res.redirect('/courses');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
