import contactRoute from "./routes/contactRoute.js";


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // MUST be at top before using process.env
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoute);


// 🔹 MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌:", err.message);
  });

// 🔹 Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 🔹 Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
