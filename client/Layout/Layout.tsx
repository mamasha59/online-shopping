import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FC } from "react";
import { Comfortaa } from "@next/font/google";

const inter = Comfortaa({ display: 'swap', fallback: ['system-ui', 'arial'], subsets: ["cyrillic"], style: ["normal"] });

type iLayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<iLayoutProps> = ({ children}) => {
  // компонент общей обертки - футер и хедер

  return (
    <>
      <div className={inter.className}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
