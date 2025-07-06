# 📬 Express Contact Form App

This is a simple Node.js web application built with **Express**, **EJS**, and **Express Validator**. It includes a basic contact form with validation and Bootstrap styling.

---

## 🚀 Features

- 📄 EJS-based dynamic views
- 📧 Contact form with name and email validation
- ❌ Displays validation errors with Bootstrap alerts
- ✅ Shows a success page after successful form submission
- 📦 Uses `body-parser` for handling form data

---

## 📁 Project Structure

project/
├── views/
│ ├── index.ejs // Home page
│ ├── contact.ejs // Contact form page
│ └── success.ejs // Success message page
├── public/ // Static assets (optional)
├── app.js // Main Express server file
├── package.json
└── .env // (optional for future config)


---

## 📥 Installation

1. **Clone the repository**:


git clone https://github.com/blessedwinner66/Contact-Form.git

Install dependencies:

npm install
▶️ Run the Server

node app.js or npm start
The app will be running on:

http://localhost:3000


✅ Validation Rules
Field	Rule
name	Required, minimum 3 characters
email	Required, valid email format

On validation error, the form will display error alerts using Bootstrap.

🧰 Technologies Used
Express

EJS

express-validator

Bootstrap 5

📸 Screenshots
🏠 Home Page

📩 Contact Form with Validation Errors

✅ Success Page with user input

📄 License
This project is open-source and available under the MIT License.

✍️ Author
IMPANO Blessed Winner
Feel free to connect and suggest improvements!
