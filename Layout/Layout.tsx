import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FC } from "react";
import { Open_Sans } from "@next/font/google";

const inter = Open_Sans({ subsets: ["cyrillic"] });
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={inter.className}>
      <Header/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
