import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { itemCatalog } from "@/components/MenuCatalog/menu-catalog-items/menu-catalog-items";

interface iCategory{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
}

const CategoryPopup:FC<iCategory> = ({open, setOpen}) => {

  return (
    <div
      className={`absolute flex z-50 w-full flex-col gap-4 left-0 max-h-[90vh] bg-green shadow-xl text-[#fff] overflow-y-scroll transition-all duration-500 scroll-bar-styles sl:w-[95vw] ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {itemCatalog.map((item) => (
        <Link
          href={`/catalog/${item.link}`}
          key={item.name}
          onClick={() => setOpen(!open)}
          className="border-b p-2"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryPopup;
