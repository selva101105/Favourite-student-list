import React from "react";

function StudentCard({ student, actionButton }) {
  return (
    <div className="border p-4 rounded shadow mb-4 bg-white">
      <h2 className="text-xl font-bold">{student.name}</h2>
      <p>ID: {student.id}</p>
      <p>Department: {student.department}</p>
      <p>Year: {student.year}</p>
      <div className="mt-2">
        {actionButton}
      </div>
    </div>
  );
}

export default StudentCard;
