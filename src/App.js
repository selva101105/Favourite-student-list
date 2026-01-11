import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StudentList from "./component/StudentList";
import FavouriteStudents from "./component/FavouriteStudents";
import { StudentProvider } from "./component/StudentContext";


function App() {
  return (
    
    <StudentProvider>
      <Router>
        <div className="bg-gray-100 ">
          <nav className="bg-gray-800 text-white p-4 flex gap-4">
            <Link to="/" className="hover:underline">Students</Link>
            <Link to="/favourites" className="hover:underline">Favourites</Link>
          </nav>
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<FavouriteStudents />} />
          </Routes>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
     
