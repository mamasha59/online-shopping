import { iSingleData } from "@/Types/common-types";
import Image from "next/image";
import React, { FC } from "react";

const ProductSinglePage:FC<iSingleData> = ({data}) => {

  const {altDescription, brend, img, price, title } = data;

  return <div className="flex justify-evenly w-full shadow-lg bg-[#8080802c] py-10">
           <div className="shadow-md h-fit sticky top-[100px]">
            <Image alt={altDescription} src={img} width={400} height={400}/>
           </div>
           <div>
            <div className="flex flex-col">
                <h2 className="flex text-2xl font-semibold">{title}</h2>
                <p className="text-[blue] text-lg">{brend}</p>
                <p className="text-3xl">{price}</p>
            </div>
           </div>
        </div>

};

export default ProductSinglePage;
