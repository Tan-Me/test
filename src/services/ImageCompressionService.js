const sharp = require('sharp');
const fs = require('fs');
const axios = require("axios")
class ImageCompressionService {
    static async compressImageFromUrl(link){
        try{
            if(!this.validateURL(link)){
                throw new Error(400, "Invalid Url");
            }
            const outputPath = "./src/static/image.jpeg";
            const imageBuffer = await this.bufferImageFromUrl(link);
            console.log(imageBuffer);
            const compressedImageBuffer = await sharp(imageBuffer).jpeg({ quality: 50 }).toBuffer();
            fs.writeFileSync(outputPath, compressedImageBuffer);
            console.log(this.getFileSizeInKB(outputPath));
        }
        catch(err){
            console.log("Error in Image compression", err);
            throw err;
        }
    }   

    static async bufferImageFromUrl(url){ //move to client
        try{
            const res = await axios({
                url,
                responseType: "arraybuffer",
            });
            const buffer = Buffer.from(res.data, "utf-8")
            return buffer;
        }
        catch(err){
            console.log("Error in Image fetch", err.message);
            throw new Error("Error in downloading Image");
        }
    }

    // Function to get the file size
    static  getFileSizeInKB(filePath) {
        const stats = fs.statSync(filePath);
        return stats.size / 1024;  // size in KB
    };

    static async validateURL(url) {
        const regex = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?' + // port
            '(\\/[-a-zA-Z\\d%_.~+]*)*' + // path
            '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-zA-Z\\d_]*)?$','i'); // fragment locator
        return !!regex.test(url);
    }
}


module.exports = ImageCompressionService;