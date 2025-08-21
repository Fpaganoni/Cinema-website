Cinema Website

Welcome to the Cinema Website repository! This is a full-stack web application designed to explore and manage a collection of movies. The frontend is built with modern web technologies and the backend is a robust API for handling movie data.

🚀 Technologies Used
This project is divided into two main parts:

Frontend
HTML5, CSS3, JavaScript: The core of the user interface.

Webpack: Module bundler used to compile and optimize frontend assets.

Axios: A promise-based HTTP client for making API calls to the backend.

Deployment: 

Backend
Node.js: The JavaScript runtime environment for the server-side.

Express.js: A minimal and flexible Node.js web application framework.

Mongoose: An elegant MongoDB object modeling tool for Node.js.

CORS: Middleware to enable Cross-Origin Resource Sharing.

Deployment: 

✨ Key Features
Display a list of movies fetched from the API.

Create and add new movies to the database.

Dedicated pages for a cinema history overview and content creation.

Responsive design for an optimal viewing experience on various devices.

📂 Project Structure
The project is organized into two main directories:

front/: Contains all the frontend code (HTML, CSS, JavaScript, Webpack configuration).

back/: Contains all the backend code (server, API routes, database models).

⚙️ Deployment Instructions
This project is configured to be deployed on Vercel (Frontend) and Render (Backend). It is crucial to set up the environment variables correctly for both services to communicate.

1. Backend Deployment on Render
Create a new "Web Service" on Render.

Connect your repository and set the root directory to back/.

In the "Environment" settings, add the following variable:

Name: DBMovies

Value: Your complete MongoDB connection string.

2. Frontend Deployment on Vercel
Create a new project on Vercel.

Connect your repository and set the root directory to front/.

In "Build and Development Settings", configure the following options:

Root Directory: front

Build Command: npm run build

Output Directory: public

In the "Environment Variables" section, add the following variable for the frontend to connect to your API:

Name: BASE_URL

Value: The URL of your Render backend service (e.g., https://your-service-name.onrender.com).

💻 Local Installation and Execution
To run the project on your local machine, follow these steps:

Clone the repository:

Configure environment variables:

Create a .env file in the root of the project.

Add your database connection string to it:

Install and run the Backend:

The backend server will start at http://localhost:3000.

Install and run the Frontend:

This command will compile the frontend files into the public folder. You can then open the index.html file in your browser to view the application.

✍️ Author
Franco Paganoni

📄 License
This project is licensed under the MIT License - see the  file for details.
