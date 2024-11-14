import React from 'react';
import heroimg from "../assets/images/hero-section.png"
import brain from "../assets/images/skills-covered-brain-.png"
import { FiChevronRight } from "react-icons/fi";

function Home() {
  return (
    <div className="bg-white py-4 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 px-5 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Software Development
          </h1>
          <p className="text-lg font-light text-gray-700 my-7">
            Software development is the process of creating, maintaining, and improving computer programs and applications. It involves stages like planning, design, coding, testing, deployment, and maintenance. Learn with Real Work-Ex. Join the best product-based companies with guaranteed placement.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-primary text-white font-medium rounded-full shadow-md hover:bg-blue-700 focus:outline-none">
              Download Curriculum
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white focus:outline-none">
              Apply & Start For Free
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          <img
            src={heroimg}
            alt="Hero"
            className="w-3/4 md:w-full h-auto rounded-lg z-30"
          />

          {/* Floating Learners Button */}
          <button className="bg-white hover:bg-slate-500 hover:text-white absolute bottom-[145px] left-[130px] z-50 px-14 py-3 text-gray-600 font-semibold rounded-md shadow-bottom-only focus:outline-none">
            Learners
          </button>


          {/* Floating Packages UpTo Button */}
          <button className="bg-white hover:bg-slate-500 hover:text-white absolute bottom-[70px] right-[120px] z-40 px-8 py-3 text-gray-600 font-semibold rounded-md shadow-bottom-only focus:outline-none">
            Packages Upto
          </button>
        </div>

      </div>
      <div className="flex justify-center items-center  bg-white">
        <div className="text-white rounded-4xl p-2 w-3/4 max-w-7xl">
          <div className="overflow-x-auto text-center p-10">
            <table className="w-full text-center border-separate border-spacing-0 shadow-bottom-only bg-primary rounded-3xl overflow-hidden">
              <thead>
                <tr className="text-white">
                  <th colSpan={2} className="p-4 py-8 border-b-2 border-r-2 text-xl border-white">Placement Guarantee</th>
                  <th className="p-4 border-b-2 border-white text-xl ">
                    <p className='font-bold '>FULLY ONLINE</p>
                    <span className='font-semibold'>&nbsp;9 months</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 py-8 border-r-2 border-b border-gray-200">
                    DREAM JOBS<br />6 - 10 LPA
                  </td>
                  <td className="p-4 border-r-2 border-b border-gray-200">
                    SUPER DREAM JOBS<br />10 - 25+ LPA
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    TRIAL SESSION<br />Free
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="p-4 py-8 text-left bg-white text-gray-800 rounded-b-3xl">
                    For more info, check Tech Vedhu's Job Guarantee Details.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-6  px-5 md:grid-cols-2 gap-8">
        <h3 className="text-orange-500 font-bold my-4 text-3xl">TRACK OVERVIEW</h3>
        <h2 className="text-2xl font-bold mt-1">
          Experience the new way of learning
        </h2>
        <p className="text-gray-600 mt-4">
          Learn in live classes, solve real-life case studies, get mentored by the
          top 1% experts. Be the talent every <br></br>recruiter in the industry is looking
          for!
        </p>

        <div className="bg-white  shadow-bottom-inner-blue shadow-2xl rounded-lg mt-8 p-4">
          <div className="flex items-center font-semibold mt-8 ml-14 mb-2 text-primary text-2xl">
            <img src={brain} className="w-10 mr-2" alt="Bullet Icon" />
            <h4>Skills Covered</h4>
          </div>


          <div className="grid grid-cols-2 py-8 px-10  md:grid-cols-4 gap-2 text-black">
            {[
              "Linux shell scripting",
              "DSA",
              "Spring Boot",
              "React",
              "CSS",
              "Java",
              "Operating System",
              "Rest API",
              "Redux",
              "Mongo DB",
              "Git",
              "Networks",
              "Design Patterns",
              "JavaScript",
              "Node.JS",
              "OOPs",
              "SQL",
              "System Design",
              "HTML",
              "Express.JS",
            ].map((skill, index) => (
              <div className="flex items-center mb-4">
                <FiChevronRight className="text-green-600 mr-2" />
                <p key={index} className="text-base font-medium">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>



  );
}

export default Home;
