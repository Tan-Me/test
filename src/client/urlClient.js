const axios = require('axios');
const { response } = require('../app');

async function bufferImageFromUrl(url){
    try{
        const res = await axios({
            url,
            responseType: "arraybuffer",
        });
        //
        ddsmnlas
        return res.data
    }
    catch(err){
        throw new Error("Error in downloading Image");
    }
}
