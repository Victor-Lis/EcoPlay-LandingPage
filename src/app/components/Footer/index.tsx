"use client";
import { goTo, isMoreDown, isMoreUp } from "@/utils/navigation";
import { useEffect, useState } from "react";
import { FaRegHandPointDown, FaRegHandPointUp } from "react-icons/fa6";

export default function Footer() {
  const [goToTop, setGoToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setGoToTop(isMoreDown("integrantes-box"));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleNavigate(){
    if(isMoreUp("hero")){
      goTo("hero")
    }else if(isMoreUp("banner")){
      goTo("banner")
    }else if(isMoreUp("integrantes")){
      goTo("integrantes-box")
    }else if(isMoreUp("duvidas")){
      goTo("duvidas-box")
    }else{
      goTo("hero")
    }
  }

  return (
    <div className="fixed bottom-2 w-full px-5 py-2 flex justify-end items-center gap-x-4">
      {goToTop
      ? 
        <FaRegHandPointUp size={50} color="#fff" className="bg-blue-600/50 p-3 rounded-full hover:scale-105 duration-300 cursor-pointer" onClick={handleNavigate}/>
      :
        <FaRegHandPointDown size={50} color="#fff" className="bg-blue-600/50 p-3 rounded-full hover:scale-105 duration-300 cursor-pointer" onClick={handleNavigate}/>
      }
    </div>
  );
}
