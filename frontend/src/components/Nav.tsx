import { useState } from "react";
import { useAuthStore } from "../store/userStore";
import { FaSignInAlt } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { useNavigate, Link } from "react-router-dom";

type Props = {};

function Nav({}: Props) {
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
        <Link to={"/broker"}>
          <li className="menu-item">Map</li>
        </Link>
        <Link to={"/broker"}>
          <li className="menu-item">Loads</li>
        </Link>
        <Link to={"/broker"}>
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
      {loggedIn}
    </nav>
  );
}

export default Nav;

// {isLoading ? (
//   <p>Data is loading</p>
// ) : Array.isArray(content) && content.length > 0 ? (
//   content.map((broker: any) => {
//     return (
//       <div className="w-fit border-2 border-black p-2" key={broker._id}>
//         <p>Name: {broker.firstName + " " + broker.lastName}</p>
//         <p>Phone Number: {broker.phoneNumber}</p>
//         <p>Email: {broker.email}</p>
//         <p>Rating: {broker.rating}</p>
//         <p>Notes: {broker.notes}</p>
//         <div className="flex justify-between mt-2">
//           <button
//             onClick={() =>
//               deleteBrokerMutation.mutate({
//                 dataType: "broker",
//                 dataId: broker._id,
//               })
//             }
//           >
//             <BsTrashFill />
//           </button>
//           <AiFillEdit />
//         </div>
//       </div>
//     );
//   })
// ) : (
//   <p>You havent entered any broker data</p>
// )}
