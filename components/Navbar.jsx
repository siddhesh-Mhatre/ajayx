import { useState } from "react";
import Link from "next/link";
 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  return (
    <>
      <nav className="container mx-auto p-5 md:p-6 lg:p-8 flex ">
        <div className="logo grow">
 
           <Link  href="/"> 
           <span  className="text-4xl text-gray-600 cursor-pointer">
           ❴ALS❵
   </span>
           </Link> 
  
        </div>

        <div className="right_content align-middle z-10">
          <button
            className=" text-white font-bold  rounded'"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <svg viewBox="0 0 100 80" width="30" height="30">
              <rect width="100" height="20" rx="10"></rect>
              <rect y="30" width="100" height="20" rx="10"></rect>
              <rect y="60" width="100" height="20" rx="10"></rect>
            </svg>
          </button>

          <div
            className={`fixed p-12 pt-4 bg-violet-700 top-0 transition-transform h-screen  w-96 ${
              toggleMenu ? "-translate-x-60" : "translate-x-96"
            }`}
          >
            <div className=" border-b-2 p-2">
              <button
                className=" text-4xl hover:rotate-90 transition text-white font-bold py-2 px-4 rounded"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                ✖
              </button>
            </div>

            <ul className="flex flex-col gap-y-5 pt-4 text-white">
              <Link href="/">
                <li className="text-4xl hover:-translate-y-1 transition cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)} >
                  Home
                </li>
              </Link>
              <Link href="/Projects">
                <li className="text-4xl hover:-translate-y-1 transition cursor-pointer"        onClick={() => setToggleMenu(!toggleMenu)}>
                Projects
                </li>
              </Link>
              <Link href="/Education">
                <li className="text-4xl hover:-translate-y-1 transition cursor-pointer"        onClick={() => setToggleMenu(!toggleMenu)}>
                Education
                </li>
              </Link>
              <Link href="/Contact">
                <li className="text-4xl hover:-translate-y-1 transition cursor-pointer"        onClick={() => setToggleMenu(!toggleMenu)}>
                Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
 