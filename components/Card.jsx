import { useContext } from "react";
import { HelperContext } from "../helper/Helper";
 
const Card = ({project}) => {
  const {show,setShow,setInfo} = useContext(HelperContext);
 
  return (
    <>
      <div className=" w-11/12 rounded overflow-hidden shadow-lg cursor-pointer"  onClick={()=>{
        setShow(!show);
        setInfo(project);
      }}>
        <img
          className="w-full"
          src={project.photo.url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
   
          <div className="text-gray-700 text-base " dangerouslySetInnerHTML={{ __html:project.description.html.slice(0,100)+"...."}}/>
 
        </div>
        <div className="px-6 pt-4 pb-2">
   
        {
          project.technology.tech.map((cval)=><>
          <span key={cval} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{cval}
          </span>
          </>)
        }
        

        </div>
      </div>
 


    </>
  );
};

export default Card;
