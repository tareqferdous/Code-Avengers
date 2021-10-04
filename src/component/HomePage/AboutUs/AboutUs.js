import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-green-50">
      <section class="text-gray-600 body-font mx-16">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://www.readingkingdom.com/blog/wp-content/uploads/2019/11/teach-your-kids-to-code.jpg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Why Coder Monkey?
            </h1>
            <p class="mb-8 leading-relaxed">
              Every piece of technology that we use runs on computer programs.
              Your computer and your apps were created by a computer programmer
              / software developer / coder. At Coder Kids, our main focus is
              teaching students the principles of computer programming through
              coding games, animations, and simple programs.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
