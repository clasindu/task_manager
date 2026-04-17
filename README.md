# 📝 Full-Stack Task Manager

A modern, responsive full-stack web application designed to help users organize their workflow cleanly and efficiently. It features a React frontend and a Spring Boot backend, connected to a PostgreSQL database.

## ✨ Features

* **Full CRUD Operations:** Create, Read, Update, and Delete tasks seamlessly.
* **Task Prioritization:** Assign HIGH, MEDIUM, or LOW priority to tasks.
* **Status Tracking:** Easily toggle tasks between OPEN and COMPLETE.
* **Responsive UI:** A clean, minimal, light-blue themed interface that works on both desktop and mobile devices.
* **Real-time Sync:** Instant frontend updates reflecting backend database changes.

## 🛠️ Tech Stack

**Frontend:**
* React (via Vite)
* JavaScript / JSX
* Axios (for API communication)
* Custom CSS (Modern UI with soft shadows and gradients)

**Backend:**
* Java 17+
* Spring Boot
* Spring Data JPA / Hibernate
* PostgreSQL Driver

**Database:**
* PostgreSQL

---

## 📂 Project Structure

This is a monorepo containing both the frontend and backend codebases:

task-manager-fullstack/
├── backend/src          # Spring Boot REST API
└── frontend/         # React/Vite UI

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
Before you begin, ensure you have the following installed:
* **Node.js** (v18 or higher)
* **Java Development Kit (JDK)** (v17 or higher)
* **PostgreSQL**
* **pgAdmin** (optional, for database viewing)

### 1. Database Setup
1. Open PostgreSQL/pgAdmin.
2. Ensure you have a database named `postgres`.
3. The backend expects the following credentials by default:
4. *Note: You do not need to create the tables manually. Spring Boot (Hibernate) will automatically generate the `tasks` table when the backend starts.*

### 2. Backend Setup (Spring Boot)
1. Open a terminal and navigate to the backend folder (`cd backend`).
2. Run the application:
   * **Windows:** `mvnw spring-boot:run`
   * **Mac/Linux:** `./mvnw spring-boot:run`
3. The server will start on `http://localhost:8082`.

### 3. Frontend Setup (React)
1. Open a *new* terminal window and navigate to the frontend folder (`cd frontend`).
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
4. Open your browser and navigate to `http://localhost:5173` to view the app!
