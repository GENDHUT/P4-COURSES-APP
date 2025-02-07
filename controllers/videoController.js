const Video = require('../models/videoModel');
const Course = require('../models/courseModel'); // Untuk mengambil data course di dropdown

// Fungsi untuk mengkonversi URL YouTube menjadi URL embed
function convertToEmbedUrl(url) {
  // Misalnya, untuk URL: https://youtu.be/DC6JppqHkaM?list=RDEMCI2wPNzV0xPhm5R9l6ofvw
  const regex = /youtu\.be\/([A-Za-z0-9_-]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url; // kembalikan URL asli jika tidak cocok
}

const videoController = {
  // Menampilkan daftar video
  async index(req, res) {
    try {
      let videos = await Video.getAll();
      // Konversi URL video ke URL embed YouTube
      videos = videos.map(video => {
        return {
          ...video,
          video_url: convertToEmbedUrl(video.video_url)
        };
      });
      res.render('videos/index', { videos });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Menampilkan form untuk membuat video baru
  async showCreateForm(req, res) {
    try {
      const courses = await Course.getAll();
      res.render('videos/create', { courses });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Menangani proses pembuatan video baru
  async create(req, res) {
    try {
      const { course_id, title, video_url } = req.body;
      await Video.create({ course_id, title, video_url });
      res.redirect('/videos');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Menampilkan form edit video
  async showEditForm(req, res) {
    try {
      const video = await Video.getById(req.params.id);
      if (!video) {
        return res.status(404).send('Video tidak ditemukan');
      }
      const courses = await Course.getAll();
      res.render('videos/edit', { video, courses });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Menangani proses update video
  async update(req, res) {
    try {
      const { course_id, title, video_url } = req.body;
      await Video.update(req.params.id, { course_id, title, video_url });
      res.redirect('/videos');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Menangani proses penghapusan video
  async delete(req, res) {
    try {
      await Video.delete(req.params.id);
      res.redirect('/videos');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = videoController;
