import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {

  const [show,setShow]=useState(false);

  useEffect(()=>{

    const handle=()=>{

      setShow(window.scrollY>400);

    };

    window.addEventListener("scroll",handle);

    return ()=>window.removeEventListener("scroll",handle);

  },[]);

  if(!show) return null;

  return(

    <button

      onClick={()=>window.scrollTo({
        top:0,
        behavior:"smooth"
      })}

      className="
      fixed
      bottom-28
      right-6
      w-14
      h-14
      rounded-full
      bg-red-600
      hover:bg-red-700
      shadow-2xl
      z-50
      flex
      items-center
      justify-center
      "

    >

      <FaArrowUp/>

    </button>

  );

}