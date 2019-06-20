import Item from "./Item";
import React from "react";

const ItemComponent = props => {
  const { type } = props;
  const renderedButton = type => {
    switch (type) {
      case "info": {
        return <Item.AddButton>Add</Item.AddButton>;
      }
      case "basket": {
        return <Item.InfoButton>Info</Item.InfoButton>;
      }
      default: {
        return (
          <div>
            <Item.AddButton>Add</Item.AddButton>
            <Item.InfoButton>Info</Item.InfoButton>
          </div>
        );
      }
    }
  };
  const element = renderedButton(type);
  return <Item.Wrapper>{element}</Item.Wrapper>;
};

export default ItemComponent;
