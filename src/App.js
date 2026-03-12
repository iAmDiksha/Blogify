import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';
import List from './pages/List';
import Navbar from './components/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogPost from "./pages/BlogPost";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-blogs" element={<Blogs />} />
            <Route exact path="/about" element={<About header={"Write down your thoughts away!"} />} />
            <Route exact path="/list" element={<List />} />
            <Route path="/blogs/:index" element={<BlogPost />} />
          </Routes>
        </main>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
