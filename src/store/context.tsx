import { createContext, useEffect, useRef, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }: { children: any }) => {
  const scrolledRef = useRef<boolean>(false);
  const [scrolled, setScrolled] = useState(false); // Add this state
  const [dark, setDark] = useState(false);
  const [chat, setChat] = useState(true);

  useEffect(() => {

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (scrolledRef.current !== isScrolled) {
        // Only update if changed
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled); // Triggers re-render
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrolled: scrolled,
        scrolledRef: scrolledRef,
        dark,
        setDark,
        chat,
        setChat,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
