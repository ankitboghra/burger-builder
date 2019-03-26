import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>Rs. {props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map(control => {
      return (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabledButtons[control.type]}
        />
      );
    })}
    <button
      className="OrderButton"
      disabled={!props.order}
      onClick={props.order}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
