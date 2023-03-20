import Image from "next/image";
import { useAppDispatch } from "@/store/hooks/hooks";
import { addOneMore, deleteOne, removeProductFromCart } from "@/store/slicers/cartSlicer";
import { FC } from "react";
import { iCartItem } from "@/Types/common-types";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartItem: FC<{item:iCartItem}> = ({item}) => { 
  // компонент продукта в корзине
  const dispatch = useAppDispatch();
  const {altDescription,brend,id,img,price,title,article} = item.product;

  return (
      <div className="w-full flex my-7 justify-between bg-[#8080800b] rounded-sm border-b border-[#80808020] md:flex-col midl:py-2">
        <div className="flex grow-0 shrink flex-[80%] items-center midl:flex-col">
          <Image width={200} height={250} src={img} alt={altDescription} className="md:max-w-[150px] md:max-h-[150px]"/>
          <div className="ml-3 p-3 flex flex-col">
            <div className="max-w-2xl">
              <h3 className="text-[#0c0909] font-medium text-2xl md:text-lg">{title}</h3>
              <p className="text-xs lowercase italic">Aртикул {article}</p>
              <p className="text-xs lowercase italic">
                Размер 10 на 20 в упаковке
              </p>
              <p className="text-[blue] text-sm">{brend}</p>
              <p className="text-green text-sm">В наличии</p>
            </div>
            <div className="flex gap-7 mt-2 items-center flex-wrap md:text-xs">
              <button onClick={()=>dispatch(addOneMore({id}))} className="border-style p-1">добавить +1</button>
              <div className="border-b">Кол-во {item.quantity}</div>
              <button disabled={ item.quantity === 1 } onClick={()=>dispatch(deleteOne({id}))} className="border-style p-1 disabled:blur-[0.6px] disabled:bg-[#2b2a2a1d] transition-all">убрать -1</button>
              <div className="border-r border-[#8080807b]"></div>
              <button onClick={() => dispatch(removeProductFromCart(id))} className="border-b border-[red] p-1 flex items-center">
                <MdOutlineDeleteForever className="text-[#ff000089] text-2xl mr-2"/>
                Убрать из корзины
              </button>
            </div>
          </div>
        </div>
        <p className="p-3 text-xl font-semibold flex justify-end grow-0 shrink-0 flex-[20%]">&#8381; {price}</p>
      </div>
  );
};

export default CartItem;
