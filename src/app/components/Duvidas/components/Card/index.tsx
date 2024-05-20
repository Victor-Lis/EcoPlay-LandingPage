type CardProps = {
  title: string;
  content: React.ReactNode;
  extraComponent?: React.ReactNode
}

export default function Card({title, content, extraComponent}: CardProps) {
 return (
   <div className="w-full flex flex-col justify-start items-start my-2">
    <h1 className="bg-blue-600 text-white px-5 py-2 rounded rounded-bl-none">{title}</h1>
    <div className="text-blue-600 bg-white flex flex-col justify-center items-center w-full gap-y-5 p-4 rounded rounded-tl-none">
      {content}
    </div>
    {extraComponent}
   </div>
 );
}