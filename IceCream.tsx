import React from "react";

interface IceCreamProps {
  type: number;
}

const IceCream: React.FC<IceCreamProps> = ({ type }) => {
  let flavor = "";

  switch (type) {
    case 1:
      flavor = "Vanilla";
      break;
    case 2:
      flavor = "Chocolate";
      break;
    case 3:
      flavor = "Strawberry";
      break;
    default:
      flavor = "Unknown";
  }

  return (
    <div>
      <h2>Ice Cream Flavor:</h2>
      <p>{flavor}</p>
    </div>
  );
};

export default IceCream;
