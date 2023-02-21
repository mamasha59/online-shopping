import ProductSinglePage from "@/components/ProductSinglePage/ProductSinglePage";
import CatalogLayot from "@/Layout/CatalogLayot";
import { iSingleData } from "@/Types/common-types";
import React, { FC } from "react";

const CurrenProduct: FC<iSingleData> = ({ data }) => {
  return (
    <CatalogLayot>
      <ProductSinglePage data={data} />
    </CatalogLayot>
  );
};

export default CurrenProduct;

export async function getStaticPaths() {
  const data = await import("@/data/db");
  const allPaths = data.products.map((path) => {
    return {
      params: {
        category: path.category,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  const { products } = await import("@/data/db");

  const currentProduct = products.find((item) => id === item.id);

  return {
    props: { data: currentProduct },
  };
}
