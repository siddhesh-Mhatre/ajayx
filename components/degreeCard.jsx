import {motion} from "framer-motion" 
 
const DegreeCard = () => {
  return (
    <>
      <motion.div    className="flex flex-wrap justify-evenly items-center   w-11/12 h-full mx-auto pt-10">
        <div className="lg:w-1/6    ">
          <img className="w-full" src="/images/vartak.png"   alt="" srcSet="" />
        </div>
        <div className="lg:w-2/3 rounded-md border-gray-800 border">
          <div className=" flex  justify-evenly items-center pt-9 pb-5 border-b-violet-900 border ">
            <p className="text-4xl text-violet-600 pb-4 font-semibold">
            Pursuing B.E in Computer Engineering
            </p>

            <h3 className="font-bold ">2021 Present</h3>
          </div>
          <div className="p-7">
            <h1>
              ⚡ I&apos;m currently pursuing my bachelors in  Computer science.
            </h1>
            <div className="text-end">
            <a
              href="http://sid.com"
              target="_blank"
              className="py-2 px-7 bg-black text-white"
              rel="noreferrer"
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
