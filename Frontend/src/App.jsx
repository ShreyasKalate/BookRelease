import { useState } from "react";
import "./App.css";
import Home from "./home/Home";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Authprovider";

function App() {
  const [authUser, setauthUser] = useAuth();
  console.log(authUser);
  const [count, setCount] = useState(0);

  return (
    <>
    
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
