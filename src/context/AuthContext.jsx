import { createContext, useContext, useEffect, useState } from "react";
import { authAPI } from "../services.js/auth";
import { CommonAPI, fetchAPI } from "../services.js/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const loadUser = async () => {

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await CommonAPI("user");
        setUser(res.data);
      } catch (e) {

        localStorage.removeItem("token");

        setToken(null);

        setUser(null);

      } finally {

        setLoading(false);

      }

    };

    loadUser();

  }, [token]);

  const login = async (formData) => {
    try {

      const apiData = await authAPI(formData, "login");

      localStorage.setItem("token", apiData.data.access_token);

      setToken(apiData.data.access_token);

      setUser(apiData.data.user);

      return apiData;

    } catch (e) {

      setError(e.message);

      throw e;

    }
  };

  const logout = async () => {

    try {

      await fetchAPI("logout");

    } catch (e) {

      console.log(e);

    } finally {

      localStorage.removeItem("token");
      setToken(null);
      setUser(null);

    }

  };


  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
