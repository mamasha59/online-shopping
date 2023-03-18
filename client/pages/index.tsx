import { Call } from "@/components/Call/Call";
import Folders from "@/components/Folders/Folders";
import Maker from "@/components/Maker/Maker";
import Sliders from "@/components/Sliders/Sliders";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sterilno.com</title>
        <meta name="Покупай надежно здесь! Везде врут а тут нет!" content="Интернет магазин медицинских товаров! Лучший в мире!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/webIcon.svg"/>
      </Head>
    <Sliders/>
    <h1 className="body-center text-center text-2xl md:text-xl uppercase text-pink font-semibold py-5"><span className="text-3xl">Sterilno.com</span> - интернет-магазин медицинских товаров</h1>
    <Folders/>
    <Maker/>
    <Call/>
    </>
  );
}
