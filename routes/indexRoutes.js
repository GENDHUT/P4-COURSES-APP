const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');
const Video = require('../models/videoModel');

router.get('/', async (req, res) => {
  try {
    // Ambil semua courses
    const courses = await Course.getAll();
    
    // Ambil semua videos
    const videos = await Video.getAll();

    console.log("Courses:", courses);
    console.log("Videos:", videos);

    // Gabungkan courses dengan video yang sesuai
    const coursesWithVideos = courses.map(course => {
      return {
        ...course,
        videos: videos.filter(video => video.course_id === course.id).slice(0, 6) // Maksimal 6 video
      };
    });

    res.render('index', { courses: coursesWithVideos });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Terjadi kesalahan pada server");
  }
});

module.exports = router;
