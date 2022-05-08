import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../providers/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <Container>
      <ProductImage src={image}></ProductImage>
      <ProductInfo>
        <Title>{title}</Title>
        <Price>
          <small>$</small>
          <strong>{price}</strong>
        </Price>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </Rating>
        <RemoveButton onClick={RemoveFromBasket}>
          Remove from basket
        </RemoveButton>
      </ProductInfo>
    </Container>
  );
}

export default CheckoutProduct;

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

const ProductInfo = styled.div`
  padding-left: 20px;

  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #864a29;
    color: #111;
  }
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 800;
`;

const Price = styled.div`
  margin-top: -10px;
`;

const Rating = styled.div`
  display: flex;
`;

const RemoveButton = styled.button``;
