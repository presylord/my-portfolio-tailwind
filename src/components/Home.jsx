import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div name="home" className=" bg-[#08192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hi! I'm Presy Lord
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#ccd6f6]">
          I&#39;m a
          <TypeAnimation
            sequence={[
              ' Full Stack Developer', // Types 'One'
              3000, // Waits 1s
              ' Tech Enthusiast', // Deletes 'One' and types 'Two'
              3000, // Waits 2s
              ' Coder',
              3000, // Types 'Three' without deleting 'Two'

            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: "#19A7CE" }}
          />
        </h2>

        <div className="pt-4">
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#19A7CE] hover:border-[#19A7CE]">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>

            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
