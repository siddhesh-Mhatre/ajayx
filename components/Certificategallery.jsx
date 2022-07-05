import { motion } from "framer-motion";
 

const Certificategallery = () => {
  return (
    <div className="w-11/12 mx-auto pt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <motion.div
          whileHover={{ y: -5 }}
          className="flex justify-center   shadow-lg "
        >
          <a
            href="https://www.coursera.org/account/accomplishments/verify/FPXKTZTF5Y8Z"
            target={"_blank"} rel="noreferrer"
          >
            <img
               className="w-full"
              src="/images/c1.png"
              alt=""
              srcSet=""
            />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="flex justify-center shadow-lg"
        >
          <a
            href="https://drive.google.com/file/d/1R1FHVhf4dB645ljfekyJ4LQUYwc6Aebf/view"
            target={"_blank"} rel="noreferrer"
          >
            <img
              className="w-full"
              src="/images/c2.png"
              alt=""
              srcSet=""
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificategallery;
