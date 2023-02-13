import Link from "next/link";
import { FC } from "react";

const SmallFolder: FC = () => {
  return (
    <Link
      href="/catalog"
      className="folder-container-style group grow-0 shrink flex-[278px]"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?w=2000")`,
      }}
    >
      <p className="text-3xl group-hover:-translate-y-8 group-hover:scale-110 group-hover:font-semibold transition-transform z-30 ">
        Хирургия
      </p>
      {/*список статично подгружать данные */}
      <ul className="flex absolute left-2 top-8 text-xs px-[0.5] flex-wrap gap-2 max-w-[260px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
        className="absolute left-0 bottom-0 flex items-end justify-center pb-5 bg-[#16406a6b] h-[40%] w-full translate-y-full
                             group-hover:translate-y-0 transition-transform"
      ></figcaption>
    </Link>
  );
};

export default SmallFolder;
