const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const userRoutes = require("./routes/user.js")
const schedule = require("./routes/schedule.js")
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(helmet())

app.use("/api", userRoutes)
app.use("/api", schedule)

// -------
const mongoose = require('mongoose');

const itemsRouter = require('./routes/schedule.js');

// Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/officehourscheduler', {
mongoose.connect('mongodb+srv://alishagaikwad03:016hRZDGX4xCBWOE@cluster0.zmq63nq.mongodb.net/officehourscheduler', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

// Routes
app.use('/api/items', itemsRouter);

// app.use(express.static("./CN-Project-Frontend1/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "CN-Project-Frontend1", "build", "index.html"))
// })

app.use(express.static(path.join(__dirname, 'CN-Project-Frontend1', 'build')));
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "CN-Project-Frontend1", "build", "index.html"))
});

// -------

app.listen(PORT, () => console.log("Listening"));


