import { createContext, useContext, useEffect, useState } from "react";
import { authAPI } from "../services.js/auth";
import { fetchAPI } from "../services.js/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(false)
  }, [])

  const login = async (formData) => {
    const apiData = await authAPI(formData, 'login');
    localStorage.setItem("token", apiData.data.access_token);
    setToken(apiData.data.access_token);
    setUser(apiData.data.user);
    return apiData;
  }

  const logout = async () => {
    try {
      await fetchAPI('logout');
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
    } catch (e) {
      setError(e);
    }

  };


  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading ,error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
