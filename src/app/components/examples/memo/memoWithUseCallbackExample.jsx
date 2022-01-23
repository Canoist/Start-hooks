import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log("render buttton");
  });
  return (
    <button className="btn btn-primary mx-2" onClick={onLogOut}>
      LogOut
    </button>
  );
};
LogOutButton.propTypes = {
  onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) {
    return false;
  }
  return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("auth");
  }, [props]);
  return (
    <>
      <button className="btn btn-primary" onClick={() => setState(!state)}>
        Initiate Render
      </button>

      <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
  );
};

export default MemoWithUseCallbackExample;
