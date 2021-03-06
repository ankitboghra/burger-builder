import React from "react";
import "./BurgerIngredients.css";
// import PropTypes from "prop-types"

const burgerIngredients = props => {
  let ingredients = null;

  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className="BreadBottom" />;
      break;
    case "bread-top":
      ingredients = (
        <div className="BreadTop">
          <div className="Seeds1" />
          <div className="Seeds2" />
        </div>
      );
      break;
    case "meat":
      ingredients = <div className="Meat" />;
      break;
    case "cheese":
      ingredients = <div className="Cheese" />;
      break;
    case "salad":
      ingredients = <div className="Salad" />;
      break;
    case "bacon":
      ingredients = <div className="Bacon" />;
      break;
    default:
      ingredients = null;
  }

  return ingredients;
};

// const propTypes={
//     type:PropTypes.string.isRequired
// }

export default burgerIngredients;
