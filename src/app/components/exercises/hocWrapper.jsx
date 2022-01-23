import React, { useState } from "react";
import CardWrapper from "../common/Card";

const HOCWrapper = (Component) => (props) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("user")).isAuth
  );
  const handleLogIn = () => {
    localStorage.setItem("user", JSON.stringify({ isAuth: true }));
    setAuth(JSON.parse(localStorage.getItem("user")).isAuth);
    console.log("Log In");
  };
  const handleLogOut = () => {
    localStorage.setItem("user", JSON.stringify({ isAuth: false }));
    setAuth(JSON.parse(localStorage.getItem("user")).isAuth);
    console.log("Log Out");
  };

  return (
    <CardWrapper>
      <Component
        {...props}
        isAuth={auth}
        onLogin={handleLogIn}
        onLogOut={handleLogOut}
      />
    </CardWrapper>
  );
};
export default HOCWrapper;
