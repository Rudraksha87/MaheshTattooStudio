require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { Resend } = require("resend");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/book", upload.array("images"), async (req, res) => {
  try {
    const { name, email, phone, style, date, message } = req.body;

    let html = `
      <h2>🎨 New Tattoo Booking</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Style:</strong> ${style}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    if (req.files?.length) {
      html += "<h3>Reference Images</h3>";

      req.files.forEach((file) => {
        html += `
          <p><strong>${file.originalname}</strong></p>
          <img
            src="data:${file.mimetype};base64,${file.buffer.toString("base64")}"
            width="300"
            style="margin-bottom:20px;"
          />
        `;
      });
    }

    await resend.emails.send({
      from: "Mahesh Tattoo Studio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      subject: `🖋️ New Tattoo Booking - ${name}`,
      html,
    });

    res.json({
      success: true,
      message: "Booking submitted successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});