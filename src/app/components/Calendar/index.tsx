import { YearType } from "@/@types/YearType";
import MonthsContainer from "./MonthsContainer";

export default function Calendar({year}:{year: YearType}) {
 return (
   <div className="mt-10 w-10/12 flex flex-col justify-center items-start">
    <h1 className="py-2 px-4 text-3xl text-white bg-green-500">{year.ano}</h1>
    <MonthsContainer meses={year.meses} year={year}/>
   </div>
 );
}