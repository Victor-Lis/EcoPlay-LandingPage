type CardProps = {
    title: string;
    names: string[]
}

export default function Card({title, names}: CardProps) {
 return (
   <div className="w-72 md:w-full flex flex-col justify-start items-start my-2">
    <h1 className="bg-blue-600 text-white px-5 py-2 rounded rounded-bl-none">{title}</h1>
    <div className="text-blue-600 bg-white flex flex-col justify-center items-center w-full gap-y-2 py-4 rounded rounded-tl-none">
        {names.map(name => <p key={name} className="w-full text-center">{name}</p>)}
    </div>
   </div>
 );
}