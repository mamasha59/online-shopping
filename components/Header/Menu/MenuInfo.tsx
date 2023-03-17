import CallOrderButton from "@/components/Buttons/CallOrderButton";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import { FC } from "react";
import CartButton from "../../Buttons/CartButton";

const MenuInfo:FC = () => {
  return (
    <div className="p-2 flex items-center justify-around lg:flex-col">
      <Logo/>
      <CallOrderButton title="Заказать звонок"/>
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
