import { FaUserAlt } from "react-icons/fa";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { item } from "./menu-data";
import { FC, useRef } from "react";
import Link from "next/link";
import useClosePopupOut from "@/hooks/closePopupOut";

const Menu: FC = () => {
  const popup = useRef<HTMLDivElement>(null);

  const [open, setOpen ] = useClosePopupOut({popup});

  return (
    <nav className="overflow-hidden text-sm flex justify-between font-black border-b p-2 border-[#e8e8e8] items-center flex-wrap lg:justify-center md:justify-between">
      <ul className="flex gap-8 lg:mb-2 md:hidden">
        {item.map((i) => (
          <li
            className="cursor-pointer hover:text-[#235D48] transition-all hover:scale-105 hover-header md:hidden"
            key={i.link}
            title={i.name}
            aria-label={i.name}
          >
            <Link href={i.link}>{i.name}</Link>
          </li>
        ))}
      </ul>
      <div ref={popup}>
        <button
          title="Открыть/закрыть меню"
          aria-label="Открыть/закрыть меню"
          onClick={() => setOpen(!open)}
          className="items-center text-xl md:flex hidden"
        >
          Сервис
          <MdOutlineUnfoldMore className="hover:scale-110 text-2xl ml-2" />
        </button>
        {/* внизу попап на маленьких экранах */}
        <ul
          className={`z-40 flex flex-col items-center p-4 absolute top-14 bg-green w-full rounded-md left-0 transition-all duration-500 shadow-md ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {item.map((i) => (
            <li
              title={i.name}
              aria-label={i.name}
              className="first:font-bold first:border first:text-[#ab3030] first:px-2 last:border py-2 list-none cursor-pointer text-[#fff] transition-all hover:text-[15px] hover-header"
              key={i.link}
            >
              {i.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <button title="Для Юр.Лиц" aria-label="Для юридических лиц" className="hover:bg-[#d7295d] hover:translate-y-[-2px] px-4 bg-pink text-[white] py-2 rounded-md transition-all">
          Для Юр.Лиц
        </button>
        <button title="Войти в кабинет" aria-label="Войти в кабинет" className="flex items-center hover:text-[green] transition-all sm:hidden">
          <FaUserAlt className="text-xs mr-1" />
          Войти в кабинет
        </button>
      </div>
    </nav>
  );
};

export default Menu;
