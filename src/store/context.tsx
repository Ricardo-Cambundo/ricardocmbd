import { createContext, useEffect, useRef, useState } from "react";

  //@ts-ignore

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }: { children: any }) => {
  const scrolledRef = useRef<boolean>(false);
  //@ts-ignore
  const [scrolled, setScrolled] = useState(false); // Add this state
  const [dark, setDark] = useState(false);
  // const [chatExpand, setChatExpand] = useState(false)

  // useEffect(() => {
  //   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   setDark(prefersDarkScheme);

  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handleChange = (e) => setDark(e.matches);
  //   mediaQuery.addEventListener('change', handleChange);

  //   return () => mediaQuery.removeEventListener('change', handleChange);
  // }, []);
  
  useEffect(() => {
    const themeColor = dark ? '#030712' : '#fff';
    const metaTag = document.querySelector('meta[name="theme-color"]');
    
    if (metaTag) {
      metaTag.setAttribute('content', themeColor);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = themeColor;
      document.head.appendChild(meta);
    }
    
    
  }, [dark]);
  

  // useEffect(() => {

  //   // const handleScroll = () => {
  //   //   const isScrolled = window.scrollY > 50;
  //   //   if (scrolledRef.current !== isScrolled) {
  //   //     // Only update if changed
  //   //     scrolledRef.current = isScrolled;
  //   //     setScrolled(isScrolled); // Triggers re-render
  //   //   }
  //   // };

  //   // window.addEventListener("scroll", handleScroll, { passive: true });
  //   // handleScroll();

  //   // return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrolled: scrolled,
        scrolledRef: scrolledRef,
        dark,
        setDark,
        // chat,
        // setChat,
        // chatExpand,
        // setChatExpand
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
