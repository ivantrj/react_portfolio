import Image from "next/image";
import React, { FC } from "react";

interface ButtonProps {
  link: string;
  icon: string;
  name: string;
  marginLeft?: string;
}

const ContactButtons: FC<ButtonProps> = ({ link, name, icon, marginLeft }) => {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className={`items-center hidden px-5 py-2 mt-10 ${marginLeft} duration-100 border-2 rounded-lg fill-current md:flex border-neongreen text-neongreen hover:scale-110`}
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} />
        <span className="ml-2">{name}</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className={`flex items-center mt-10 duration-100 rounded-lg fill-current ${marginLeft} md:hidden text-neongreen`}
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} />
      </a>
    </div>
  );
};

export default ContactButtons;
