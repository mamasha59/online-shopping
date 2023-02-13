import Link from "next/link";
import { FC } from "react";

const LargeFolder: FC = () => {
  return (
    <Link
      href="/catalog"
      className="folder-container-style group grow-0 shrink flex-[570px]"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?w=2000")`,
      }}
    >
      <p className="text-3xl group-hover:-translate-y-8 group-hover:scale-110 group-hover:font-semibold transition-transform z-30">
        Лечение ран
      </p>
      {/*список статично подгружать данные */}
      <ul className="flex absolute left-2/4 top-8 text-xs px-[0.5] flex-wrap gap-2 max-w-[282px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <li>Мазевые</li>
        <li>Впитывающие</li>
        <li>Послеоперационные</li>
        <li>Специальные</li>
        <li>Для катеторов</li>
        <li>Гидроколлоидные</li>
        <li>Крема, Гели, Растворы</li>
        <li>На логоть, пятку</li>
        <li>Пленочные</li>
        <li>Гелеевые</li>
        <li>Гемостатические</li>
        <li>Тампоны и тампонады</li>
      </ul>
      {/*список статично подгружать количество каждой категории */}
      <span className="folder-quantity">331товара</span>
      <figcaption
        className="absolute top-0 left-0 flex items-end justify-center pb-5 bg-[#16406a6b] h-full w-[47%]  -translate-x-full
                             group-hover:translate-x-0 transition-transform"
      >
        <button className="bg-[pink] rounded-md px-1 text-sm">
          Перейти в каталог
        </button>
      </figcaption>
    </Link>
  );
};

export default LargeFolder;
