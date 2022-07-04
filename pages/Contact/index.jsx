import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const index = () => {
  return (
    <section className=" py-28 px-10 lg:px-20  ">
    <div class= "container  flex flex-wrap  flex-row-reverse mx-auto justify-around">
      <div class="w-full lg:w-1/2 px-2 self-center">
        <div className="flex-col">
          <p className="text-4xl pb-4 font-semibold">Contact me</p>
          <p className="text-gray-500 text-xl pb-3">
          You can contact me at the places mentioned below. I will try to get back to you as fast as I can.
          </p>
          <div className="flex  w-10/12  md:w-1/4 lg:w-1/3 justify-between mt-4">
            <FontAwesomeIcon  icon={faGithub} style={{ fontSize: 35}} />
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 35, color:"#1877f2" }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 35 , color:"#0a66c2"}} />
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 35,color:"#e02e6e" }} />
          </div>
          <div className="mt-7">
          <input type="button" className="py-2 px-7 animate-pulse bg-black text-white" value="Resume" />
          </div>
        
        </div>
      </div>

      <div class= "lg:w-1/4 px-2 ">
     <img src="images/hero.png" className="w-full rounded-full" alt="" srcset="" />
      </div>
    </div>
  </section>
  )
}

export default index