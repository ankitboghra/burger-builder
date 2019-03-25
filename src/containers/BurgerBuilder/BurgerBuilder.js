import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 25,
  cheese: 20,
  meat: 30,
  bacon: 40
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 30
  };

  addIngredietHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  removeIngredietHandler = type => {
    const updatedCount = this.state.ingredients[type] - 1;
    if (updatedCount < 0) return;

    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let ingrident in disabledInfo) {
      disabledInfo[ingrident] = disabledInfo[ingrident] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredietHandler}
          ingredientRemoved={this.removeIngredietHandler}
          disabledButtons={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
