// Imports
import express from 'express';

// Importing routes
import weatherRoute from "./routers/weatherRoute.js"

const PORT = 3000;
const localhost = `http://127.0.0.1:${PORT}`;
const app = express();




// Middlewares
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Using routes from "./routers/weatherRoute.js"
app.use("/", weatherRoute);



// Listening
app.listen(PORT, () => {
  console.log(`Server running on port ${localhost}`);
})
