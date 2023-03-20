import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Link
      className="relative flex flex-col items-end hover:shadow-2xl transition-all duration-500 group rounded-md"
      href={"/"}
    >
      <Image
        src={"https://sterilno.com/template/sterilno/images/logo.svg"}
        alt="Логотип Sterilno.com"
        width={328}
        height={60}
        priority
        title={"Логотип компании"}
      />
      <p className="text-green invisible opacity-0 transition-opacity duration-700 z-30 absolute w-[66%] top-0 left-2/4 translate-x-[-40%] translate-y-[-100%] shadow-md bg-[#80808040] rounded-md px-1 text-xs group-hover:visible group-hover:opacity-100">
        Перейти на главную страницу
      </p>
      <h3 className="text-[13px] pr-4 text-[#9D2080]">
        Уникальные медицинские технологии
      </h3>
    </Link>
  );
};

export default Logo;
