import React from "react";
import styled from "styled-components";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../providers/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <Container>
      <CheckoutLeft>
        <CheckoutAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></CheckoutAd>
        <CheckoutTitle />
        <h2>Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </CheckoutLeft>
      <CheckoutRight>
        <CheckoutSubtotal>
          <Subtotal />
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

const CheckoutRight = styled.div``;

const CheckoutSubtotal = styled.h2`
  margin-top: -10px;
`;
