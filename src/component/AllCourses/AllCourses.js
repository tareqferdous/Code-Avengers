import React from 'react';
import courses from '../../CourseInfo.json'
import DisplayAllCourse from './DisplayAllCourse';

const AllCourses = () => {
    return (
        <div className="my-16 md:mx-16 lg:mx-32">
        <h2 className="text-center text-purple-900 mb-10 font-bold text-3xl">All Courses </h2>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:min-w-full">
           
            {
                courses.map((course)=> <DisplayAllCourse course={course} key={course.id}></DisplayAllCourse>)
            }
        </div>
    </div>
    );
};

export default AllCourses;