import   { useState, createContext } from "react";

export const HelperContext = createContext();




export const HelpProvider = (props) => {
    const [show,setShow]=useState(false);
    const [info,setInfo]=useState();


    // animation container
    const Popupvariants = {
        visible: {
          boxShadow: "#d5a3d6 0px 0px 10px 1px",
          y: -50,
          cursor: "pointer",
        },
        hidden: { scale: 1 },
        
      };
    return(
        <HelperContext.Provider value={{show,setShow,info,setInfo,Popupvariants}}>
                  {props.children}
        </HelperContext.Provider>
    );
}   