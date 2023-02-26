import { useAppDispatch } from "@/store/hooks/hooks";
import { setTitleofCategory } from "@/store/slicers/cartSlicer";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import { itemCatalog } from "./menu-catalog-items/menu-catalog-items";
import gsap from "gsap";

const MenuCatalog: FC<any> = ({open}) => {

  const route = useRouter(); // определение адресса
  const dispatch = useAppDispatch();

  const menu = useRef<HTMLElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    if(tl){
      tl.current = gsap.timeline({
        paused:true
      })
      tl.current.to(menu.current, {x:'-100%', opacity:0, visibility: 'hidden', display:'none', duration:0.3})
    }

  },[]);

  useEffect(() => {
    if(tl.current){
      open ? tl.current.play() : tl.current.reverse()
    }
  },[open])

  return (
    <aside ref={menu}>
      <div className="overflow-y-auto flex flex-col gap-y-2 text-green uppercase scroll-bar-styles w-[280px] h-[100vh]">
        {itemCatalog.map((i) => (
          <Link
            key={`/catalog/${i.link}`}
            href={i.link}
            onClick={() => dispatch(setTitleofCategory(i.name))}
          >
            <p
              className={`border border-[#8080804f] hover:bg-[#8080804f] hover:font-medium p-2 transition-all
                        ${route.asPath === i.link && "bg-[#8080804f]"}`}
            >
              {i.name}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default MenuCatalog;
