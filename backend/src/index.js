import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import aiRoutes from "./ai.routes.js"

dotenv.config();
const port = process.env.PORT || 3000;




const app = express();
app.use(express.json());


app.use(cors({
  origin: process.env.EXTENSION_ORIGIN,
  methods: ["GET", "POST"],
  credentials: true
}));

app.use("/api/extension",aiRoutes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});