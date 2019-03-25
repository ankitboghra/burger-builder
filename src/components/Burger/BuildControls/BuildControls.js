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
  </div>
);

export default buildControls;
