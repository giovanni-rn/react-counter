import React, { useState } from "react";
import "../styles/counter.css";

const Counter = () => {
  // nb au compteur
  const [count, setCount] = useState(0);
  // pas de combien on modifie
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* nb au compteur */}
      <div className="count">{count}</div>
      {/* Contrôle */}
      <div className="buttons">
        <button
          className="button minus"
          onClick={() => {
            setCount(count - parseInt(step));
          }}
        >
          -
        </button>
        <button
          className="button plus"
          onClick={() => {
            setCount(count + parseInt(step));
          }}
        >
          +
        </button>
      </div>
      {/* Formulaire pour changer le pas */}
      <form className="step">
        <input
          type="number"
          onChange={(e) => {
            //   console.log(e);
            setStep(e.target.value);
          }}
          value={step}
        />
      </form>
    </div>
  );
};

export default Counter;
