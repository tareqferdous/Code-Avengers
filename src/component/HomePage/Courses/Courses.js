import React from 'react';
import course from '../../../CourseInfo.json'
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = course.slice(0, 4);
    return (
        <div className="my-16 md:mx-16 lg:mx-32 ">
        <h2 className="text-center text-purple-900 mb-10 font-bold text-3xl">Our Most Popular Courses </h2>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:min-w-full">
           
            {
                courses.map((course)=> <CourseCard course={course} key={course.id}></CourseCard>)
            }
        </div>
    </div>
    );
};

export default Courses;