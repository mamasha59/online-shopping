import Card from "@/components/Card/Card";
import CatalogLayot from "@/Layout/CatalogLayot";
import { iProduct } from "@/Types/common-types";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {GET_PRODUCTS} from "@/utils/apollo-requestes";
import Loader from "@/components/Loader/Loader";
import { NextPage } from "next";

interface iData {
  products: iProduct[];
}

const CatalogPage: NextPage<iData> = () => {
  // компонент рендерит товары по категориям
  const url = useRouter();
  const name = url.query.category?.toString().toLowerCase();

  const { data, loading, error } = useQuery(GET_PRODUCTS, { variables: { category : name}});

  if(loading) return <CatalogLayot> <Loader loading={loading}/> </CatalogLayot>
  if(error) return <CatalogLayot><div>error...</div></CatalogLayot>
 
  return (
    <CatalogLayot>
      <div className="flex flex-col">
        <div className="my-2">блок тулкит</div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,auto))] justify-center gap-6 sl:grid-cols-[repeat(auto-fill,minmax(220px,auto))]">

          {!loading  && !error  &&
            (data.products.length !== 0
              ? data.products.map((i:iProduct) => (
                <Card
                  title={i.title}
                  brend={i.brend}
                  img={i.img}
                  price={i.price}
                  key={i.id}
                  altDescription={i.altDescription}
                  id={i.id}
                  category={i.category}
                  article={i.article}
                />
              ))
            : <div className="sl:text-xs flex max-w-[10%]">каталог пустой, либо отсутствуют данные...</div> )
              }
        </div>
      </div>
    </CatalogLayot>
  );
};
export default CatalogPage;

// export async function getServerSideProps() {
//   const { data } = await client.query({
//    query: gql`
//     query {
//       products{
//         title
//         id
//         img
//         decsiprion
//         brend
//         price
//         altDescription
//         category
//         article
//         id
//       }
//     }
//     `,
//   })

//   return {
//     props: {
//       products: data.products
//     },
//   };
// }
