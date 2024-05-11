import { createContext, useEffect, useState, ReactNode } from "react";

export const AppContext = createContext({
  isLoaded: false,
});

interface AppContextProp {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProp) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // when the page loads
    document.addEventListener("DOMContentLoaded", () => {
      setIsLoaded(true);
    });

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("DOMContentLoaded", () => {
        setIsLoaded(true);
      });
    };
  }, []);

  return (
    <AppContext.Provider value={{ isLoaded }}>{children}</AppContext.Provider>
  );
};
