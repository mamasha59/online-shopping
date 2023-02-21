import { FC, useState, useEffect, useRef } from "react";

import { CgDetailsMore } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";

import { useInView } from "react-intersection-observer";
import Cart from "../Menu/Cart";
import { itemCatalog } from "@/components/MenuCatalog/menu-catalog-items/menu-catalog-items";
import Link from "next/link";

const Search: FC = () => {
  const [open, setOpen] = useState<boolean | null>(false);
  const popupBlock = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    threshold: 1,
    delay: 100,
  });

  useEffect(() => {
    // закрытие попапа по клике снаружи
    const closePopup = (e: Event) => {
      if (!popupBlock.current?.contains(e.target as Element)) setOpen(false);
    };
    window.addEventListener("click", closePopup);
    return () => window.removeEventListener("click", closePopup);
  }, []);

  return (
    <div ref={ref} className='h-[90px] my-3'>
      <div className={`flex px-2 py-4 max-h-[100px] transition-opacity ${!inView && 'fixed top-0 left-0 right-0 z-20 shadow-sm bg-cyan-100'}`}>
        <div
          ref={popupBlock}
          className="relative grow max-w-[280px] shrink-0 z-10 hover:shadow-md transition-all lg:text-[12px]"
        >
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center text-[#fff] bg-green pl-8 pr-4 py-4 uppercase rounded-l-md w-full h-full transition-all duration-700  ${
              open && "rounded-b-none"
            }`}
          >
            Каталог продукции <CgDetailsMore className="ml-6 text-2xl" />
          </button>
          {/* попап с категориями */}
          <div
            className={`absolute flex z-50 flex-col gap-4 left-0 bg-green w-full shadow-xl text-[#fff] overflow-y-scroll max-h-[90vh] transition-all duration-500 scroll-bar-styles ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {itemCatalog.map((item) => (
              <Link href={item.link} key={item.name} className="border-b p-2">
                {item.name}
              </Link>
            ))}
          </div>
          {/* */}
        </div>
        <div
          className={`border-[9px] border-[#8080805f] rounded-r-md pl-3 pr-9 py-2 ml-[-2px] relative  w-full grow-0 shrink ${
            !inView && "bg-[#fff] border-[pink]"
          }`}
        >
          <form>
            <input
              className="text-[#000] italic w-full outline-none"
              type="search"
              placeholder="Для поиска доступно:2222 товаров / Введите запрос."
            />
            <button className="absolute right-2 top-[20%] hover:scale-110 transition-all">
              <BiSearchAlt className="text-2xl hover:text-green" />
            </button>
          </form>
        </div>
      </div>
      <div
        className={` ${
          !inView
            ? "block transition-all fixed right-5 shadow-md rounded-md animate-bounce bg-[pink] text-xl z-50"
            : "hidden"
        }`}
      >
        <Cart />
      </div>
    </div>
  );
};

export default Search;
