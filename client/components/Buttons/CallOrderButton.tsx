import React, { FC, useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import CallOrderPopup from "../Header/Menu/CallOrderPopup";
import Portal from "../Portal/Portal";

interface iCallOrder {
  title?: string;
}

const CallOrderButton: FC<iCallOrder> = ({ title }) => {

  const [open, setOpen] = useState(false); // закрытие попапа

  return (
    <>
    <button
      onClick={() => setOpen(true)}
      aria-label="заказать звонок"
      title="Заказать звонок"
      className="my-4 flex items-center hover:scale-110 hover-header hover:shadow-lg transition-all">
      <IoCallSharp className="bg-green text-[#fff] text-3xl rounded-full px-1 py-1" />
      {title && <span className='ml-2'>{title}</span> }
    </button>
    <Portal><CallOrderPopup setOpen={setOpen} open={open}/></Portal>  {/* попап заказать звонок */}
    </>
  );
};

export default CallOrderButton;
