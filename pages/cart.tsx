import { ReactNode } from "react";
import { useAppSelector } from "@/store/hooks/hooks";
import { selectItems } from "@/store/slicers/cartSlicer";
import CartItem from "@/components/CartItem/CartItem";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

export default function Cart(): ReactNode {
  // компонент корзины по URL(/cart)
  const cards = useAppSelector((state) => state.cart);

  const totalPrice = cards.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  ); // общая сумма

  return (
    <section className="body-center py-4 my-4 bg-[#8080802c] min-h-[50vh]">
      <div className="flex">
        <div className="flex flex-col grow flex-[80%] shadow-md p-3 bg-[#fff] mr-4 rounded">
          <div className="flex items-center text-[#808080da] italic border-b w-full justify-between mb-7">
            <h4 className="flex items-center text-4xl midl:text-xl">
              <FaCartPlus className="text-pink mr-3" />
              {cards.items.length > 0
                ? "Ваша корзина покупок"
                : "Корзина пуста"}
            </h4>
            <p>Цена</p>
          </div>
          {cards.items.map((item) => (
            <CartItem item={item} key={item.product.id} />
          ))}
          <div className="flex justify-between">
            <div className="flex gap-7 flex-wrap">
              <Link
                href="/catalog"
                replace
                className="px-2 py-1 bg-[pink] rounded-sm hover:scale-105 hover:shadow-md transition-all"
              >
                Перейти в каталог
              </Link>
              <div className="border-r border-[#8080807b]"></div>
              <button
                className="px-2 py-1 bg-green rounded-sm text-[#fff] hover:scale-105 hover:shadow-md transition-all
               bg-gradient-to-r from-green hover:from-[green] hover:animate-pulse"
              >
                Заказать звонок
              </button>
            </div>
            {cards.items.length > 0 && (
              <p className="text-base font-medium">
                Итого ({cards.items.length} предмета):{" "}
                <span className="text-xl font-semibold">
                  &#8381; {totalPrice}
                </span>
              </p>
            )}
          </div>
        </div>
        <aside className="flex flex-[20%] flex-col justify-between shadow-md p-3 bg-[#fff] rounded grow-0 max-h-28 sticky top-[15%]">
          <p className="text-base font-medium">
            Итого ({cards.items.length} предмета):{" "}
            <span className="text-xl font-semibold">&#8381;{totalPrice} </span>
          </p>
          <button
            className="px-2 py-1 bg-green rounded-sm text-[#fff] hover:scale-105 hover:shadow-md transition-all
               bg-gradient-to-r from-green hover:from-[green] hover:animate-pulse"
          >
            Оформить заказ
          </button>
        </aside>
      </div>
    </section>
  );
}
