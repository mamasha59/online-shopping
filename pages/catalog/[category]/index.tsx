import Card from "@/components/Card/Card";
import CatalogLayot from "@/Layout/CatalogLayot";
import { iProduct } from "@/Types/common-types";
import { useRouter } from "next/router";
import { FC } from "react";
import { IoReturnUpBack } from "react-icons/io5";

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
        <div className="my-2">та полоска</div>
        <div className="flex gap-[35px] flex-wrap">
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
