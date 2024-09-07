"use client";
import Image from "next/image";
import HeroImg from "@/assets/marca_ecoplay.png";

export default function Hero() {
  return (
    <>
    <div id="hero" className="mb-2"></div>
    <div
      className="w-9/12 md:w-10/12 h-50 flex justify-center items-center max-sm:my-10"
      id="hero-box"
    >
      <Image
        src={HeroImg}
        alt="Logo Marca do projeto Eco-Play"
        className="min-w-72 md:min-w-0 w-6/12 h-full min-h-20"
        priority
      />
    </div>
    </>
  );
}
