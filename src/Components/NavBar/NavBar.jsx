import React, { useRef, useState } from "react";
import { HiMenuAlt3, MdClose } from "react-icons/all";
import Logo from "../../assets/Images/Logo.png";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
import "./NavBar.scss";
const NavBar = () => {
  const [show, setShow] = useState(false);
  let ShowMenu = () => {
    setShow(!show);
  };
  let mainmenu = useRef("Main-nav");
  useClickOutsideDetector(mainmenu, () => {
    setShow(false);
  });
  return (
    <>
      <nav>
        <div className="Navbar">
          <div className="Nav-logo">
            <img src={Logo} alt="" />
            <h3>Daunku</h3>
          </div>
          <div
            className={show ? "Main-nav Main-nav-show" : "Main-nav"}
            ref={mainmenu}
          >
            <ul>
              <li>
                <a href="#" onClick={ShowMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#BestSeller" onClick={ShowMenu}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#Reference" onClick={ShowMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#Footer" onClick={ShowMenu}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="Hamburger">
            {show ? (
              <MdClose onClick={ShowMenu} />
            ) : (
              <HiMenuAlt3 onClick={ShowMenu} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
