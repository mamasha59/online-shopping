import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface iPortal {
  children: ReactNode;
}

const Portal: FC<iPortal> = ({ children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portalOrderCall");
    setMounted(true);
  }, []);

  return (mounted && ref.current)
    ? createPortal(<div>{children}</div>, ref.current)
    : null;
};

export default Portal;
