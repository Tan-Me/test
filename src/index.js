// require('dotenv').config();
const app = require("./app")

const PORT = process.env.PORT||4000

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});


//image compress 
