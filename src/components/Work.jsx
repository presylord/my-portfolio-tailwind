import { FaLaptop, FaLaptopCode } from "react-icons/fa";

const projects = [
  { name: "Attendance Tracker", img: "", github: "", demo: "" },
  { name: "Recipe Suggestions", github: "", demo: "" },
  { name: "IP Tracker", github: "", demo: "" },
  { name: "Image to Text Converter", github: "", demo: "" },
  { name: "Project Portfolio", github: "", demo: "" },
];

const Work = () => {
  return (
    <div
      name="projects"
      className=" bg-[#08192f] w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}
          {projects.map(({ name, image, github, demo }, index) => {
            return (
              <div key={index}
                style={{ backgroundImage: `url(${image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-clip"
              >
                <div className="mb-[-280px] group-hover:mb-[0px] duration-300">
                  <span className="text-1xl font-bold text-white tracking-wider">
                    {name}
                  </span>
                  <div className="pt-8 text-center flex">
                    <a href={demo}>
                      <button className="flex text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <FaLaptop size={30} />
                        Demo
                      </button>
                    </a>
                    <a href={github}>
                      <button className="flex text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <FaLaptopCode size={30} />
                        Code
                      </button>
                    </a>
                  </div>
                </div>

                {/* Hover Effects */}
                {/* <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {name}
                  </span>
                  <div className="pt-8 text-center flex">
                    <a href={demo}>
                      <button className="flex text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <FaLaptop size={30} />
                        Demo
                      </button>
                    </a>
                    <a href={github}>
                      <button className="flex text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <FaLaptopCode size={30} />
                        Code
                      </button>
                    </a>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Work;
