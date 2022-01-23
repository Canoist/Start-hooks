import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const handleClickWidth = () => {
    inputRef.current.style.width = "100px";
  };

  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor="email" className="form-label">
        E-mail
      </label>
      <input ref={inputRef} type="email" className="form-control" id="email" />
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Input focus
      </button>
      <button className="btn btn-primary mx-2 mt-2" onClick={handleClickWidth}>
        Change Width
      </button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;
