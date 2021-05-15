const router = require('express').Router();

router.get('/', (req,res)=>{
    res.status(200).render('login');
});
router.get('/cadastra', (req,res)=>{
    res.status(200).render('cadastra');
});

module.exports = router;