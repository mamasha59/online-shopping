import Image from "next/image";
import { useAppDispatch } from "@/store/hooks/hooks";
import { addOneMore, deleteOne, removeProductFromCart } from "@/store/slicers/cartSlicer";
import { FC } from "react";
import { iCartItem } from "@/Types/common-types";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartItem: FC<{item:iCartItem}> = ({item}) => { // компонент продукта в корзине
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="w-full max-h-[300px] flex my-7 justify-between bg-[#8080800b] rounded-sm border-b border-[#80808020]">
        <div className="flex">
          <Image width={200} height={250} src={item.product.img} alt={item.product.altDescription} />
          <div className="ml-3 p-3">
            <div className="max-w-2xl">
              <h3 className="text-[#0c0909] font-medium text-2xl ">{item.product.title}</h3>
              <p className="text-xs lowercase italic">Aртикул 20202</p>
              <p className="text-xs lowercase italic">
                Размер 10 на 20 в упаковке
              </p>
              <p className="text-[blue] text-sm">{item.product.brend}</p>
              <p className="text-green text-sm">В наличии</p>
            </div>
            <div className="flex gap-7 mt-2 items-center">
              <button onClick={()=>dispatch(addOneMore({id:item.product.id}))} className="border-style p-1">добавить +1</button>
              <div className="border-b">Кол-во {item.quantity}</div>
              <button disabled={ item.quantity === 1 } onClick={()=>dispatch(deleteOne({id:item.product.id}))} className="border-style p-1 disabled:blur-[0.6px] disabled:bg-[#2b2a2a1d] transition-all">убрать -1</button>
              <div className="border-r border-[#8080807b]"></div>
              <button onClick={() => dispatch(removeProductFromCart(item.product.id))} className="border-b border-[red] p-1 flex items-center">
                <MdOutlineDeleteForever className="text-[#ff000089] text-2xl mr-2"/>
                Убрать из корзины
              </button>
            </div>
          </div>
        </div>
        <p className="p-3 text-xl font-semibold">&#8381; {item.product.price}</p>
      </div>
    </>
  );
};

export default CartItem;
