import { useAppSelector } from "@/store/hooks/hooks";
import CartItem from "@/components/CartItem/CartItem";
import { FaCartPlus } from "react-icons/fa";
import GoToCatalog from "@/components/Buttons/GoToCatalog";
import { NextPage } from "next";
import Head from "next/head";

const Cart:NextPage = () => {
  // компонент корзины по URL(/cart)
  const cards = useAppSelector((state) => state.cart);

  const totalPrice = cards.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  ); // общая сумма

  return (
    <>
    <Head>
      <meta name="Покупай надежно здесь! Везде врут а тут нет!" content="Интернет магазин медицинских товаров! Лучший в мире!"/>
    </Head>
    <section className="body-center py-4 my-4 bg-[#8080802c] min-h-[50vh]">
      <div className="flex md:flex-col">
        <div className="flex flex-col grow flex-[80%] shadow-md p-3 bg-[#fff] mr-4 rounded md:mb-3 md:mr-0">
          <div className="flex items-center text-[#808080da] italic border-b w-full justify-between mb-7">
            <h4 className="flex items-center text-4xl midl:text-xl">
              <FaCartPlus className="text-pink mr-3" />
              {cards.items.length > 0
                ? "Ваша корзина покупок"
                : "Корзина пуста"}
            </h4>
            <p>Цена</p>
          </div>
          {cards.items.length > 0 ? cards.items.map((item) => (
            <CartItem item={item} key={item.product.id} />
          )) : <div className="mb-2 text-dark italic border-b w-fit">Для покупок, добавьте продукт в корзину!</div> }
          <div className="flex justify-between">
            <div className="flex gap-7 flex-wrap midl:justify-end midl:gap-2">
              <GoToCatalog/>
              <div className="border-r border-[#8080807b] md:hidden"></div>
              <button
                className="px-2 py-1 bg-green rounded-sm text-[#fff] hover:scale-105 hover:shadow-md transition-all
               bg-gradient-to-r from-green hover:from-[green] hover:animate-pulse"
              >
                Заказать звонок
              </button>
            </div>
            {cards.items.length > 0 && (
              <p className="text-base font-medium md:hidden">
                Итого ({cards.items.length} предмета):{" "}
                <span className="text-xl font-semibold">
                  &#8381; {totalPrice}
                </span>
              </p>
            )}
          </div>
        </div>
        {cards.items.length > 0 && (
          <aside className="flex flex-[20%] flex-col justify-between shadow-md p-3 bg-[#fff] rounded grow-0 max-h-[150px] sticky top-[15%] md:relative md:max-w-xs">
            <p className="text-base font-medium md:mb-3">
              Итого ({cards.items.length} предмета):{" "}
              <span className="text-xl font-semibold">
                &#8381;{totalPrice}{" "}
              </span>
            </p>
            <button
              disabled={cards.items.length === 0}
              className="px-2 py-1 bg-green rounded-sm text-[#fff] hover:scale-105 hover:shadow-md transition-all
               bg-gradient-to-r from-green hover:from-[green] hover:animate-pulse"
            >
              Оформить заказ
            </button>
          </aside>
        )}
      </div>
    </section>
    </>
  );
}

export default Cart;