const axios = require('axios');
const { response } = require('../app');

async function bufferImageFromUrl(url){
    try{
        // i love my india 
        const res = await axios({
            url,
            responseType: "arraybuffer",
        });
        return res.data
    }
    catch(err){
        throw new Error("Error in downloading Image");
    }
}
