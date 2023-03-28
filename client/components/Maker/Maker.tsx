import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { itemsBrend } from "./brends";

const Maker:FC = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 100,
    trackVisibility: true
  });

  return (
    <section className="body-center text-green my-5 shadow-lg rounded-md relative md:border-none">
        <h2 aria-label="И все это от лучших производителей!" className="py-5 text-center text-3xl md:text-xl font-medium rounded-md">
          И все это от лучших производителей!
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(auto,190px))] justify-center my-5 gap-6">
          {itemsBrend.map((i)=>
            <li ref={ref} key={i.name} className={`border-[#0000002b] border flex items-center justify-center rounded-md hover:bg-[#0000002b] hover:cursor-pointer p-3 ${!inView ? 'scale-0' : 'scale-100'} transition-all duration-500`}>
                <Image
                  title={i.name}
                  aria-label={i.name}
                  src={i.icon}
                  alt={i.name}
                  width={150}
                  height={60}
                />
            </li>
            )}
        </ul>
        <button title="Все производители" aria-label="Посмотреть всех производителей" className="text-lg rounded-md py-3 hover:text-xl hover:text-[#16a085] hover:opacity-90 transition-all">
          Все производители
        </button>
    </section>
  );
};

export default Maker;