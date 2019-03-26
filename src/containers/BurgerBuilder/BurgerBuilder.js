import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
  salad: 25,
  cheese: 20,
  meat: 30.5,
  bacon: 40.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 30,
    purchasable: false,
    isPurchasing: false
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((sum, qty) => {
        return sum + qty;
      });

    if (sum > 0) this.setState({ purchasable: true });
    else this.setState({ purchasable: false });
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
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredietHandler = type => {
    const updatedCount = this.state.ingredients[type] - 1;
    if (updatedCount < 0) return;

    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  isPurchasingHandler = () => {
    this.setState({ isPurchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ isPurchasing: false });
  };

  purchaseContinuedHandler = () => {
    alert("Cool, the order is being processed!!");
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let ingrident in disabledInfo) {
      disabledInfo[ingrident] = disabledInfo[ingrident] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.isPurchasing}
          modalClicked={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinuedHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredietHandler}
          ingredientRemoved={this.removeIngredietHandler}
          disabledButtons={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.isPurchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
