import ProductSinglePage from "@/components/ProductSinglePage/ProductSinglePage";
import CatalogLayot from "@/Layout/CatalogLayot";
import { iSingleData } from "@/Types/common-types";
import { GET_PRODUCT_BU_ID } from "@/utils/apollo-requestes";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import  ClockLoader from "react-spinners/ClockLoader";

const CurrenProduct: NextPage<iSingleData> = () => {
  const url = useRouter();
  const id = url.query.id;

  const { data, loading, error } = useQuery(GET_PRODUCT_BU_ID, { variables: { id }});

  //лоудер при загрузке данных
  if(loading) return <CatalogLayot>
                        <ClockLoader loading={loading} color={'#e84aa4'} aria-label="загрузка данных..."/>
                      </CatalogLayot>
  //если ошибка
  if(error) return <CatalogLayot>
                      <div>error...</div>
                    </CatalogLayot>
  //рендер компонента
  return <CatalogLayot>
            {!loading  && !error  && <ProductSinglePage data={data.product} />}
        </CatalogLayot>;
};

export default CurrenProduct;

// export async function getStaticPaths() {
//   const data = await import("@/data/db");

//   const allPaths = data.products.map((path) => {
//     return {
//       params: {
//         category: path.category,
//         id: path.id,
//       },
//     };
//   });
//   return {
//     paths: allPaths,
//     fallback: false,
//   };
// }

// export const getStaticProps:GetStaticProps = async (context) => {
//   const { products } = await import("@/data/db");

//     const id = context.params && context.params.id;
//     const currentProduct = products.find((item) => id === item.id);

//   return {
//     props: { data: currentProduct },
//   };
// }
