import React from "react";

const Banner = () => {
  return (
    <div className="">
      <section
        style={{ height: "90vh" }}
        class="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2"
      >
        <div class="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
          <span class="mb-3 text-white bg-purple-900 badge rounded-lg px-2">
          Code Avengers
          </span>
          <h1 class="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
            Level Up Your Coding Skill
          </h1>
          <p class="pr-0 mb-4 text-md text-gray-700 tracking-relaxed lg:pr-16">
          Code Avengers is a great company that offers online, in-person and
            on-demand coding classes and camps for kids of all ages. Their free
            on-demand class, Introduction to Scratch Coding, is the perfect way
            for kids to begin their coding journey!
          </p>
          <button className="p-2 bg-purple-900 rounded text-white text-lg">
            Learn Coding
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            alt="3 women looking at a laptop"
            class="object-cover w-full h-64 bg-gray-100 md:h-full"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
