import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="bg-[#252525]">
      <div className="container  flex gap-[50px] items-center justify-center">
        <div className="w-[650px] ">
          <ul className="flex justify-around items-center text-white font-roboto font-bold text-[24px] leading-[40px] py-[38px] px-[32px] ">
            <li>
              <Link
                to={"/"}
                className="hover:opacity-60 transition-all duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:opacity-60 transition-all duration-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/skills"}
                className="hover:opacity-60 transition-all duration-500"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className="hover:opacity-60 transition-all duration-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:opacity-60 transition-all duration-500"
              >
                Contact
              </Link>
              <a
                href="#"
                className="hover:opacity-60 transition-all duration-500"
              ></a>
            </li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
