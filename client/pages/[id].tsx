import Loader from "@/components/Loader/Loader";
import ProductSinglePage from "@/components/ProductSinglePage/ProductSinglePage";
import { GET_PRODUCT_BU_ID } from "@/utils/apollo-requestes";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Product: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, error, loading } = useQuery(GET_PRODUCT_BU_ID, {
    variables: { id },
  });

  if (loading) return <Loader loading={loading} />;
  if (error) return <div>error...</div>;

  return (
    <section className="mt-[5vh] body-center">
    <Head>
      <meta name="Покупай надежно здесь! Везде врут а тут нет!" content="Интернет магазин медицинских товаров! Лучший в мире!"/>
    </Head>
      {!loading && !error && <ProductSinglePage data={data.product} />}
    </section>
  );
};

export default Product;
