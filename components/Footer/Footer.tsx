import Link from "next/link";
import { FC } from "react";
import Logo from "../Logo/Logo";
import {
  itemsByRole,
  itemsByType,
  itemsService,
  phoneNumbers,
} from "./items/items";

const Footer:FC = () => {
  return (
    <footer className="bg-[#f0f0f0] text-green">
      <div className="flex body-center justify-between py-7 flex-wrap sl:gap-3">
        <ul className="text-[#000] mr-1 sl:mb-10 flex flex-col items-start">
          <Logo/>
          <div className="mt-4">
            {phoneNumbers.map((i) => 
                <li key={i.place}>
                  <span className="font-semibold">{i.phoneNumber}</span> {i.place}
                </li>
            )}
          </div>
          <div className="mt-4 hover:shadow-md hover:shadow-green rounded-md px-3 py-1 hover:scale-110 transition-all">
            <a className="text-green" href="mailto:info@sterilno.com">info@sterilno.com</a>
          </div>
        </ul>
        <ul className="flex flex-col items-start mr-1">
          <h4 className="mb-4 font-medium text-lg text-[green]">Продукты по назначению</h4>
          {itemsByRole.map((i) => 
            <Link href={i.link} key={i.link}>
              <li className="text-sm mb-2 border-b border-[#ff000000] hover:border-green transition-all hover:text-[green]">
                {i.name}
              </li>
            </Link>
          )}
        </ul>
        <ul className="flex flex-col items-start mr-1">
          <h4 className="mb-4 font-medium text-lg text-[green]">Продукция по типу</h4>
          {itemsByType.map((i) => 
            <Link href={i.link} key={i.link}>
              <li className="text-sm mb-2 border-b border-[#ff000000] hover:border-green transition-all hover:text-[green]">
                {i.name}
              </li>
            </Link>
          )}
        </ul>
        <ul className="flex flex-col items-start">
          <h4 className="mb-4 font-medium text-lg text-[green]">Сервисы</h4>
          {itemsService.map((i) => 
            <Link href={i.link} key={i.link}>
              <li className="text-sm mb-2 border-b border-[#ff000000] hover:border-green transition-all hover:text-[green]">
                {i.name}
              </li>
            </Link>
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
