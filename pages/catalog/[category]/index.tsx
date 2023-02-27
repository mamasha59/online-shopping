import Card from "@/components/Card/Card";
import CatalogLayot from "@/Layout/CatalogLayot";
import { iProduct } from "@/Types/common-types";
import { useRouter } from "next/router";
import { FC } from "react";

interface iData {
  data: iProduct[];
}

const CatalogPage: FC<iData> = ({ data }) => {
  // компонент рендерит товары по категориям
  const router = useRouter();
  const name = router.query.category;
  const sortedData = data.filter(
    (item) => item.category === name?.toString().toLowerCase()
  ); // фильтрация товаров по категориям из имени url

  return (
    <CatalogLayot>
      <div className="flex flex-col">
        <div className="my-2">блок тулкит</div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,auto))] justify-center gap-6">
          {sortedData.length !== 0
            ? sortedData.map((i: any) => (
                <Card
                  title={i.title}
                  brend={i.brend}
                  img={i.img}
                  price={i.price}
                  key={i.id}
                  altDescription={i.altDescription}
                  id={i.id}
                  category={i.category}
                />
              ))
            : "ничего нету!"}
        </div>
      </div>
    </CatalogLayot>
  );
};
export default CatalogPage;

export async function getServerSideProps() {
  const { products } = await import("@/data/db");

  return {
    props: {
      data: products,
    },
  };
}
