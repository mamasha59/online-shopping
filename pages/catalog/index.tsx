import Card from "@/components/Card/Card";
import CatalogLayot from "@/Layout/CatalogLayot";
import { FC } from "react";
import { products } from "@/data/db";

const Catalog: FC = () => {
  // компонент для отоброжения всего каталога
  return (
    <CatalogLayot >
        {products.map((i) => (
          <Card
            title={i.title}
            brend={i.brend}
            img={i.img}
            price={i.price}
            key={i.id}
            altDescription={i.altDescription}
            id={i.id}
          />
        ))}
    </CatalogLayot>
  );
};

export default Catalog;