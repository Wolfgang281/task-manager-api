const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");
const { authenticateJWT } = require("./middleware/authenticate");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", authenticateJWT, taskRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
