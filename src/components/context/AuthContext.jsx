// 'use client';
// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (email) => {
//     setUser({ email });
//   };

//   const signup = (name, email) => {
//     setUser({ name, email });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Add localStorage persistence
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signup = async (name, email) => {
    return new Promise((resolve) => {
      const newUser = { name, email };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      resolve();
    });
  };

  const login = async (email) => {
    return new Promise((resolve) => {
      const user = { email };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      resolve();
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
