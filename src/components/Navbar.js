import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/experience",
    display: "Exprience",
  },
  {
    path: "/projects",
    display: "Projects",
  },
];
const Navbar = () => {
  const menuRef = useRef();

  const handlemenu = () => menuRef.current.classList.toggle("shown__menu");
  return (
    <header>
      <div className="container lg:ml-[10rem]">
        <div className="flex items-center justify-around h-[17vh]">
          <Link to="/">
            <h1 className=" text-[25px] md:text-[30px] font-[800] leading-7">
              Saksham Raghuvanshi
            </h1>
          </Link>
          <div className="navigation " onClick={handlemenu} ref={menuRef}>
            <ul className="menu flex item-center gap-[2.7rem] font-[700] ">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-16px leading-7 font-600"
                        : "text-textColor text-16px leading-7 font-500"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <span className="md:hidden " onClick={handlemenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
