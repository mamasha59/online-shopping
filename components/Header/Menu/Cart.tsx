import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Cart: FC = () => {
  const url = useRouter();

  return (
    <Link
      href="/cart"
      scroll={false}
      className={`flex px-2 items-center rounded-md text-pink hover:bg-pink hover:text-[#fff] transition-all duration-500 hover:shadow-lg hover:scale-110
                  ${url.pathname === "/cart" && "hidden"}`}
    >
      Корзина
      <HiOutlineShoppingBag className="bg-pink rounded-full px-1 py-1 ml-2 text-3xl text-[white]" />
    </Link>
  );
};

export default Cart;
