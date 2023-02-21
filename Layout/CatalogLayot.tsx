import MenuCatalog from "@/components/MenuCatalog/MenuCatalog";
import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const CatalogLayot: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="body-center relative flex flex-col py-6">
      <h2 className="text-4xl mb-5">Title</h2>
      <div className="flex">
        <MenuCatalog />
        <div className="px-3 w-full flex gap-[35px] flex-wrap">
          {children}
        </div>
      </div>
    </main>
  );
};

export default CatalogLayot;
