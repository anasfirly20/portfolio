import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./sendEmail.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `http:localhost:5173` }));
const port = process.env.PORT || 4000;

// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { fullname, email, pass, confirmPass } = req.body;
    EmailSender({ fullname, email, pass, confirmPass });
    res.json({ msg: "Your message sent successfully" });
    console.log(req.body);
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
