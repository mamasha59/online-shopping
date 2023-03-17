import CatalogLayot from "@/Layout/CatalogLayot";
import { FC, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import CallOrderButton from "@/components/Buttons/CallOrderButton";

const Catalog: FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const comp = useRef<HTMLParagraphElement>(null);
  const firstBlock = useRef<HTMLDivElement>(null); // левый блок с подсказкой
  const secondBlock = useRef<HTMLDivElement>(null); // правый блок с подсказкой поиску

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(comp.current,{opacity:0}, {
        opacity: "1",
        delay:.5,
      });
      gsap.fromTo(firstBlock.current,{translateX:-200}, {
        translateX: "0",
        delay:.5,
      });
      gsap.fromTo(secondBlock.current,{translateY:-100}, {
        translateY: "0",
        delay:.7,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <CatalogLayot>
      <div ref={root} className="flex flex-col gap-4 text-[#00000070] sticky top-0">
        <div ref={comp} className='flex justify-around p-14 pt-28 w-full italic'>
          <div ref={firstBlock} className="px-4 py-6 rounded-sm text-lg ">
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
          <div ref={secondBlock} className="flex translate-y-14 items-start">
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
