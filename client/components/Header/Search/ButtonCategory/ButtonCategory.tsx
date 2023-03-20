import useClosePopupOut from "@/hooks/closePopupOut";
import { FC, useRef } from "react";

import CategoryPopup from "./CategoryPopup";

const ButtonCategory: FC = () => {
  // компонент кнопки "Каталог продукции и попапа с Категориями"
  const popup = useRef<HTMLDivElement>(null);
  
  const [open, setOpen ] = useClosePopupOut({popup}); // закрытие/открытие

  return (
    <div ref={popup}
      className="relative grow max-w-[280px] sl:max-w-[200px] shrink-0 z-10 hover:shadow-md transition-all lg:text-[12px]">
      <button
        aria-label="Закрыть\Открыть"
        title="Закрыть\Открыть каталог"
        onClick={() => setOpen(!open)}
        className={`text-sm flex items-center text-[#fff] bg-green pl-8 pr-4 py-4 uppercase rounded-l-md w-full h-full transition-all duration-700 sl:p-2 sl:text-xs ${open ? "rounded-b-none": ''}`}>
        Каталог <span className="sl:hidden block ml-1">продукции</span>
        {/* стилизация полосок кнопки */}
        <span className="relative flex justify-center items-center w-5 h-5 ml-2 cursor-pointer transition-all pb-[2px]">
          <span className={`w-4 h-[1px] bg-[#fff] rounded-md transition-all ${open ? "w-0" : ""} before:absolute before:left-[2px] before:w-4 before:h-[1px] before:bg-[#fff] before:-translate-y-1 before:transition-all ${open ? "before:rotate-45 before:-translate-y-0" : ""} after:absolute after:left-[2px] after:w-4 after:h-[1px] after:bg-[#fff] after:translate-y-1 after:transition-all ${open ? "after:-rotate-45 after:translate-y-0" : ""}`}
          ></span>
        </span>
         {/* ------------------ */}
      </button>

      {/* попап с категориями */}
        <CategoryPopup open={open} setOpen={setOpen}/>
      {/* ------------------- */}
    </div>
  );
};

export default ButtonCategory;
