import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { IoCallSharp } from "react-icons/io5";
import CartButton from "../../Buttons/CartButton";

const MenuInfo:FC = () => {
  return (
    <div className="p-2 flex items-center justify-around lg:flex-col">
      <Link className="relative flex flex-col items-end hover:shadow-2xl transition-all duration-500 group rounded-md" href={"/"}>
        <Image
          src={"https://sterilno.com/template/sterilno/images/logo.svg"}
          alt="Логотип Sterilno.com"
          width={328}
          height={60}
          priority
        />
        <p className="invisible opacity-0 transition-opacity duration-700 z-30 absolute w-[57%] top-0 left-2/4 translate-x-[-40%] translate-y-[-100%] shadow-md bg-[#80808040] rounded-md px-1 text-xs group-hover:visible group-hover:opacity-100">Перейти на главную страницу</p>
        <h3 className="text-[13px] pr-4 text-pink">
          Уникальные медицинские технологии
        </h3>
      </Link>
      <button className="flex items-center hover:scale-110 hover-header hover:shadow-lg transition-all">
        <IoCallSharp className="mr-2 bg-green text-[#fff] text-3xl rounded-full px-1 py-1" />
        Заказать звонок
      </button>
      <div className="sm:text-center">
        <h2 className="text-[#000c] font-bold text-lg cursor-default">
          <Link href="tel:88003508017">8 (800) 350-80-17</Link>
        </h2>
        <p>Ваш город</p>
      </div>
      
      <div className="flex mt-3 items-center md:w-full sm:flex-col md:justify-evenly gap-10">
        <div className="text-dark text-sm cursor-default sm:text-center">
          <p className="font-bold">Работаем без выходных</p>
          <p>
            Принимаем звонки <b>с 9:00 до 21:00</b>
          </p>
          <p>
            Заказы на сайте <b>круглосуточно</b>
          </p>
          <p>
            Доставляем ежедневно <b>с 9:00 до 22:00</b>
          </p>
        </div>
      <CartButton title="Корзина"/>
      </div>
    </div>
  );
};

export default MenuInfo;
