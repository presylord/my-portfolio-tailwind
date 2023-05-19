import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const navItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Work", target: "work" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300  z-10">
      <div>
        {/* <img src={Logo} style={{ width: '50px' }} /> */}
        <p className="text-2xl md:text-3xl  logo-text font-bold drop-shadow-2xl">
          &lt;PresyLord_Dev<span className="text-[#19a7ce] font-bold">/</span>
          &gt;
        </p>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex nav-menu">
        {navItems.map(({ name, target }, index) => {
          return (
            <li key={index}>
              <Link
                to={target}
                activeClass="active"
                smooth={true}
                duration={500}
                spy={true}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10 " onClick={handleClick}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          toggle
            ? "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center "
            : "hidden"
        }
      >
        {navItems.map(({ name, target }, index) => {
          return (
            <li key={index} className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to={target}
                smooth={true}
                duration={500}
              >
                {name}
              </Link>
            </li>
          );
        })}
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
