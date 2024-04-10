import { FaLaptop, FaLaptopCode } from "react-icons/fa";
import Portfolio from "../assets/project-portfolio.png";
import Calculator from "../assets/project-calculator.png";
import Tracker from "../assets/project-ip-tracker.png";
import Ocr from "../assets/project-ocr.png";
import csv from "../assets/chatcsv.png";
import indexerv1 from "../assets/g-indexer.png";

const projects = [

  {
    name: "Google Indexer v1",
    img: indexerv1,
    skills: ["HTML","FLASK", "GOOGLE API"],
    description:
      "A barebones app allows a user to submit URLs under his/her domain property and check if they are indexed by Google. If not, the user has the option to submit the URLs to Google and prioritize indexing.",
    github: "",
    demo: false,
  },
  {
    name: "ChatCSV",
    img: csv,
    skills: ["HTML", "BOOTSTRAP CSS", "PREACT JS","FLASK", "OPEN AI"],
    description:
      "An intelligent app powered by OpenAI that analyzes your custom CSV files, providing valuable insights and dynamic conversations based on their data.",
    github: "",
    demo: "https://chat.presylord.com",
  },
  {
    name: "OCR - Extract Text from Image",
    skills: ["HTML", "BOOTSTRAP CSS", "REACT JS", "GOOGLE VISION"],
    
    description:
    "This web app uses Google Vision's OCR technology to effortlessly convert text from images into editable and searchable content, streamlining productivity and data extraction.",
    img: Ocr,
    github: "",
    demo: "https://ocr.presylord.com/",
  },
  {
    name: "IP Tracker",
    img: Tracker,
    skills: ["HTML", "CSS", "REACT JS", "API"],
    description:
    "With this app, simply enter the IP address you want to locate, and it will provide you with precise geographical information.",
    github: "",
    demo: "https://track.presylord.com/",
  },
  {
    name: "Simple Calculator",
    img: Calculator,
    skills: ["HTML", "CSS", "REACT JS"],
    description: "Perform basic calculations using this basic calculator.",
    github: "",
    demo: "https://calculator.presylord.com/",
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
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Card */}
          {projects.map(
            ({ name, img, github, demo, description, skills }, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${img})`,
                    // backgroundSize: "contain",
                  }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-clip  "
                >
                  <div className="group mb-[-400px] group-hover:mb-[0px] duration-500 w-full p-4 desc-div group-hover:text-sm ">
                    <span className="text-1xl font-bold text-white tracking-wider " style={{textShadow: "3px 3px 10px black"}}>
                      {name}
                    </span>
                    <div className="hidden group-hover:block">
                      <p className="py-3" style={{textShadow: "3px 5px 10px black"}}>{description}</p>
                      <div className="group-hover:flex flex-row flex-wrap">
                        {skills?.map((skill, index) => {
                          return (
                            <span
                              key={index}
                              className="py-1 px-1 mx-1 my-1 font-bold  text-xs text-white bg-[#08192f] rounded-md skill"
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>

                      <div className="hidden group-hover:flex  pt-2 text-center justify-center">
                        { demo && <a href={demo} target="_blank">
                          <button className="flex text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                            <FaLaptop size={20} className="mr-1" />
                            Demo
                          </button>
                        </a>}
                        {/* <a href={github} target="_blank">
                          <button className="flex text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                            <FaLaptopCode size={20} className="mr-1" />
                            Code
                          </button>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default Projects;
