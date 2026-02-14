<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/a4c6d787-6477-479b-9d8c-ef1d3dfb5573" />
⏳ Time-Locked Message App

A full-stack web application that allows users to create messages that can only be opened after a specified date and time.

Users can:

Create a message

Set an unlock date & time

View all saved messages

Open messages only when they are unlocked

🚀 Features

📝 Create time-locked messages

📅 Set custom unlock date & time

🔐 Prevent message access before unlock time

📂 Store messages in MongoDB

⚡ Dynamic UI updates

🌙 Clean modern UI design

🛠️ Tech Stack
Frontend

HTML

CSS

Vanilla JavaScript

Fetch API

Backend

Node.js

Express.js

MongoDB

Mongoose

📂 Project Structure
project-folder/
│
├── models/
│   └── Message.js
│
├── server.js
├── index.html
├── style.css
├── frontend.js
└── README.md

⚙️ How It Works

User enters:

Message content

Unlock date & time

Frontend sends a POST request:

{
  "content": "My future message",
  "unlockAt": "2026-02-20T18:30:00"
}


Backend:

Saves the message in MongoDB

Stores unlock time as a Date object

When user clicks Open Message:

Backend checks current time

If current time >= unlock time → message is shown

Else → access denied

🔌 API Endpoints
➤ Create Message

POST /messages

Body:

{
  "content": "Secret Message",
  "unlockAt": "2026-02-20T18:30:00"
}

➤ Get All Messages

GET /messages

➤ Open Message

GET /messages/:id

🧠 Concepts Used

REST API design

Date comparison logic

Mongoose Schema validation

Async/Await

DOM manipulation

Fetch API integration

Basic backend security logic

🖥️ UI Preview

Centered card layout

Clean input fields

Message list with unlock timestamps

“Open Message” button per message

Alert popup to show unlocked message

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repo-link>

2️⃣ Install dependencies
npm install

3️⃣ Start MongoDB

Make sure MongoDB is running locally.

4️⃣ Run server
node server.js


Server runs on:

http://localhost:3000

5️⃣ Open frontend

Open index.html using Live Server or browser.

📌 Future Improvements

Add authentication (JWT)

Add message encryption

Add countdown timer UI

Add delete/edit message option

Deploy using Render / Railway

Add animations & toast notifications

🎯 Why This Project Matters

This project demonstrates:

Full-stack development

Backend validation logic

Time-based conditional access

MongoDB integration

Clean UI implementation

Practical real-world concept (time capsules / scheduled secrets)
