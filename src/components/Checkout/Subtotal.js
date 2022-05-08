import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../providers/StateProvider";
import { getBasketTotal } from "../../providers/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <Container>
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <Gift>
              <input type="checkbox" />
              This order contains a gift
            </Gift>
          </>
        )}
      />

      <button>Proceed to Checkout</button>
    </Container>
  );
}

export default Subtotal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 120px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
  font-weight: normal;
  font-size: 18px;

  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid #dddddd;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: black;
  }
`;

const Gift = styled.small`
  display: flex;
  align-items: center;

  input {
    margin-right: 5px;
  }
`;
