var express = require('express');
var router = express.Router();
var controller = require('../controllers/ElektronikController');

//Middleware kısmı her istek için çağrılacak.
//
router.use(function(req,res,next){
    req.Sample = "Mert";
    next();
});

router.get('/',controller.Index);
router.post('/',controller.IndexPost);

router.get('/Bilgisayar',controller.Bilgisayar);

module.exports = router;
