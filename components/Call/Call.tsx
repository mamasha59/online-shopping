import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import callCenter from "../../public/callCenter.svg";

export const Call: FC = () => {
  return (
    <section className="body-center bg-gradien-pattern flex my-4">
      <div className="flex justify-evenly w-full items-center">
        <div className="md:hidden flex items-center pr-3">
          <Image
            src={callCenter}
            width={400}
            height={200}
            alt="Поможем с выбором"
          />
        </div>
        <div className="text-[#fff]">
          <div className="items-start flex flex-col justify-center shadow-2xl rounded-md px-7 py-4">
            <h2 className="text-4xl mb-4 md:text-xl italic">
              <span className="decoration-wavy border-b">Стерильно.com </span>
              поможет c выбором
            </h2>
            <div className="flex items-center text-2xl hover:scale-125 transition-all duration-300 hover:text-[#222f3e] hover:font-bold">
              <BsTelephoneInbound className="animate-bounce mr-2 rounded-md" />
              <Link
                href="tel:88003508017"
                title="Вызов"
                aria-label="Вызвать по номеру 8 800 350-80-17"
              >
                8 (800) 350-80-17
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm">Подробнее про:</p>
            <div className="flex gap-5 mt-4 sl:flex-wrap">
              <Link
                href={"/info/delivery"}
                title="Доставка"
                aria-label="Доставка"
                className="relative"
              >
                <div className="hover:opacity-70 after:block after:border-b after:scale-x-0 hover:after:scale-100 after:transition-transform hover:after:duration-300">Доставка</div>
              </Link>
              <span>|</span>
              <Link
                href={"/info/deliverySpot"}
                title="Пункты выдачи"
                aria-label="Пункты выдачи"
              >
                <div className="hover:opacity-70 after:block after:border-b after:scale-x-0 hover:after:scale-100 after:transition-transform hover:after:duration-300">Пункты выдачи</div>
              </Link>
              <span className="sl:hidden">|</span>
              <Link
                href={"/info/payment"}
                title="Оплата"
                aria-label="Оплата"
              >
                <div className="hover:opacity-70 after:block after:border-b after:scale-x-0 hover:after:scale-100 after:transition-transform hover:after:duration-300">Оплата</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
