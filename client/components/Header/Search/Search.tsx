import { FC, useEffect, useState } from "react";

import CartButton from "../../Buttons/CartButton";
import SearchForm from "./SearchFormBlock/SearchForm";
import ButtonCategory from "./ButtonCategory/ButtonCategory";
import CallOrderButton from "@/components/Buttons/CallOrderButton";

const Search: FC = () => {

  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
   const handleScroll = () => {
      setScrollData(prev => {
        return {
          y: window.scrollY,
          lastY: prev.y
        }
      })
   }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if(scrollData.lastY === scrollData.y) return

    scrollData.y > 263 && scrollData.lastY > scrollData.y ? setShow(true) : setShow(false)
    // если скрол больше 270 и пред. значение скрола больше нынешнего тогда показывать
    
  },[scrollData])

  return (
    <div className="h-[90px] my-3">
      <div className={show ? "flex px-2 py-4 transition-transform duration-500 fixed top-0 left-0 right-0 z-20 w-full shadow-sm max-w-[1800px] mx-auto bg-[#80808053] backdrop-blur rounded-sm" : "flex px-2 py-4 transition-transform duration-500"}>
        <ButtonCategory/>
        <SearchForm/>
      </div>
      <div className={`${scrollData.y > 270 ? "top-1/2 fixed right-5 animate-bounce z-50 flex flex-col items-center gap-1" : "hidden" }`}>
        <CartButton/>
        <CallOrderButton/>
      </div>
    </div>
  );
};

export default Search;
