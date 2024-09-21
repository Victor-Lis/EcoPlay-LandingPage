import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

type PlacarProps = {
    img: StaticImport
    number: number
    description: string
    imgSize?: string
}

export default function Placar({img, number, description, imgSize}: PlacarProps) {
 return (
    <Link href={"/historico"} className="px-6 py-8 flex justify-center md:flex-row md:justify-around items-center bg-blue-600 rounded-md hover:scale-105 border-4 border-blue-600 hover:border-blue-700/70 duration-150">
      <Image
        src={img}
        alt="Logo Marca do projeto Eco-Play"
        className={"mb-2 max-md:max-w-20 max-w-40 mr-10"}
        priority
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl text-white">{number}</h1>
        <h5 className="text-white text-center">{description}</h5>
      </div>
    </Link>
 );
}