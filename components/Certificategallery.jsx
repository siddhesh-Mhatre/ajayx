import { motion } from "framer-motion"

  
const Certificategallery = () => {
  return (
<div class="w-11/12 mx-auto pt-14">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
    <motion.div  whileHover={{y:-5}}   class="flex justify-center   shadow-lg ">
       <a href="https://www.coursera.org/account/accomplishments/verify/FPXKTZTF5Y8Z" target={"_blank"}><img  src="images/c1.png"   alt="" srcset="" /></a> 
    </motion.div>
    <motion.div  whileHover={{y:-5}}   class="flex justify-center shadow-lg">
        <a href="https://drive.google.com/file/d/1R1FHVhf4dB645ljfekyJ4LQUYwc6Aebf/view" target={"_blank"}><img  src="images/c2.png" className="w-full" alt="" srcset="" /></a> 
    </motion.div>
   
  </div>
</div>
  )
}

export default Certificategallery