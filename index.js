// Imports
import express from 'express';

// Importing routes
import weatherRoute from "./routers/weatherRoute.js"


const app = express();
const port = 3000;


// Middlewares
app.use(express.static("public"));
app.set('view engine', 'ejs');


// Using routes from "./routers/weatherRoute.js"
app.use("/", weatherRoute);



// Listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
