import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);
    
    // প্রাথমিক মান সেট করার জন্য
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // ক্লিনআপ ফাংশন
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}