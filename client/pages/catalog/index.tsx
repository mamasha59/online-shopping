import CatalogLayot from "@/Layout/CatalogLayot";
import { useRef } from "react";
import Image from "next/image";
import CallOrderButton from "@/components/Buttons/CallOrderButton";
import { NextPage } from "next";
import { useInView } from "react-intersection-observer";

const Catalog: NextPage = () => {
  const root = useRef<HTMLDivElement>(null);
  const comp = useRef<HTMLParagraphElement>(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 100,
    trackVisibility: true
  });


  return (
    <CatalogLayot>
      <div className="flex flex-col gap-4 text-[#00000070] px-2">
        <div className='flex justify-around p-14 pt-28 w-full italic'>

          <div ref={ref} className={`px-4 py-6 rounded-sm text-lg transition-all ${!inView ? 'opacity-0' : 'opacity-100'} duration-300`}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Curved_Arrow.svg"
              width={100}
              height={100}
              alt="arrow"
              className="-scale-150 opacity-60 mb-4 animate-pulse"
            />
            <p className="text-3xl px-1 py-6 bg-[#ffc0cb11] rounded-lg">
              Выберите категорию слева в колонке
            </p>
          </div>

          <div ref={ref} className={`flex translate-y-14 items-start transition-all ${!inView ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'} duration-300`}>
            <p className="px-4 py-6 rounded-sm text-xl bg-[#ffc0cb3f]">
              Либо введите запрос в строку поиска
            </p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Curved_Arrow.svg"
              width={50}
              height={50}
              alt="arrow"
              className="rotate-[270deg] opacity-60 mb-4 animate-pulse"
            />
          </div>

        </div>
        <div>
          <CallOrderButton title="Заказать обратный звонок"/>
        </div>
      </div>
    </CatalogLayot>
  );
};

export default Catalog;
