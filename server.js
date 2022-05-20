const express = require("express");
const path = require("path");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// function deleteNote() {

// }

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(` server now on port ${PORT}!`);
});
