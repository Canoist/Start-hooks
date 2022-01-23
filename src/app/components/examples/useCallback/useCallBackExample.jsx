import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallback = useRef(0);
  const withCallback = useRef(0);
  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  // Without Callback
  const validateWithOutCallback = (data) => {
    console.log(data);
  };
  useEffect(() => {
    withOutCallback.current++;
  }, [validateWithOutCallback]);

  // With Callback
  const validateWithCallback = useCallback((data) => {
    console.log(data);
  }, []);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithOutCallback(data);
    validateWithCallback(data);
  }, [data, validateWithOutCallback]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render without callback: {withOutCallback.current}</p>
      <p>Render with callback: {withCallback.current}</p>
      <label htmlFor="email" className="form-label">
        E-mail
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        value={data.email || ""}
        name="email"
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
