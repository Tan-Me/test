const express = require("express")
const router = express.Router();


router.get("/", (req, res, next)=>{
    res.json("Index Router");
})



module.exports = router;