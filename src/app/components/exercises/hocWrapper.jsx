import React, { useEffect } from "react";
import CardWrapper from "../common/Card";

const HOCWrapper = (Component) => (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogIn = () => {
    localStorage.setItem("user", JSON.stringify({ isAuth: true }));
    console.log(isAuth);
  };
  const handleLogOut = () => {
    localStorage.setItem("user", JSON.stringify({ isAuth: false }));
    console.log(isAuth);
  };
  const isAuth = useEffect(() => {
    return user.isAuth;
  }, [handleLogIn, handleLogOut]);

  return (
    <CardWrapper>
      <Component
        {...props}
        isAuth={isAuth}
        onLogin={handleLogIn}
        onLogOut={handleLogOut}
      />
    </CardWrapper>
  );
};
export default HOCWrapper;
