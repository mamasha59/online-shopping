import { FC } from "react";

type iInfoLayout = {
    children: React.ReactNode;
  };

const InfoLayout:FC<iInfoLayout> = ({children}) => {
  return (
    <section className="body-center border border-dashed ">
        {children}
    </section>
  )
};

export default InfoLayout;
