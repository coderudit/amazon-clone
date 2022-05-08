import React from "react";
import styled from "styled-components";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <Container>
      <CheckoutLeft>
        <CheckoutAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></CheckoutAd>
        <CheckoutTitle>
          <h2>Your Shopping Basket</h2>
          <BasketItem></BasketItem>
        </CheckoutTitle>
      </CheckoutLeft>
      <CheckoutRight>
        <CheckoutSubtotal>
          <Subtotal></Subtotal>
        </CheckoutSubtotal>
      </CheckoutRight>
    </Container>
  );
}

export default Checkout;

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;

const CheckoutLeft = styled.div``;

const CheckoutAd = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const CheckoutTitle = styled.div`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const BasketItem = styled.div``;

const CheckoutRight = styled.div``;

const CheckoutSubtotal = styled.h2``;
