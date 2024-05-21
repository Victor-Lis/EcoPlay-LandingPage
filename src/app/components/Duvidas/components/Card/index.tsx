type CardProps = {
  title: string;
  content: React.ReactNode;
  extraComponent?: React.ReactNode
}

export default function Card({title, content, extraComponent}: CardProps) {
 return (
   <div className="w-full flex flex-col justify-start items-start my-2">
    <h1 className="bg-blue-600 text-white px-5 py-2 rounded rounded-bl-none">{title}</h1>
    {content}
    {extraComponent}
   </div>
 );
}