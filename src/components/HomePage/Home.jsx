import React from "react";
import pic from "../../../public/photo.avif";
import { FaBootstrap, FaNode, FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const handleClick = () => {
    navigate("/projects"); // Navigate to the /projects route
  };

  return (
    <div
      name="Home"
      className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 my-12 mt-6"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <span className="text-xl font-medium">
            <strong className="text-red-500">Welc</strong>
            <strong className="text-green-500">ome</strong> In My Feed
          </span>
          <div className="text-2xl lg:text-4xl">
            <h1 className="mb-2">Hello, I'm a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <p className="text-sm lg:text-base text-justify">
            Hi! My name is <span className="text-green-600">Ganesh Metku</span>.
            <br />I am currently pursuing my final year of{" "}
            <span className="text-red-600">Bachelor of Engineering</span> and
            specializing in MERN Stack Development.
            <br />
            I live in Mumbai.
            <br />
            My WhatsApp number is:{" "}
            <span className="text-blue-600">+918433877355</span>.
          </p>

          <div className="flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-green-500 mb-2">Available on</h2>
              <ul className="flex justify-center lg:justify-start space-x-5 text-2xl">
                <li>
                  <a
                    href="https://github.com/Ganumetku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500"
                  >
                     <FaGithub/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ganesh-metku-7886582a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    <FaLinkedin />
                  </a>
                </li>

                <li>
                  <a
                    href="https://t.me/ganeshmetku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500"
                  >
                    <FaTelegram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-bold text-blue-600 mb-2">
                Currently working on
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-2xl lg:text-3xl">
                <SiMongodb className="hover:scale-110 transition-transform duration-300" />
                <SiExpress className="hover:scale-110 transition-transform duration-300" />
                <FaReact className="hover:scale-110 transition-transform duration-300" />
                <FaNodeJs className="hover:scale-110 transition-transform duration-300" />
                <FaNode className="hover:scale-110 transition-transform duration-300" />
                <SiTailwindcss className="hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <img
            src={pic}
            className="rounded-full mx-auto lg:mx-0 lg:w-[450px] lg:h-[450px] mt-14"
            alt="Profile"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-center mt-10">
          <Link
            to="https://drive.google.com/file/d/1yrkY4ZGQX9FXUgO7d3LobnQkvMdRBaR0/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-700 hover:bg-red-500 text-white font-medium rounded-full px-5 py-2.5 transition duration-300"
          >
            Resume
          </Link>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-block bg-green-700 hover:bg-green-500 text-white font-medium rounded-full px-5 py-2.5 transition duration-300"
          >
            Projects
          </Link>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
    </div>
  );
}

export default Home;
