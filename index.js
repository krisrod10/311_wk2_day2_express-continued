const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

let static = express.static("./public");
app.use(static);

let commentsRoutes = require("./routes/comments");
app.use(commentsRoutes);

let contactRoutes = require("./routes/contacts");
app.use(contactRoutes);

let productsRoutes = require("./routes/products");
app.use(productsRoutes);

let vehicleRoutes = require("./routes/vehciles");
app.use(vehicleRoutes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
