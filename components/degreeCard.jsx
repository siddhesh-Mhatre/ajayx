import {motion} from "framer-motion" 
 
const DegreeCard = () => {
  return (
    <>
      <motion.div   className="flex flex-wrap justify-evenly items-center w-11/12 h-full mx-auto pt-10  gap-4 md:gap-3 lg:gap-1">
        <div className="lg:w-1/6">
          <img className="w-full" src="/images/vartak.png"   alt="" srcSet="" />
        </div>
        <div className="lg:w-2/3 rounded-md border-gray-800 border">
          <div className=" flex flex-wrap justify-evenly items-center pt-9 pb-5 border-b-violet-900 border text-center md:text-start lg:text-start ">
            <p className=" w-full md:w-1/2 lg:w-3/4 text-4xl text-violet-600 pb-4 font-semibold">
            Pursuing B.E in Computer Engineering
            </p>

            <h3 className=" w-full md:w-1/2 lg:w-1/5 font-bold ">2022 Present</h3>
          </div>
          <div className="p-7">
            <h1>
              ⚡ I&apos;m currently pursuing my bachelors in  Computer science.
            </h1>
            <div className="text-end pt-3">
            <a
              href="https://avc.ac.in/"
              target="_blank" rel="noreferrer"
              className="py-2 px-7 bg-black text-white hover:text-black hover:bg-white transition border"
  
            >
              Visit Website
            </a>
          </div>
          </div>

        
        </div>
      </motion.div>
    </>
  );
};

export default DegreeCard;
