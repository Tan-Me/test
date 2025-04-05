// require('dotenv').config();
const app = require("./app")

const PORT = process.env.PORT||4001

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});


//image compress 
