import CallOrderButton from "@/components/Buttons/CallOrderButton";
import GoToCatalog from "@/components/Buttons/GoToCatalog";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Error from "../public/404error.svg";

 const Error404:NextPage = () => {
  return (
    <section className="flex justify-center flex-col items-center py-4 px-2">
    <Head>
      <title>Ошибка 404</title>
      <meta name="Покупай надежно здесь! Везде врут а тут нет!" content="Интернет магазин медицинских товаров! Лучший в мире!"/>
    </Head>
     <p className="mb-[5vh] text-lg text-opacity-100 text-green italic">Кажетcя по такому адресу ничего нет...</p>
     
     <Image src={Error} width={300} height={200} alt="ошибка 404 - страница не найденна"/>
     <div className="flex flex-wrap gap-3 items-center">
      <CallOrderButton/>
      <GoToCatalog/>
     </div>
    </section>
  )
}

export default Error404;