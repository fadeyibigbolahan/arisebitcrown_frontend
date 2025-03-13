import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import {
  buildSoftwareNav,
  collectLeadNav,
  navigation,
  sendEmailNav,
} from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { HamburgerMenu } from "./design/Header";
import { MdEmail } from "react-icons/md";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";
import SubNav from "./SubNav";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [openSubNav, setOpenSubNav] = useState(false);

  useEffect(() => {
    console.log("pathname", pathname);
  }, [pathname]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (item) => {
    setActiveNav(item);
    setOpenSubNav(!openSubNav);
    // if (!openNavigation) return;
    // enablePageScroll();
    // setOpenNavigation(false);
  };

  useEffect(() => {
    if (openSubNav === false) {
      setActiveNav("");
    }
  }, [openSubNav]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm`}
    >
      <div className="flex flex-col gap-5 items-center justify-center p-7 w-full">
        <a className="block" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={``}
          // className={`flex fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex items-center justify-center m-auto flex-row">
            {/* item.title === activeNav */}
            {navigation.map((item) => (
              <Link
                to={item.url}
                onClick={() => handleClick(item.title)}
                className={`flex relative cursor-pointer font-code leading-2 hover:text-n-1 px-5 ${
                  item.url === pathname.pathname ? "text-n-1" : "text-n-4"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
