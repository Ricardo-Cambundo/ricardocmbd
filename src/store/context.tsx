import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }: { children: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false)
  const [chat, setChat] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrolled, dark, setDark, chat, setChat }}>
      {children}
    </ScrollContext.Provider>
  );

};
