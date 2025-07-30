

# 📺 YouTube Clone - Full Stack MERN Application

This is a YouTube Clone built using the MERN stack – that’s MongoDB(Compass), Express, React, and Node js. Right on the homepage, you can browse all uploaded videos. There's a clean layout with thumbnails, titles, categories, and upload times. You can search videos by title using the search bar or filter videos by category, like ‘Music’, ‘React’, or ‘JavaScript’. Click on any video to view it in our video player page. You’ll see the video embedded, along with its title, description, and like/dislike buttons. Users can also comment, edit, or delete their comments if they’re logged in. Logged-in users can upload videos by adding a title, description, category, thumbnail, and YouTube link. Each user has a channel page where all their uploaded videos are displayed. New users can sign up or log in securely using JWT authentication. This full-stack project demonstrates real-world functionality like user authentication, API integration — all styled with CSS.


---

## 🧠 Features Overview

- ✅ User Authentication (JWT-based)
- 📥 Upload videos with title, description, type, and thumbnail
- ▶️ Watch videos via embedded YouTube player
- 💬 Add, edit, and delete comments
- 🔍 Search videos by title
- 📂 Filter videos by category/type
- 👤 Channel (Profile) view with uploaded videos
- 📱 Fully Responsive for mobile and tablet
- 🚦 Error handling for all async operations

---


## 🧠 Features

✅ **User Features**
- Secure Sign Up / Login (JWT Auth)
- Personal channel dashboard
- Upload videos with metadata
- Search videos by title
- Filter by video categories
- Comment on videos (CRUD)
- Edit/delete own comments

📺 **Video Playback**
- Embedded YouTube player for smooth streaming
- Video metadata: title, category, user info


---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js (v18+ recommended)
- MongoDB Compass
- npm

---

### 🔙 Backend Setup

cd yt backend
npm install

Start the server:
npm start

The backend should now be running at `http://localhost:8000`.

---

### 🎬 Frontend Setup

cd yt
npm install

Start the React server:
npm run dev

Access the app at `http://localhost:5173` (or whichever port Vite provides).

---

## 📤 API Endpoints Overview

### 🔐 Auth Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/auth/signup` | POST | Register new user |
| `/auth/login` | POST | Login existing user |
| `/auth/logout` | POST | Logout existing user |

### 📹 Video Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/video` | POST | Upload a new video |
| `/api/allvideo` | GET | Get all videos |
| `/api/getvideobyid/:id` | GET | Get single video |
| `/api/:userId/channel` | GET | Get all video by User ID |


### 💬 Comment Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/commentApi/comment/:videoId` | GET | Fetch all comments for video |
| `/commentApi/comment` | POST | Add comment |
| `/commentApi/comment/:id` | PUT | Edit comment |
| `/commentApi/comment/:id` | DELETE | Delete comment |


---

## 🧑‍💻 Tech Stack

| Frontend    | React, Vite, React Router, Axios, MUI Icons |
| Backend     | Node.js, Express, Mongoose, JWT, bcrypt, cors |
| Database    | MongoDB (Compass) |
| Styling     | Vanilla CSS |

---

## 🛡️ Security

- JWT-based authentication for protected routes
- Encrypted passwords using bcrypt
- Route-based access control
- Error and exception handling for safe execution


------------------------------------------------------------------------------------------------












