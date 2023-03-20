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
        <h2 className="text-[#000c] font-bold text-lg cursor-default my-3">
          <Link href="tel:88003508017" title="Вызвать по номеру" aria-label="Вызвать по номеру 88003508017">8 (800) 350-80-17</Link>
        </h2>
        <p title="Ваш город" aria-label="Ваш город">Ваш город</p>
      </div>
      
      <div className="flex mt-3 items-center md:w-full sm:flex-col md:justify-evenly gap-10">
        <div className="text-dark text-sm cursor-default sm:text-center">
          <p className="text-lg font-semibold text-[#000]" aria-label="Работаем без выходных">Работаем без выходных</p>
          <p aria-label="Принимаем звонки c 9:00 до 21:00">
            Принимаем звонки <b className="text-lg font-semibold text-[#000]">с 9:00 до 21:00</b>
          </p>
          <p aria-label="Заказы на сайте круглосуточно" className="text-lg font-semibold text-[#000]">
            Заказы на сайте <b>круглосуточно</b>
          </p>
          <p aria-label="Доставляем ежедневно с 9:00 до 22:00">
            Доставляем ежедневно <b className="text-lg font-semibold text-[#000]">с 9:00 до 22:00</b>
          </p>
        </div>
        <CartButton title="Корзина"/>
      </div>
    </div>
  );
};

export default MenuInfo;
