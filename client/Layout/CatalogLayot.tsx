import MenuCatalog from "@/components/MenuCatalog/MenuCatalog";
import { useAppSelector } from "@/store/hooks/hooks";
import { FC, useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";

type iLayoutProps = {
  children: React.ReactNode;
};

const CatalogLayot: FC<iLayoutProps> = ({ children }) => {
  // компонент общей обертки - каталога
  const title = useAppSelector((state) => state.cart.titleOfCategory);

  const [open, setOpen] = useState(false); // стейт скрыватия категорий

  useEffect(()=>{ // на дисплеях меньще 540 до дефолту категории будут скрыты
    if(typeof window !== 'undefined'){
      const mediaQuery = window.matchMedia('(max-width: 540px)');
      mediaQuery.matches && setOpen(!open)
    }
  },[])

  return (
    <main className="body-center relative flex flex-col py-6 overflow-hidden">
      <div className="flex w-full items-end sl:flex-col sl:items-start">
        <h2 className="flex text-4xl capitalize mr-1 md:text-lg md:font-bold">{title}</h2>
        {/* кнопка скрытия меню категорий */}
        <button onClick={()=> setOpen(!open)} className="flex items-center text-[#800015] border-b sl:text-xs">
          <IoReturnUpBack className="mr-1 text-lg"/>
          {!open ? "Скрыть категории" : "Показать категории"}
        </button>
         {/* . */}
      </div>

      <section className="flex mt-2">
        <MenuCatalog open={open}/>
        <div className="flex flex-col w-full relative px-3">
          {children}
        </div>
      </section>
    </main>
  );
};

export default CatalogLayot;
