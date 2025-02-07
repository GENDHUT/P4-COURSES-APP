const pool = require('../config/db');

const Course = {
  async getAll() {
    const [courses] = await pool.query('SELECT * FROM Courses');

    for (let course of courses) {
      const [videos] = await pool.query(
        'SELECT * FROM Videos WHERE course_id = ? LIMIT 6',
        [course.id]
      );
      course.videos = videos;
    }

    return courses;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM Courses WHERE id = ?', [id]);
    if (rows.length === 0) return null;

    const course = rows[0];

    const [videos] = await pool.query(
      'SELECT * FROM Videos WHERE course_id = ? LIMIT 6',
      [id]
    );
    course.videos = videos;

    return course;
  },

  async create(course) {
    const { title, description } = course;
    const [result] = await pool.query(
      'INSERT INTO Courses (title, description) VALUES (?, ?)',
      [title, description]
    );
    return result.insertId;
  },

  async update(id, course) {
    const { title, description } = course;
    await pool.query(
      'UPDATE Courses SET title = ?, description = ? WHERE id = ?',
      [title, description, id]
    );
  },

  async delete(id) {
    await pool.query('DELETE FROM Courses WHERE id = ?', [id]);
  },
};

module.exports = Course;
