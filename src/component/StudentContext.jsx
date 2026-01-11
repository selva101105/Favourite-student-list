import React, { createContext, useState, useContext } from "react";

// Create the context
const StudentContext = createContext();

function StudentProvider({ children }) {
  // Sample students
  const [students, setStudents] = useState([
    { id: 1, name: "Bharath", department: "CSE", year: "3rd Year" },
    { id: 2, name: "Priya", department: "IT", year: "Final Year" },
    { id: 3, name: "Rahul", department: "Mech", year: "2nd Year" },
    { id: 4, name: "Kavya", department: "Civil", year: "1st Year" },
    { id: 5, name: "Arun", department: "ECE", year: "3rd Year" }
  ]);

  // Favourite students
  const [favourites, setFavourites] = useState([]);

  // Add student to favourites (avoid duplicates)
  const addToFavourites = (student) => {
    const exists = favourites.some((s) => s.id === student.id);
    if (!exists) {
      setFavourites([...favourites, student]);
    }
  };

  // Remove student from favourites
  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((s) => s.id !== id));
  };

  // Provide context values
  return (
    <StudentContext.Provider value={{ students, favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </StudentContext.Provider>
  );
}

// Custom hook for easy access
function useStudentContext() {
  return useContext(StudentContext);
}

export { StudentProvider, useStudentContext };
