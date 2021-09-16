const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

let static = express.static("./public");
app.use(static);

let commentsRoutes = require("./routes/comments");
app.use(commentsRoutes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
