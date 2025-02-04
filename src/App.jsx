import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TaskForm from "./components/Task/TaskForm";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex items-center flex-col overflow-y-hidden">
          <div className="rounded-lg w-full">
            <Navbar />
            <div className="style={{ background: `var(--light-gradient)` }} mx-6 md:mx-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task/new" element={<TaskForm />} />
                <Route path="/task/:id/edit" element={<TaskForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
