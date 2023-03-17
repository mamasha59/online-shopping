import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { itemsBrend } from "./brends";

const Maker:FC = () => {
  return (
    <section className="body-center text-green py-3 my-5">
      <div className="border-[#2fb4205c] border-solid border-[1px] rounded-md p-3 relative md:border-none">
        <h2 className="text-green py-3 bg-[#fff] text-center text-3xl md:text-xl font-medium tracking-widest px-2 absolute z-10 top-[-30px] rounded-md w-auto">
          И все это от лучших производителей!
        </h2>
        <div>
          <ul className="flex justify-between py-9 gap-3 flex-wrap">
            {itemsBrend.map((i)=>
              <li key={i.name}>
              <Link href={i.link}>
                <Image
                  src={i.icon}
                  alt={i.name}
                  width={120}
                  height={20}
                />
              </Link>
            </li>
            )}
          </ul>
        </div>
        <button className="text-lg rounded-md -bottom-[10px] absolute left-5 bg-[#fff] px-3 hover:text-xl hover:text-[#16a085] hover:opacity-90 transition-all">
          Все производители
        </button>
      </div>
    </section>
  );
};

export default Maker;
