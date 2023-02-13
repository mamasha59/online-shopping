import React from "react";
import { FC } from "react";

import { CgDetailsMore } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";

import { useInView } from "react-intersection-observer";
import Cart from "../Menu/Cart";

const Search: FC = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    delay:100,
    rootMargin:"10px"
  });

  return (
    <div ref={ref}>
      <div
        className={`flex px-2 py-4 max-h-[100px] transition-opacity ${
          !inView && "max-w-[1800px] flex mx-auto my-0 fixed top-0 right-0 left-0 z-50 m-0 backdrop-blur-lg"
        }`}
      >
        <div className="grow max-w-[280px] shrink-0 z-10 hover:shadow-md transition-all hover:scale-110 lg:text-[12px]">
          <button className="flex items-center text-[#fff] bg-green pl-8 pr-4 py-4 uppercase rounded-l-md w-full h-full">
            Каталог продукции <CgDetailsMore className="ml-6 text-2xl" />
          </button>
        </div>
        <div className={`border-[9px] border-[#8080805f] rounded-r-md pl-3 pr-9 py-2 ml-[-2px] relative  w-full grow-0 shrink ${!inView && 'bg-[#fff] border-[pink]'}`}>
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
      <div className={` ${!inView ? 'block transition-all fixed right-5 shadow-md rounded-md animate-bounce bg-[pink] text-xl z-50' : 'hidden'}`}>
          <Cart/>  
      </div>
    </div>
  );
};

export default Search;
