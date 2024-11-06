import { useState, useEffect } from "react";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100); // Debounce delay in ms
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
