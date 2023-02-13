import { FaUserAlt } from "react-icons/fa";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { item } from "./menu-data";
import React from "react";
import { FC } from "react";
import Link from "next/link";

const Menu: FC = () => {
  const [open, setOpen] = React.useState(false);
  const popup = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    //закрывать попап по клику вне
    const handleClickOut = (event: any): void => {
      if (popup.current) {
        !popup.current.contains(event.target) && setOpen(false);
      }
    };
    document.body.addEventListener("mousedown", handleClickOut);
    return () => document.body.removeEventListener("click", handleClickOut);
  }, []);

  return (
    <nav className="overflow-hidden text-sm flex justify-between border-b p-2 border-[#e8e8e8] items-center flex-wrap lg:justify-center md:justify-between">
      <ul className="flex gap-8 lg:mb-2 md:hidden">
        {item.map((i) => (
          <li
            className="cursor-pointer hover:text-[green] transition-all hover:scale-105 hover-header md:hidden"
            key={i.link}
          >
            <Link href={i.link}>{i.name}</Link>
          </li>
        ))}
      </ul>
      <div ref={popup}>
        <button
          onClick={() => setOpen(!open)}
          className="items-center text-xl md:flex hidden"
        >
          Сервис
          <MdOutlineUnfoldMore className="hover:scale-110 text-2xl ml-2" />
        </button>
        {/* внизу попап на маленьких экранах */}
        <div
          className={`z-40 flex flex-col items-center p-4 absolute top-14 bg-green  w-full rounded-md left-0 -translate-x-full transition-all duration-500 shadow-md ${
            open ? "translate-x-0" : ""
          }`}
        >
          {item.map((i) => (
            <li
              className="first:font-bold first:border first:text-[#ab3030] first:px-2 last:border py-2 list-none cursor-pointer text-[#fff] transition-all hover:text-[15px] hover-header"
              key={i.link}
            >
              {i.name}
            </li>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button className="hover:bg-[#d7295d] hover:translate-y-[-2px] px-4 bg-pink text-[white] py-2 rounded-md transition-all">
          Для Юр.Лиц
        </button>
        <button className="flex items-center hover:text-[green] transition-all sm:hidden">
          <FaUserAlt className="text-xs mr-1" />
          Войти в кабинет
        </button>
      </div>
    </nav>
  );
};

export default Menu;
