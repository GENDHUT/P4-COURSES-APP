const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.index);
router.get('/create', courseController.showCreateForm);
router.post('/create', courseController.create);
router.get('/edit/:id', courseController.showEditForm);
router.post('/edit/:id', courseController.update);
router.get('/delete/:id', courseController.delete);

module.exports = router;
