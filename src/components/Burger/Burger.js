import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, index) => {
      return <BurgerIngredient key={ingKey + index} type={ingKey} />;
    });
  });

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
