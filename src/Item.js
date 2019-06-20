import styled from "styled-components";

const Item = {};

Item.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

Item.ButtonBase = styled.button`
  text-align: center;
`;

Item.AddButton = styled(Item.ButtonBase)`
  background-color: green;
`;

Item.InfoButton = styled(Item.ButtonBase)`
  background-color: red;
`;

export default Item;
