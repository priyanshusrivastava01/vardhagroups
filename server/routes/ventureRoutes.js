const express = require('express');
const router = express.Router();
const {
  getVentures,
  getVentureBySlug
} = require('../controllers/ventureController');

router.get('/', getVentures);
router.get('/:slug', getVentureBySlug);

module.exports = router;
