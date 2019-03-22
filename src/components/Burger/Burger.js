import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      // console.log("OuterMap: " + ingKey + [...Array(props.ingredients[ingKey])]);
      return [...Array(props.ingredients[ingKey])].map((_, index) => {
        // console.log("InnerMap: " + index);
        return <BurgerIngredient key={ingKey + index} type={ingKey} />;
      });
    });
    console.log(transformedIngredients)
    // .reduce((arr, ele) => {
    //   return arr.concat(ele);
    // }, []);

  if (transformedIngredients.length === 0)
    transformedIngredients = <p>Please start adding ingredients!</p>;

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
