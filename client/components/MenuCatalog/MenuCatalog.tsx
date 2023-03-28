import { useAppDispatch } from "@/store/hooks/hooks";
import { setTitleofCategory } from "@/store/slicers/cartSlicer";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { itemCatalog } from "./menu-catalog-items/menu-catalog-items";

interface iCatalog{
  open:boolean;
}

const MenuCatalog: FC<iCatalog> = ({open}) => {
 // компонент блока категорий слева
  const route = useRouter(); // определение адресса
  const dispatch = useAppDispatch();

  return (
    <aside className={`w-[280px] h-[100vh] overflow-y-auto text-green scroll-bar-styles flex flex-col gap-y-2 uppercase md:text-xs sl:text-[10px] sl:w-40 md:w-48 shrink-0 ${!open ? 'translate-x-0' : 'hidden invisible opacity-0'}`}>
        {itemCatalog.map((i) => (
          <Link
            key={i.link}
            href={`/catalog/${i.link}`}
            scroll={false}
            onClick={() => dispatch(setTitleofCategory(i.name))}
          >
            <p className={`border border-[#8080804f] hover:bg-[#8080804f] hover:font-medium p-2 transition-all
                        ${route.asPath === i.link && "bg-[#8080804f]"}`}>
              {i.name}
            </p>
          </Link>
        ))}
    </aside>
  );
};

export default MenuCatalog;
