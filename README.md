# 🚀 React-Dashboard Application
__Build a React-Vite dashboard with a Node.js backend, featuring a Pie Chart, Line Chart, Table, and User Profile. Utilize react-chartjs-2 and MUI x-chart for charts, Tailwind CSS and MUI for styling, and Express.js for API endpoints__
  - ### Extra features
      - Implement Dark and Light mode switching based on user preference.
      - Ensure responsiveness
      - Enhance error management with improved UI design.
        
## Installation and Setup

#### 1 Prerequisites:
- Make sure you have __Node.js 18 or later__  and npm (Node Package Manager) installed on your system. You can download and install them from the official Node.js website: https://nodejs.org/

#### 2 Clone the Repository:

- Open your terminal or command prompt.
- Change the current working directory to where you want to store the Dahboard application.
- Run the following command to clone the repository:
```bash
git clone https://github.com/Fawaskp/React-Dashboard.git
```
#### 3 Install Backend and Frontend Dependencies:
- Change the current working directory to the Server folder
- Run the following command to install the frontend dependencies:
```bach
npm install
```
- Change the current working directory to the UI folder
- Run the following command to install the frontend dependencies:
```bach
npm install
```


#### 4 Environment Variables (Frontend):
- - Create a `.env` file based on the provided [`.env.example`](https://github.com/Fawaskp/React-Dashboard/blob/main/UI/.env.example) to configure local environment variables.
- note: _No Environment variables for backend_

#### 5 Start API Server 
- Before running this application, set up the and run backend server and make sure its working proper, otherwise  it will lead to errors.
- start the backend development server by running the following command
```bash
npm start
```
- This will build the backend and open the development server at http://localhost:3001 (make sure 3001 port is available).
  

#### 6 Start the Development Server (Frontend):
- After the dependencies are installed, start the frontend development server by running the following command:
```bash
npm run dev
```
- This will build the frontend and open the development server at http://localhost:5173 (or another available port if 5173 is already in use).
