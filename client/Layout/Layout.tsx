import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FC } from "react";
import { Comfortaa } from "@next/font/google";

const inter = Comfortaa({ subsets: ["cyrillic"]});
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
    // компонент общей обертки - футер и хедер
  return (
    <div className={inter.className}>
      <Header/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
