var express = require('express');
var router = express.Router();
var controller = require('../controllers/ElektronikController');

router.get('/',controller.Index);
router.get('/Bilgisayar',controller.Bilgisayar);

module.exports = router;
