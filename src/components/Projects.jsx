import { FaLaptop, FaLaptopCode } from "react-icons/fa";
import Portfolio from "../assets/portfolio_img.png";

const projects = [
  {
    name: "Attendance Tracker",
    description:
      "Developing a productivity web app for task management, enabling users to create, organize, and prioritize tasks with due dates, descriptions, and project categorization. Features include reminders, notifications, and progress tracking for efficient goal achievement.",
    img: "",
    github: "",
    demo: "",
  },
  { name: "Recipe Suggestions", github: "", demo: "" },
  { name: "IP Tracker", github: "", demo: "" },
  { name: "Image to Text Converter", github: "", demo: "" },
  { name: "Simple Calculator", github: "", demo: "" },
  {
    name: "Project Portfolio",
    img: Portfolio,
    github: "https://github.com/presylord/my-portfolio-tailwind",
    demo: "/",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className=" bg-[#08192f] w-full md:h-screen text-gray-300 max-md:pt-20 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#19A7CE]">
            Projects
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}
          {projects.map(({ name, img, github, demo }, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "contain",
                }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-clip  "
              >
                <div className="group mb-[-200px] group-hover:mb-[0px] duration-500 w-full px-4 ">
                  <span className="text-1xl font-bold text-white tracking-wider">
                    {name}
                  </span>
                  <p className="hidden group-hover:flex duration-500 pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent commodo orci vitae lectus dictum, eu sodales nisl
                    scelerisque.
                  </p>
                  <div className="hidden group-hover:flex duration-500 pt-6 text-center justify-center">
                    <a href={demo} target="_blank">
                      <button className="flex text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                        <FaLaptop size={20} className="mr-1" />
                        Demo
                      </button>
                    </a>
                    <a href={github} target="_blank">
                      <button className="flex text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                        <FaLaptopCode size={20} className="mr-1" />
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
