import React,{useContext} from "react";
import Card from "../../components/Card";
import { GraphQLClient, gql } from "graphql-request";
import { HelperContext } from "../../helper/Helper";
import { motion,AnimatePresence } from "framer-motion";
import LadyCharcterSvg from "../../components/SvgComponents/LadyCharcterSvg";


//---------------------------   api call
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl4v4jz9e19gb01un578z8756/master"
);
const QUERY = gql`
  {
    projects {

      title
      gitlink
      deploylink
      description{
         html
      }
      photo{
        url
      }
      technology
    }
  }
`;

export async function getStaticProps() {
  const { projects } = await graphcms.request(QUERY);
  return {
    props: {
      projects,
    },
    revalidate: 10,

  };
}


 

 
const my = ({projects}) => {
const {show,setShow,info,Popupvariants} = useContext(HelperContext);
 
  return (
    <section className="container mx-auto">
      <div class="container  flex flex-wrap justify-center  mx-auto">
        <div class="w-full lg:w-1/2 px-2 self-center">
          <h3 className="font-bold text-5xl text-center pb-16">
            Here's what I do
          </h3>
          <p className="text-gray-500 text-xl text-center pb-3">
            My projects make use of a vast variety of latest technology tools.
            My best experience is to create NodeJS Backend Projects, Python
            Scripts, and React Project. Below are some of my projects. Note that
            not all of the mentioned projects are on GitHub yet.
          </p>
        </div>

        <div class="lg:w-1/3 px-2 ">
  <LadyCharcterSvg/>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-5xl text-center pb-16">Projects</h3>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 " style={{justifyItems:"center"}}>
{
  projects.map((project)=>(<Card project={project}/>))
}

 
        </div>
<AnimatePresence>
        {
        show  &&   <motion.div   exit={{opacity:0}} variants={Popupvariants}  animate={show ? "visible" : "hidden"} className=" flex justify-center items-center w-full fixed backdrop-brightness-50 backdrop-blur-sm pt-16" style={{top:0,left:"0%",height:"100vh"}} 
        onClick={()=>setShow(!show)}
         >
        <div  class="max-w-sm rounded overflow-hidden shadow-lg bg-white max-h-screen h-fit" >
        <img
          class="w-full"
          src={info.photo.url}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{info.title}</div>
          <p class="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html:info.description.html}}/>
      
 
        </div>
        <div class="px-6 pt-4 pb-2">
      
        {
          info.technology.tech.map((cval)=><>
          <span key={cval} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{cval}
          </span>
          </>)
        }
        
     
        </div>
      </div>
      </motion.div> 
    }
</AnimatePresence>
      </div>
    </section>
  );
};

export default my;
