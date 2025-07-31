import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const loginTimestamp = localStorage.getItem("loginTimestamp");

    if (storedAuth === "true" && loginTimestamp) {
      const timeElapsed = Date.now() - parseInt(loginTimestamp);
      const thirtyMinutes = 30 * 60 * 1000;

      if (timeElapsed < thirtyMinutes) {
        setIsAuthenticated(true);
        const remainingTime = thirtyMinutes - timeElapsed;
        const timeout = setTimeout(() => {
          setIsAuthenticated(false);
          localStorage.removeItem("isAuthenticated");
          localStorage.removeItem("loginTimestamp");
        }, remainingTime);

        return () => clearTimeout(timeout);
      } else {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("loginTimestamp");
        setIsAuthenticated(false);
      }
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("loginTimestamp", Date.now().toString());
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loginTimestamp");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
