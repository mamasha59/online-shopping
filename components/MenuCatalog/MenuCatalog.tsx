import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { itemCatalog } from "./menu-catalog-items/menu-catalog-items";

const MenuCatalog: FC = () => {
  const urlName = useRouter(); // определение адресса

  return (
    <aside className="max-w-[280px] max-h-[900px] sticky top-0 overflow-y-auto flex flex-col gap-y-2 text-green uppercase scroll-bar-styles">
      {itemCatalog.map((i) => (
        <Link key={i.link} href={i.link} scroll={false}>
          <p
            className={`border border-[#8080804f] hover:bg-[#8080804f] hover:font-medium p-2 transition-all 
                        ${urlName.pathname === i.link && "bg-[#8080804f]"}`}
          >
            {i.name}
          </p>
        </Link>
      ))}
    </aside>
  );
};

export default MenuCatalog;
