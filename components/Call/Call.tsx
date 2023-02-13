import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {BsTelephoneInbound}  from 'react-icons/bs';

export const Call:FC = () => {
  return (
    <section className="bg-gradien-pattern max-h-[250px]">
      <div className="body-center p-3 flex justify-evenly">
        <div className="md:hidden">
          <Image
            src="https://sterilno.com/template/sterilno/images/logo.svg"
            width={300}
            height={300}
            alt="колл центр"
          />
        </div>
        <div className=" text-[#fff] items-start flex flex-col shadow-2xl rounded-md px-7 py-4">
          <h2 className="text-4xl mb-4 md:text-xl italic"><span className="decoration-wavy border-b">Стерильно.com </span> поможет c выбором</h2>
          <div className="flex items-center text-2xl hover:scale-125 transition-all duration-300 hover:text-[#222f3e] hover:font-bold">
            <BsTelephoneInbound className="animate-bounce mr-2 rounded-md"/>
            <Link href="tel:88003508017">8 (800) 350-80-17</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
