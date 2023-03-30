import { FC } from "react";

import Menu from "./Menu/Menu";
import MenuInfo from "./Menu/MenuInfo";
import Search from "./Search/Search";

const Header: FC = () => {
  return (
    <header className="text-[green] body-center p-0">
      <Menu />
      <MenuInfo />
      <Search />
    </header>
  );
};

export default Header;