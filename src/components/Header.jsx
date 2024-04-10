import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <center>
      <header className="bg-[#eee] font-mono text-sm p-3 lg:text-base 2xl:text-lg font-semibold ">
        <nav className="fixed w-full pr-5">
          <ul className="flex items-center max-w-sm  lg:max-w-lg rounded-full  h-14 justify-around">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="hidden space-x-2 absolute right-6 top-6 rounded-2xl lg:flex">
          <FaLinkedin size={24} />
          <FaGithub size={24} />
        </div>
      </header>
    </center>
  );
};

export default Header;
