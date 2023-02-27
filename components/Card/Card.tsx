import { iProduct } from "@/Types/common-types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ButtonAddToCart from "../Buttons/ButtonAddToCart";

const Card: FC<iProduct> = ({
  img,
  title,
  brend,
  price,
  altDescription,
  id,
  category,
}) => {
  // компонент карточки продукта в категориях по URL(/catalog)
  const card = {
    img: img,
    title: title,
    brend: brend,
    price: price,
    altDescription: altDescription,
    id: id,
    category: category,
  };

  return (
    <div className="max-w-[300px] p-2 max-h-[450px] flex flex-col justify-between bg-[#80808038]">
      <Link href={`/catalog/${category}/${id}`}>
        <div className="flex flex-col">
          <Image
            width={250}
            height={250}
            src={img}
            alt={altDescription}
            className="mx-auto my-0 border border-style"
          />
          <div>
            <h3 className="text-[#725b5b] text-base font-medium w-full max-w-[250px]">
              {title}
            </h3>
            <p className="text-[blue]">{brend}</p>
            <p className="text-2xl">{price} &#8381;</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-end">
        <Link href="/cart">
          <ButtonAddToCart card={card} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
