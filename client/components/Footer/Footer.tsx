import Link from "next/link";
import { FC } from "react";
import Logo from "../Logo/Logo";
import {
  itemsByRole,
  itemsByType,
  itemsService,
  phoneNumbers,
} from "./items/items";

const Footer: FC = () => {
  return (
    <footer className="bg-[#f0f0f0] text-green">
      <div className="flex body-center justify-between py-7 flex-wrap sl:gap-3">
        <div className="text-[#000] mr-1 sl:mb-10 flex flex-col items-start">
          <Logo />
          <ul className="mt-4">
            {phoneNumbers.map((i) => (
              <li
                key={i.place}
                title={`${i.place} - ${i.phoneNumber}`}
                aria-label={`${i.place} - ${i.phoneNumber}`}
              >
                <span className="font-semibold">{i.phoneNumber}</span> {i.place}
              </li>
            ))}
          </ul>
          <a
            title="info@sterilno.com"
            aria-label="Написать на почту info@sterilno.com"
            className="text-green mt-4 hover:shadow-md hover:shadow-green rounded-md px-3 py-1 hover:scale-110 transition-all"
            href="mailto:info@sterilno.com"
          >
            info@sterilno.com
          </a>
        </div>
        <ul className="flex flex-col items-start mr-1">
          <p className="mb-4 font-medium text-lg text-[green]">Продукты по назначению</p>
          {itemsByRole.map((i) => (
            <Link href={i.link} key={i.link}>
              <li title={i.name} aria-label={i.name} className="text-sm mb-2 border-b border-[#ff000000] hover:border-green transition-all hover:text-[green]">
                {i.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col items-start mr-1">
          <p className="mb-4 font-medium text-lg text-[green]">Продукция по типу</p>
          {itemsByType.map((i) => (
            <Link href={i.link} key={i.link}>
              <li title={i.name} aria-label={i.name} className="text-sm mb-2 border-b border-[#ff000000] hover:border-green transition-all hover:text-[green]">
                {i.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col items-start">
          <p className="mb-4 font-medium text-lg text-[green]">Сервисы</p>
          {itemsService.map((i) => (
            <Link href={i.link} key={i.link}>
              <li title={i.name} aria-label={i.name} className="text-sm mb-2 border-b border-[#ff000000] hover:border-green transition-all hover:text-[green]">
                {i.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
