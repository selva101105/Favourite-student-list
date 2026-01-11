import React from "react";
import { useStudentContext } from "./StudentContext";
import StudentCard from "./StudentCard";


function FavouriteStudents() {
  const { favourites, removeFromFavourites } = useStudentContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Favourite Students</h1>
      {favourites.length === 0 ? (
        <p>No favourite students added yet.</p>
      ) : (
        favourites.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            actionButton={
              <button
                onClick={() => removeFromFavourites(student.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            }
          />
        ))
      )}
    </div>
  );
}

export default FavouriteStudents;

