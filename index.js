// Imports
import express from 'express';

// Importing routes
import weatherRoute from "./routers/weatherRoute.js"

//Importing dirname and filename
import { __filename, __dirname } from './routers/weatherRoute.js';



const app = express();
const port = 3000;



// Middlewares
app.use(express.static("public"));
app.set('view engine', 'ejs');



// Fetching the html form on load
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})


// Using routes from "./routers/weatherRoute.js"
app.use("/", weatherRoute);



// Listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
