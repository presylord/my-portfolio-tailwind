import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
      <div>
        {/* <img src={Logo} style={{ width: '50px' }} /> */}
        <p className="text-3xl logo-text font-bold">&lt;PresyLord_Dev/&gt;</p>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex nav-menu">
        <li>
          <Link to="home" activeClass="active" smooth={true} duration={400} spy={true} >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" activeClass="active" smooth={true} duration={400} spy={true} >
            About
          </Link>
        </li>
        <li>
          <Link to="skills" activeClass="active" smooth={true} duration={400} spy={true} >
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" activeClass="active" smooth={true} duration={400} spy={true} >
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" activeClass="active" smooth={true} duration={400} spy={true}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          toggle
            ? "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl" ><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className="py-6 text-4xl" ><Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
        </Link></li>
        <li className="py-6 text-4xl" ><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
        <li className="py-6 text-4xl" ><Link onClick={handleClick} to="projects" smooth={true} duration={500} >
          Projects
        </Link></li>
        <li className="py-6 text-4xl" ><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/presylord/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/presylord"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full"
              href="mailto:presylord@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
