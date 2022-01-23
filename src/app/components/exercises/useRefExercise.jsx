import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
  const blockRef = useRef("Блок");
  const handleClick = () => {
    blockRef.current.textContent = "text";
  };
  const handleClickWidth = () => {
    blockRef.current.style.width = "80px";
    blockRef.current.style.height = "150px";
  };
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содержимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        ref={blockRef}
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        style={{
          height: 40,
          width: 60,
          color: "white"
        }}
      >
        <small>{blockRef.current}</small>
      </div>
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Change text
      </button>
      <button className="btn btn-primary mx-2 mt-2" onClick={handleClickWidth}>
        Change Width
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
