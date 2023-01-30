import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";

type Props = {};

function Nav({}: Props) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuState = () => {
    setMenuOpen((preVal) => !preVal);
    console.log(menuOpen);
  };
  return (
    <nav className=" px-1 bg-gradient-to-r from-gray-700 to-gray-300 flex justify-between fixed w-full items-center">
      <div className="flex gap-1 items-center justify-center md:p-3 p-1">
        <div>Logo</div>
        <div>OTR Journal</div>
      </div>
      <div className="md:hidden ">
        <div
          className=" outline outline-zinc-600 mr-2"
          onClick={mobileMenuState}
        >
          {menuOpen && <AiOutlineClose size={20} />}
          {!menuOpen && <AiOutlineMenu size={20} />}
        </div>
      </div>
      <ul className="hidden md:flex">
        <a href="#home">
          <li className="menu-item">Home</li>
        </a>
        <a href="#what">
          <li className="menu-item">What Is Trucker's Pad?</li>
        </a>
        <a href="#why">
          <li className="menu-item">Why Choose Trucker's Pad?</li>
        </a>
        <Link to={"/login"}>
          <li className="menu-item">
            <FaSignInAlt />
            Login
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
