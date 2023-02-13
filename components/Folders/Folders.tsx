import { FC } from "react";
import LargeFolder from "./LargeFolder/LargeFolder";
import SmallFolder from "./SmallFolder/SmallFolder";

const Folders: FC = () => {
  return (
    <section className="body-center shadow-md rounded-sm flex py-4 gap-[14px] flex-wrap my-5">
      <LargeFolder/>
      <LargeFolder/>
      <LargeFolder/>
      <SmallFolder/>
      <SmallFolder/>
      <SmallFolder/>
    </section>
  );
};

export default Folders;
