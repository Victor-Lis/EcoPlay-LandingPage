type Props = {
  description: string;
};

export default function Description({ description }: Props) {
  return (
    <div className="w-full md:w-10/12 px-10 py-6 flex flex-col justify-center md:flex-row md:justify-between items-center bg-blue-600 rounded-md">
        <h5 className="text-white text-center">{description}</h5>
    </div>
  );
}
