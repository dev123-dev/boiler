const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
//const path = require('path');
const app = express();
const cronjob = require("../DAG_mongo/cronjob");

// Connect Database
connectDB();

app.use(cors());
// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/user", require("../DAG_mongo/routes/api/user"));
app.use("/api/auth", require("../DAG_mongo/routes/api/auth"));
app.use("/api/organization", require("../DAG_mongo/routes/api/organization"));
app.use("/api/group", require("../DAG_mongo/routes/api/group"));
app.use("/api/category", require("../DAG_mongo/routes/api/category"));
app.use("/api/designation", require("../DAG_mongo/routes/api/designation"));

// Set static folder for client build Serve static assets in production
//app.use(express.static('client/build'));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5433;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
