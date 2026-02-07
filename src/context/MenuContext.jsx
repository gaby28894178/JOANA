import { useState } from "react";
import { MenuContext } from "./menuCtx";

export function MenuProvider({ children }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <MenuContext.Provider value={{ open, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
