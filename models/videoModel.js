const pool = require('../config/db');

const Video = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM Videos');
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM Videos WHERE id = ?', [id]);
    return rows[0];
  },

  async create(video) {
    const { course_id, title, video_url } = video;
    const [result] = await pool.query(
      'INSERT INTO Videos (course_id, title, video_url) VALUES (?, ?, ?)',
      [course_id, title, video_url]
    );
    return result.insertId;
  },

  async update(id, video) {
    const { course_id, title, video_url } = video;
    await pool.query(
      'UPDATE Videos SET course_id = ?, title = ?, video_url = ? WHERE id = ?',
      [course_id, title, video_url, id]
    );
  },

  async delete(id) {
    await pool.query('DELETE FROM Videos WHERE id = ?', [id]);
  },
};

module.exports = Video;
