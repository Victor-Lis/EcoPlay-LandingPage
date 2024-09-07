import Image from "next/image";

type Props = {
  show: boolean;
  ImageProps: {
    alt: string;
    className?: string;
    src: any;
  };
  onClick: () => void;
};

export default function Icon({show, ImageProps, onClick}: Props) {
  if (show) {
    return (
      <Image
        src={ImageProps.src}
        alt={ImageProps.alt}
        className={ImageProps?.className ? ImageProps?.className : "w-14 h-14 bg-blue-600/50 p-1 rounded-xl hover:scale-105 duration-300 cursor-pointer"}
        onClick={onClick}
        priority
      />
    );
  }
}
