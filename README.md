# To-Do List Project

This project is a full-stack to-do list application with an Express backend and a Next.js frontend.

## Project Structure

### Backend:
The backend is located in the `backend` folder. It includes:
- An Express server in [`backend/server.js`](backend/server.js)
- API routes in [`backend/routes/taskRoutes.js`](backend/routes/taskRoutes.js)
- A Task model in [`backend/models/task.js`](backend/models/task.js)
- Database connection configuration in [`backend/config/db.js`](backend/config/db.js) *(assumed)*

### Frontend:
The frontend is located in the `frontend` folder. It features:
- A Next.js application with a To-Do page in [`frontend/src/app/todo/page.js`](frontend/src/app/todo/page.js)
- A Task list component in [`frontend/src/components/TaskList.js`](frontend/src/components/TaskList.js)
- Tailwind CSS configuration in [`frontend/tailwind.config.mjs`](frontend/tailwind.config.mjs)
- PostCSS configuration in [`frontend/postcss.config.mjs`](frontend/postcss.config.mjs)

---

## Installation

### 1. Backend Setup:

1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file (refer to `backend/.env.example`) for environment variables such as:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   node server.js
   ```
   The server will start on the port specified in your `.env` file or default to port `5000`.

---

### 2. Frontend Setup:

1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm run dev
   ```
   The frontend application will be available at `http://localhost:3000`.

---

## Features

✅ **Add Tasks** - Create new tasks via the API.

✅ **View Tasks** - Fetch a list of tasks from the server.

✅ **Update Tasks** - Modify task details.

✅ **Delete Tasks** - Remove tasks using API routes.

---

## Technologies Used

- **Backend:** Node.js, Express, MongoDB
- **Frontend:** Next.js, React, Tailwind CSS
- **Environment Management:** dotenv

---

## License

This project is licensed under the [MIT License](LICENSE).

---

**Happy coding! 🚀**
