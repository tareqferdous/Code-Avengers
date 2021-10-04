import React from 'react';
import { useParams } from 'react-router';
import courses from '../../../CourseInfo.json'

const ViewCourse = () => {
    const {id} = useParams();
    const currentCourse = courses[id];
    const {name, price, photo} = currentCourse;
    return (
        <main class="container max-w-6xl mx-auto my-6">
        <section class="flex flex-wrap shadow-xl">
            <div class="w-full h-64 md:w-7/12 md:h-auto">
                <img src={photo} alt="" />
            </div>
            <div class="w-full p-8 mx-auto overflow-hidden bg-white md:w-5/12 md:pt-24">
                <h2 class="mb-3 text-2xl font-bold leading-tight text-gray-900">
                   Course Name: {name}
                </h2>
                <p class="mb-5 leading-relaxed text-gray-600">
                    Price: {'$'+price}
                </p>  
            </div>
        </section>
    </main>
    
    );
};

export default ViewCourse;