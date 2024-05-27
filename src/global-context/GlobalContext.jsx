import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [count, setCount] = useState(0);
  const [numberOfProd, setNumberOfProd] = useState(0);
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);

  const openDropdownMenu = () => {
    setDropdown(!dropdown);
    console.log("openDropdownMenu");
  };

  const handleChange = () => {
    console.log("log");
    setNumberOfProd(count);
  };

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const res = await fetch("/api/sneakers");
        const data = await res.json();
        setSneakers(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSneakers();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        sneakers,
        loading,
        setLoading,
        dropdown,
        setDropdown,
        openDropdownMenu,
        count,
        setCount,
        handleChange,
        numberOfProd,
        setNumberOfProd,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
