import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import BoySvg from "../../components/SvgComponents/BoySvg";
const index = () => {
  return (
    <section className=" py-28 px-10 lg:px-20 bg-violet-100">
      <div className= "container  flex flex-wrap   mx-auto">
        <div className="w-full lg:w-1/2 px-2 self-center">
          <div className="flex-col">
            <p className="text-4xl pb-4 font-semibold">Hello! I am</p>
            <h5 className="text-6xl pb-3 mb-7 mt-5"> 
            <Typewriter
                options={{
                  strings: [
                    "Ajay Shitkar",
                    "Web Devloper",
                    "Enthusiast ",
                    "Explorer"
           
                  ],
                  autoStart: true,
                  loop: true,
                  
                }}
              />
              </h5>
            <p className="text-gray-500 text-xl pb-3">
              I&apos;m <span className="text-violet-800">Ajay</span> . Full Stack
              Developer, Open Source Enthusiast 🔥. Always learning.
            </p>
            <div className="flex  w-10/12  md:w-1/4 lg:w-1/3 justify-between mt-4">
              <a href="https://github.com/Ajay4486"   target="_blank" rel="noreferrer"><FontAwesomeIcon  icon={faGithub} style={{ fontSize: 35}} /></a>  
              <a href="https://www.hackerrank.com/ajshitkar282"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHackerrank} style={{ fontSize: 35,color:"#e02e6e" }} /></a>  
              <a href="https://www.linkedin.com/in/ajay-shitkar-699784225/"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 35 , color:"#0a66c2"}} /></a>
              <a href=""  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: 35,color:"#e02e6e" }} /></a>
     
            </div>
            <div className="mt-7">
          
            <Link href="/Contact" ><span className="py-2 px-7   bg-black text-white cursor-pointer hover:bg-white hover:text-black transition outline">Contact Me</span></Link> 
            </div>
          
          </div>
        </div>

        <div className= "lg:w-1/2 px-2 ">
     <BoySvg/>
        </div>
      </div>
    </section>
  );
};

export default index;

 