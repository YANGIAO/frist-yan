const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors')

app.listen(3000);
router.get('/a',function(req,res){
    res.json({
        msg:'我'
    })
})

router.get('/b',function(req,res){
    res.json({
        msg:'爱你'
    })
})

router.get('/c',function(req,res){
    res.json({
        msg:'中国'
    })
})

app.use(cors())
app.use(router)