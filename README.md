# ConnectSphere

ConnectSphere is a full-stack social media application built with the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, posts, likes, friend management, and a responsive UI with dark mode support.

## Features

- **User Authentication:** Register and log in securely with JWT. Profile picture upload supported.
- **Profile Management:** View and edit your profile, including friend lists and user-specific data.
- **Posts & News Feed:** Create, edit, and delete posts with optional images. Like/dislike posts and view a dynamic feed.
- **Friend System:** Add or remove friends and view their profiles.
- **Responsive Design:** Fully responsive layout for desktop and mobile.
- **Dark Mode:** Toggle between light and dark themes.
- **Tech Stack:**
  - **Frontend:** React, Redux Toolkit, Material-UI
  - **Backend:** Node.js, Express
  - **Database:** MongoDB, Mongoose
  - **Other:** JWT for authentication, Multer for file uploads

## Folder Structure

```
ConnectSphere-project/
│
├── client/           # React frontend
│   ├── public/       # Static assets
│   ├── src/          # Source code (components, scenes, state, theme)
│   └── package.json
│
├── server/           # Express backend
│   ├── controllers/  # Route controllers (auth, users, posts)
│   ├── data/         # Sample data for seeding
│   ├── middleware/   # Auth middleware
│   ├── models/       # Mongoose models (User, Post)
│   ├── routes/       # API routes
│   ├── public/       # Uploaded assets
│   ├── index.js      # Server entry point
│   └── package.json
│
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the `server` folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with:
   ```
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The server runs on `http://localhost:3001`.

### Frontend Setup

1. Open a new terminal and navigate to the `client` folder:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
   The app runs on `http://localhost:3000`.

## Usage

- Register a new account or log in.
- Create posts, like/dislike, and manage your friends.
- Toggle dark/light mode from the navbar.
- View your profile and others’ profiles.

## Development Notes

- API endpoints are protected with JWT. Attach the token in the `Authorization` header as `Bearer <token>`.
- Images are uploaded and served from `server/public/assets`.
- To seed the database with sample users and posts, uncomment the `insertMany` lines in [`server/index.js`](server/index.js) and restart the server once.

## License

This project is for educational purposes.
