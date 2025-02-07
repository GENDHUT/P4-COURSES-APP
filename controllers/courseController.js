const Course = require('../models/courseModel');

const courseController = {
  async index(req, res) {
    try {
      const courses = await Course.getAll();
      res.render('courses/index', { courses });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async showCreateForm(req, res) {
    res.render('courses/create');
  },

  async create(req, res) {
    try {
      const { title, description } = req.body;
      await Course.create({ title, description });
      res.redirect('/courses');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async showEditForm(req, res) {
    try {
      const course = await Course.getById(req.params.id);
      if (!course) {
        return res.status(404).send('Course not found');
      }
      res.render('courses/edit', { course });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async update(req, res) {
    try {
      const { title, description } = req.body;
      await Course.update(req.params.id, { title, description });
      res.redirect('/courses');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async delete(req, res) {
    try {
      await Course.delete(req.params.id);
      res.redirect('/courses');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = courseController;
