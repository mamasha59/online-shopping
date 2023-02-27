import { iSingleData } from "@/Types/common-types";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import ButtonAddToCart from "../Buttons/ButtonAddToCart";

const ProductSinglePage: FC<iSingleData> = ({ data }) => {
  // компонент продукта при клике на на него в списке
  const { altDescription, brend, img, price, title, category } = data;

  return (
    <div className="flex justify-evenly w-full shadow-xl bg-[#8080802c] py-10 relative md:flex-col md:justify-center md:items-center">
      <Link href={`/catalog/${category}`}>
        <button className="absolute -top-10 right-0 pt-2 flex bg-[pink] px-2 py-1 text-[#800015] rounded-t-xl rounded-bl-xl hover:bg-pink transition-all">
          <IoReturnUpBack className="mr-1 pt-1 text-lg" />
          Назад
        </button>
      </Link>

      <figure className="h-fit sticky top-[100px] rounded-sm cursor-pointer px-3 md:mb-10">
        <Image
          alt={altDescription}
          src={img}
          width={400}
          height={400}
          about={`фото товара ${title} из категории ${category}`}
        />
        <figcaption className="text-green italic">в наличии</figcaption>
      </figure>
      <div className="md:w-full md:px-3">
        <div className="flex flex-col">
          <div className="border-b border-[#8080807f] mb-5">
            <p className="text-[blue] text-sm">{brend}</p>
            <h2 className="flex text-2xl font-semibold mb-2">{title}</h2>
            <div>
              <ReactStars
                count={5}
                isHalf={true}
                size={30}
                activeColor="#ffd700"
              />
            </div>
          </div>

          <p className="text-3xl mb-4 text-[#791d1d]">
            <span className="lowercase text-base mr-2">Цена:</span>
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "RUB",
              currencyDisplay: "symbol",
            }).format(price)}
          </p>
          <details className="cursor-pointer">
            <p className="text-green">Артикул 2874678</p>
          </details>
        </div>
        <div className="max-w-sm mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          repellat earum et qui adipisci. Illo aliquid voluptatum minima
          officia, error eius culpa facilis, iste quidem consequatur nesciunt
          ipsum mollitia esse.
        </div>
        <Link href={"/cart"}>
            <ButtonAddToCart card={data} />
        </Link>
      </div>
    </div>
  );
};

export default ProductSinglePage;
