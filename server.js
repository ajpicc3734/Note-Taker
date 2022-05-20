const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

//HTML Routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// This route is designated with the endpoint /api/candidates.
//Remember, the api in the URL signifies that this is an API endpoint.

//API Routes
app.post("", (req, res) => {});

app.get("", (req, res) => {});

app.put("", (req, res) => {});

app.delete("", (req, res) => {});

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(` server now on port ${PORT}!`);
});
