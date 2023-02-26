import MenuCatalog from "@/components/MenuCatalog/MenuCatalog";
import { useAppSelector } from "@/store/hooks/hooks";
import { FC,useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";

type LayoutProps = {
  children: React.ReactNode;
};

const CatalogLayot: FC<LayoutProps> = ({ children }) => {
  const title = useAppSelector((state) => state.cart.titleOfCategory);

  const [open, setOpen] = useState(false);

  const handleMenuClicked = () =>{
    setOpen(!open)
  }

  return (
    <main className="body-center relative flex flex-col py-6 bg-gradient-catalog overflow-hidden">
      <div className="flex w-full items-end">
        <h2 className="flex text-4xl capitalize mr-1">{title}</h2>
        <button onClick={handleMenuClicked} className="flex items-center text-[#800015]">
          <IoReturnUpBack className="mr-1 text-lg" />
          {!open ? "Скрыть категории" : "Показать категории"}
        </button>
      </div>

      <section className="flex mt-2">
        <MenuCatalog open={open} />
        <div className={`flex flex-col w-full relative px-3 ${open}`}>
          <div className="w-full">{children}</div>
        </div>
      </section>
    </main>
  );
};

export default CatalogLayot;
