const transporter = require("../config/emailConfig");

// Contact form email
const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "punamsahook@gmail.com",
    subject: `New Portal Message: ${subject}`,
    html: `
        <h3>You have a new contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
};

// Idea submission email
const sendIdeaEmail = async (req, res) => {
  const { ideaEmail, ideaMessage } = req.body;

  const mailOptions = {
    from: '"Digital Learning Portal" <your-email@gmail.com>',
    to: "punamsahook@gmail.com",
    subject: "🚀 New Idea Submitted!",
    html: `
        <h3>A new idea has been submitted through the portal!</h3>
        <p><strong>Sender's Email:</strong> ${ideaEmail || "Not provided"}</p>
        <hr>
        <p><strong>Idea:</strong></p>
        <p>${ideaMessage}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Idea email sent successfully!");
    res.status(200).json({ message: "Thank you for your idea!" });
  } catch (error) {
    console.error("Error sending idea email:", error);
    res.status(500).json({ message: "Failed to submit idea." });
  }
};

module.exports = { sendContactEmail, sendIdeaEmail };
