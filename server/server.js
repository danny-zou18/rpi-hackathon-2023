import express from "express";
import cors from "cors";

const app = express();
PORT = 8000;

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})