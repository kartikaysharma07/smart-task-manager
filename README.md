# Smart Task Manager

A simplified web application built with React JS to manage tasks. The primary focus is on task CRUD functionality, a basic dashboard, and minimal real-time interaction. The app allows users to create, read, update, and delete tasks, manage task priority, and track task completion.

## Features
- **Task Management**: Create, read, update, and delete tasks.
- **Task Fields**: Manage title, description, due date, and priority for each task.
- **Simplified Dashboard**: Displays the number of completed and pending tasks.
- **Dark Mode/Light Mode**: Toggle between light and dark themes for better user experience.
- **State Management**: Uses Redux for global state management and Context API for dark/light mode handling.
- **Task Actions**: Use FontAwesome icons for actions such as edit, delete, and mark tasks as complete.
- **Responsive UI**: Built with Tailwind CSS to ensure the app is responsive and modern across all devices.

## Tech Stack
- **React JS**: JavaScript library for building user interfaces.
- **Vite**: A modern build tool for fast development and optimal performance.
- **Tailwind CSS**: A utility-first CSS framework for styling the UI.
- **FontAwesome**: Icon library used for task actions (edit, delete, complete).
- **Redux**: State management tool to handle global state for task data.
- **Context API**: Used to manage dark mode and light mode preferences.
- **Local Storage**: To persist task data and user preferences (dark/light mode).
- **React Router**: For navigation between pages/views in the app.

## Installation
1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/your-username/smart-task-manager.git
    ```
2. Navigate to the project directory.
    ```bash
    cd smart-task-manager
    ```
3. Install dependencies.
    ```bash
    npm install
    ```
4. Run the app.
    ```bash
    npm run dev
    ```

## License
This project is open-source and available under the [MIT License](LICENSE).
