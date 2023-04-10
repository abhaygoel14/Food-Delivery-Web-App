import { useState, useEffect } from "react";

const useIsLargeView = (breakpoint) => {
  const [isLargeView, setIsLargeView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeView(window.innerWidth >= breakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isLargeView;
};

export default useIsLargeView;
