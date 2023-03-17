import { RefObject, useEffect, useState } from "react";

interface iClosePopup{
    popup: RefObject<HTMLElement>,
}

function useClosePopupOut({popup}:iClosePopup) {
// кастомный хук для закрытия попапа по клику снаружи
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        // закрытие попапа по клику снаружи
        if(popup){
        const closePopup = (e: Event) => {
          if (!popup.current?.contains(e.target as Element)) setOpen(false);
        };
        window.addEventListener("click", closePopup);
        return () => window.removeEventListener("click", closePopup);
        }
       
      }, [popup]);

      return [ open, setOpen ] as const;
      
  
};

export default useClosePopupOut;
