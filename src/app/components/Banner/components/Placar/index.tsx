import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type PlacarProps = {
    img: StaticImport
    number: number
    description: string
    imgSize?: string
}

export default function Placar({img, number, description, imgSize}: PlacarProps) {
 return (
    <div className="w-full md:w-10/12 px-10 py-8 flex flex-col justify-center md:flex-row md:justify-around items-center bg-blue-600 rounded-md">
      <Image
        src={img}
        alt="Logo Marca do projeto Eco-Play"
        className={`mb-2 w-6/12 md:mb-0 sm:w-4/12`}
        priority
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl text-white">{number}</h1>
        <h5 className="text-white text-center">{description}</h5>
      </div>
    </div>
 );
}