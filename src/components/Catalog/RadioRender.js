import React from "react";

const RadioRender = ({ manufactures, handleOptionChange, checked }) => {
  return manufactures.map(manufacture => (
    <div key={manufacture}>
      <input
        key={manufacture}
        type="radio"
        name="manufacturere"
        value={manufacture}
        checked={checked === manufacture}
        onChange={handleOptionChange}
      />
      <label htmlFor={manufacture}>{manufacture}</label>
    </div>
  ));
};

export default RadioRender;
