import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/UI/navbar/navbar";
import { AppRouter } from "../components/app-router";
import { AuthContext } from "../context";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      setIsLoading(false)
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
