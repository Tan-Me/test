const express = require("express");
const ImageCompressionService = require("../services/ImageCompressionService");
const router = express.Router();


router.get("/", (req, res, next)=>{
    res.json("Image Router");
})

router.post("/down", compressImage)


async function compressImage(req,res){
    try{
        const body = req.body;
        const imageUrl = body.url;
        await ImageCompressionService.compressImageFromUrl(imageUrl);
        res.status(200).json({status : "success"});
    }
    catch(err){
        res.status(err.statusCode||500).json(err.message||"SOMETHING_WENT_WRONG")
    }
}

module.exports = router;