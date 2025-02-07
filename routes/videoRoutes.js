const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/', videoController.index);
router.get('/create', videoController.showCreateForm);
router.post('/create', videoController.create);
router.get('/edit/:id', videoController.showEditForm);
router.post('/edit/:id', videoController.update);
router.get('/delete/:id', videoController.delete);

module.exports = router;
