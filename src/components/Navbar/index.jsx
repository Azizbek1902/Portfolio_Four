import React, { useEffect, useState } from "react";
import icon from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import Example from "./Dropdown";

function Navbar() {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScroll(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-center bg-[#fcfafb] fixed w-full z-10 ${
          scroll ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="w-[100%] xl:w-[1140px]">
          <div className="sticky top-0 left-0 ">
            <div className="flex items-center py-3 px-5 xl:px-0 justify-between">
              <div>
                <div className="w-[8rem]">
                  <img className="w-full" src={icon} alt="icon" />
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:gap-x-12">
                <ul className="flex gap-x-5 items-center">
                  <Link
                    to="/"
                    className="text-[#272556] active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link className="text-[#272556] active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer">
                    Services
                  </Link>
                  <Link className="text-[#272556] active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer">
                    Details
                  </Link>
                  <Link className="text-[#272556] active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer">
                    Features
                  </Link>
                  <Link
                    className={`text-[#272556] active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer`}
                  >
                    <Example />
                  </Link>
                  <button className="py-1 font-semibold text-white bg-[#0092ff] hover:text-[#0092ff] hover:bg-white px-6 rounded-2xl border-[1px] border-[#0092ff]">
                    <Link to="/login">Get quote</Link>
                  </button>
                </ul>
                <div></div>
              </div>
              <div className="lg:hidden z-10">
                <FcMenu onClick={handleClick} className="text-[2.2rem]" />
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className={`${
                  isActive
                    ? "w-[0] absolute h-[100vh]"
                    : "block fixed w-[100%] h-[100vh] bg-[#fcfafb]"
                } overflow-hidden`}
                style={{ transition: "all 0.3s linear" }}
              >
                <ul className="pl-6">
                  <Link
                    to="/"
                    className="text-[#272556] block pb-2 active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer">
                    Features
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer">
                    Details
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer">
                    Pricing
                  </Link>
                  <Link className="text-[#272556]  block pb-2 active:text-[#0092ff] hover:text-[#0092ff] focus:text-[#0092ff] font-semibold cursor-pointer">
                    <Example />
                  </Link>
                  <button className="py-1 font-semibold text-[#0092ff] hover:text-white hover:bg-[#0092ff] px-6 rounded-2xl border-[1px] border-[#0092ff]">
                    Log in
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <h1 className="text-white">Logo</h1>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   About
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Services
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Contact
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 // <XIcon className="block h-6 w-6" aria-hidden="true" />
//                 <CgCloseO className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                 <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         {(ref) => (
//           <div className="md:hidden" id="mobile-menu">
//             <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a
//                 href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Services
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </nav>
//   );
// };

// export default Navbar;
