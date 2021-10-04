import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const {id} = course;
    
  return (
    <div className="bg-gray-100">
      <div class="p-4 text-center bg-blue-100 border rounded shadow-lg">
          <img className="rounded" src={course.photo} alt="" />
        <h2 className="text-center text-xl font-bold text-gray-700 tracking-wide mt-2">{course.name}</h2>
        <p class="text-gray-700 font-medium">Price: {'$'+course.price}</p> <br />
        <Link to={`/destination/${id}`} className="p-2 text-white bg-purple-900 rounded-md mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
