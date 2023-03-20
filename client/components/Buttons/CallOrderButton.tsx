import React, { FC, useEffect, useState } from "react";
import { IoCallSharp } from "react-icons/io5";

interface iCallOrder {
  title?: string;
}

const CallOrderButton: FC<iCallOrder> = ({ title }) => {

  return (
    <button
      aria-label="заказать звонок"
      title="Заказать звонок"
      className="my-4 flex items-center hover:scale-110 hover-header hover:shadow-lg transition-all">
      <IoCallSharp className="bg-green text-[#fff] text-3xl rounded-full px-1 py-1" />
      {title && <span className='ml-2'>{title}</span> }
    </button>
  );
};

export default CallOrderButton;
