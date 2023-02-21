import { useAppDispatch } from "@/store/hooks/hooks";
import { addProductIntoCart } from "@/store/slicers/cartSlicer";
import { iProduct } from "@/Types/common-types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { TiPlus } from "react-icons/ti";

const Card: FC<iProduct> = ({
  img,
  title,
  brend,
  price,
  altDescription,
  id,
  category
}) => {
  // компонент карточки продукта в категориях по URL(/catalog)
  const card = {
    img: img,
    title: title,
    brend: brend,
    price: price,
    altDescription: altDescription,
    id: id,
    category:category
  };
  const dispatch = useAppDispatch();
  return (
    <div className="w-[300px] max-h-[450px] flex flex-col justify-between border-style hover:bg-[#80808038]">
      <Link href={`/catalog/${category}/${id}`}>
        <div className="flex flex-col">
          <Image
            width={250}
            height={250}
            src={img}
            alt={altDescription}
            className="mx-auto my-0 border border-style p-2"
          />
          <div className="p-2">
            <h3 className="text-[#725b5b] text-base font-medium w-full max-w-[250px]">{title}</h3>
            <p className="text-[blue]">{brend}</p>
            <p className="text-2xl">{price} &#8381;</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-end">
        <Link href="/cart">
          <button
            className="m-3 p-1 pr-2 flex items-center bg-[#00800060] rounded-md hover:text-[#fff] hover:bg-[green] group transition-all"
            onClick={() => dispatch(addProductIntoCart(card))}
          >
            <TiPlus className="text-[green] group-hover:text-[red] transition-all" />
            Добавить
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
