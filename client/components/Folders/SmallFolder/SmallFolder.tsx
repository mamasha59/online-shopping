import { useAppDispatch } from "@/store/hooks/hooks";
import { setTitleofCategory } from "@/store/slicers/cartSlicer";
import Link from "next/link";
import { FC } from "react";

interface iFolder {
  name: string;
  linkTo: string;
}

const SmallFolder: FC<iFolder> = ({ name, linkTo }) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      title={name}
      aria-label={name}
      href={`/catalog/${linkTo}`}
      onClick={() => dispatch(setTitleofCategory(name))}
      className="text-[#ffffff] relative h-[150px] overflow-hidden flex items-end p-5 justify-between cursor-pointer transition-transform border-[#4b29294b] border rounded-[40px]
      bg-cover bg-no-repeat bg-center bg-fixed before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-overlay group"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?w=2000")`,
      }}
    >
      <p className="text-xl group-hover:-translate-y-2 group-hover:scale-110 group-hover:font-semibold transition-transform z-30 underline">
        {name}
      </p>
      <span
        className="absolute left-0 bottom-0 flex items-end justify-center pb-5 bg-[#0a1d306b] h-[100%] w-full translate-y-full
                  group-hover:translate-y-0 transition-transform"
      ></span>
    </Link>
  );
};

export default SmallFolder;
