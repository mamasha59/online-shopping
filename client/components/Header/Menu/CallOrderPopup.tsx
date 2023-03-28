import { FcPhone } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";
import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import Decor from '@/public/decor.svg';
import Decor2 from '@/public/decor2.svg';

interface iCallOrderPopup{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const CallOrderPopup:FC<iCallOrderPopup> = ({open, setOpen}) => {

  return (
    <div className={`w-full h-full fixed top-0 left-0 z-[51] bg-overlay transition-all duration-300 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
    <div className="pt-12 pb-5 px-5 fixed left-1/2 -translate-x-1/2 right-0 top-[10%] z-50 max-w-xs w-full flex bg-[#34568B] text-[#fff] rounded-xl">
    <form className="flex flex-col w-full">
       <div onClick={()=> setOpen(false)} title="закрыть форму" aria-label="закрыть форму" className="bg-overlay shadow-md  rounded-full absolute right-2 top-3 group cursor-pointer first-letter">
          <IoCloseSharp className="text-3xl text-[#1eff0098] group-hover:text-[red] transition-colors duration-500"/>
       </div>
        <label className="flex flex-col mb-2 cursor-pointer relative">Введите ваш номер телефона*
          <FcPhone className="text-2xl absolute top-9 rotate-180 right-3"/>
          <input
            type="tel"
            title="Поле ввода номера телефона"
            aria-label="Поле ввода номера телефона"
            required
            maxLength={11}
            className="text-[#000] border-2 border-[#4169e1] px-2 py-1 mt-2 rounded-md mb-6 shadow-sm"
            placeholder="8 (800) 350-80-17"
            autoComplete="true"
            />
          </label>
        <label className="flex flex-col mb-2 cursor-pointer">Введите ваше имя*
          <input
            type="text"
            title="Поле ввода имени"
            aria-label="Поле ввода имени"
            required
            className="text-[#000] border-2 border-[#4169e1] px-2 mb-2 py-1 mt-2 rounded-md shadow-sm"
            placeholder="Введите имя для связи"
            autoComplete="true"
            />
          </label>
          <label className="flex flex-col my-2 cursor-pointer relative">Краткое описания <span className="text-xs underline text-[#ff0000]">не обязательно</span>
            <textarea
              title="Поле ввода краткой инф."
              aria-label="Поле ввода краткой информации, не обязательно"
              className="text-[#000] scroll-bar-styles border-2 max-h-28 border-[#4169e1] p-2 mt-2 rounded-md resize-none shadow-sm"
              placeholder="введите краткое описание вашего запроса..."
              maxLength={100}
              rows={5}
              >
          </textarea>
          </label>
        <button type="submit" className="mt-10 hover:opacity-60 py-2 shadow-lg bg-[#fff] text-[#000] rounded-md">отправить</button>
      </form>
      <Image
        alt="декорация"
        src={Decor}
        width={200}
        height={200}
        className="absolute bottom-0 -z-10 top-2.5 blur-lg"
        />
        <Image
        alt="декорация"
        src={Decor2}
        width={200}
        height={200}
        className="absolute bottom-0 -z-10 right-0 blur-lg"
        />
    </div>
  </div>
  )}
export default CallOrderPopup;