import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../providers/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //console.log("Inside add to basket", basket);
  //dispatch the item into data layer
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });
  };
  return (
    <Container>
      <ProductInfo>
        <Title>{title}</Title>
        <Price>
          <small>$</small>
          <strong>{price}</strong>
        </Price>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </ProductRating>
      </ProductInfo>
      <ProductImage src={image} />
      <ProductButton onClick={addToBasket}>Add to basket</ProductButton>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
`;

const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
`;

const Title = styled.p`
  margin-bottom: -10px;
`;

const Price = styled.p`
  margin-bottom: -10px;
`;

const ProductRating = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;
const ProductButton = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: black;
  cursor: pointer;
`;
