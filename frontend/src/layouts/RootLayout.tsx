import { useState } from "react";
import { useAuthStore } from "../store/userStore";
import { FaSignInAlt } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

type Props = {
  removePadding: boolean;
};

const RootLayout = (props: Props) => {
  const { removePadding } = props;
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuState = () => {
    setMenuOpen((preVal) => !preVal);
    console.log(menuOpen);
  };

  if (user) {
    return <p>Booming</p>;
  }
  let loggedOut = (
    <>
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
    </>
  );

  let loggedIn = (
    <>
      <ul className="hidden md:flex">
        <Link to={"/map"}>
          <li className="menu-item">Map</li>
        </Link>
        <Link to={"/load"}>
          <li className="menu-item">Loads</li>
        </Link>
        <Link to={"/company"}>
          <li className="menu-item">Companies</li>
        </Link>
        <Link to={"/broker"}>
          <li className="menu-item">Brokers</li>
        </Link>

        <Link to={"/login"}>
          <li className="menu-item">
            <TbLogout />
            Logout
          </li>
        </Link>
      </ul>
    </>
  );
  return (
    <>
      {/* h-[3.5%] */}
      <nav className=" px-1  flex justify-between fixed w-full items-center mb-2 bg-zinc-900 text-white h-[3.5%]">
        <div className="flex gap-1 items-center justify-center md:p-3 p-1">
          <div>Logo</div>
          <div>OTR Journal</div>
        </div>
        <div className="md:hidden ">
          <div
            className=" outline outline-zinc-900 mr-2"
            onClick={mobileMenuState}
          >
            {menuOpen && <AiOutlineClose size={20} />}
            {!menuOpen && <AiOutlineMenu size={20} />}
          </div>
        </div>
        {loggedIn}
      </nav>
      <main
        id="home"
        className={`h-[98%] bg-cover bg-fixed md:bg-center bg-[center_left_-10rem] p-12 md:p-16 ${
          removePadding ? "px-0 md:px-0 pt-[32.5px] md:pt-[48px]" : null
        }`}
        style={{ backgroundImage: `url(../../imgs/hero.jpg)` }}
      >
        <ToastContainer
          position="top-center"
          autoClose={3000}
          limit={6}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Outlet />
      </main>
      <footer className=" px-1  flex justify-between fixed w-full items-center mb-2 bg-zinc-900 text-white h-[3.5%]">
        <div className="flex gap-1 items-center justify-center md:p-3 p-1">
          <div>Logo</div>
          <div>OTR Journal</div>
        </div>
        <div className="md:hidden ">
          <div
            className=" outline outline-zinc-900 mr-2"
            onClick={mobileMenuState}
          >
            {menuOpen && <AiOutlineClose size={20} />}
            {!menuOpen && <AiOutlineMenu size={20} />}
          </div>
        </div>
        {loggedIn}
      </footer>
    </>
  );
};

export default RootLayout;
