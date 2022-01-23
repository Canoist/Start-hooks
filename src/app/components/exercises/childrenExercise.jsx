import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ParentComponent = ({ children }) => {
  return React.Children.map(children, (child, index) => {
    const config = {
      ...child.props,
      order: index + 1
    };
    return React.cloneElement(child, config);
  });
};

ParentComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>
      <ParentComponent>
        <Component />
        <Component />
        <Component />
      </ParentComponent>
    </CollapseWrapper>
  );
};

const Component = ({ order }) => {
  return <div> {order ? order + "." : null} Компонент списка</div>;
};
Component.propTypes = {
  order: PropTypes.number
};

export default ChildrenExercise;
