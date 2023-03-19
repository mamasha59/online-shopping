import Loader from "@/components/Loader/Loader";
import useClosePopupOut from "@/hooks/closePopupOut";
import { iSearch } from "@/Types/common-types";
import { GET_ALL_PRODUCTS_SEARCH } from "@/utils/apollo-requestes";
import { useLazyQuery } from "@apollo/client";
import Link from "next/link";
import React, { FC, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchForm: FC = () => {
  const [input, setInput] = useState("");

  const popup = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useClosePopupOut({ popup });
  const [sortedData, setSortedData] = useState([]);

  const [getAll, { data, loading, error }] = useLazyQuery(
    GET_ALL_PRODUCTS_SEARCH
  );
  if (error) return <div>error...</div>;


  const handleChange = (value: string) => {
    setInput(value);
    setOpen(true);
    getAll();
    if (data) {
      const results = data.productsAll.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      });
      setSortedData(results);
    }
  };

  const handleClick = (item) => {
    setOpen(false); // закрытие попапа
    setInput(""); // очищение инпута
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative border-[9px] rounded-r-md pl-3 pr-9 py-2 ml-[-2px] w-full grow-0 shrink bg-[#fff] border-[pink]">
      <input
        title="Поиск товара"
        aria-label="Поиск товара"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="text-[#000] italic w-full outline-none"
        type="search"
        placeholder="Для поиска доступно:2222 товаров / Введите запрос."
      />
      <button title="Кнопка поиска" aria-label="Кнопка что бы начать поиск" className="absolute right-2 top-[20%] hover:scale-110 transition-all">
        <BiSearchAlt className="text-2xl hover:text-green" />
      </button>
      <div
        aria-label="Найденные товары по запросу"
        ref={popup}
        className={`${
          input.length > 0 && open ? "opacity-100 block" : "opacity-0 invisible"
        } transition-all duration-500 scroll-bar-styles absolute -left-[7px] right-[7px] rounded-b-lg border-l-[9px] border-b-[9px] border-[pink] bottom-0 top-12 flex flex-col max-h-52 h-fit overflow-y-auto gap-3 z-50 w-full bg-[#fff] px-2 py-2`}
      >
        {loading ? "loading..." : !loading && !error && input && data &&
          sortedData.length > 0 

          ? (sortedData.map((item:iSearch) => 
            <Link
              title={`Найден ${item.title} по артиклу ${item.article}`}
              aria-label={`Найден ${item.title} по артиклу ${item.article} кликните что бы перейти на подробное описание товара`}
              onClick={handleClick}
              key={item.title}
              href={`/${item.id}`}
              className="flex items-center gap-3 border-b border-[#00000021]"
            >
              <p className="text-[10px]">{item.article}</p>
              <p className="capitalize">{item.title}</p>
            </Link>
          ))
          : (<div>Ничего не найденно, измените запрос</div>)
        }
      </div>
    </form>
  );
};

export default SearchForm;
