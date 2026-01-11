import React from "react";
import { useStudentContext } from "./StudentContext";
import StudentCard from "./StudentCard";

function StudentList() {
  const { students, favourites, addToFavourites } = useStudentContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      {students.map((student) => {
        const isFavourite = favourites.some((fav) => fav.id === student.id);

        return (
          <StudentCard
            key={student.id}
            student={student}
            actionButton={
              <button
                onClick={() => addToFavourites(student)}
                disabled={isFavourite} 
                className={`px-3 py-1 rounded text-white ${
                  isFavourite
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-blue-500 hover:bg-blue-600"  
                }`}
              >
                {isFavourite ? "Added" : "Add to Favourite"}
              </button>
            }
          />
        );
      })}
    </div>
  );
}

export default StudentList;
