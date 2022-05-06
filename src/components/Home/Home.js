import React from "react";
import styled from "styled-components";
import Product from "./Product";
import BannerSlider from "./BannerSlider";

function Home() {
  return (
    <Container>
      <Wrap>
        <BannerSlider></BannerSlider>
        <ProductsRow>
          <Product
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
            rating={3}
          ></Product>
          <Product
            title="Computer Science Distilled: Learn the Art of Solving Computational Problems"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41con8efdlL._SX322_BO1,204,203,200_.jpg"
            rating={2}
          ></Product>
        </ProductsRow>
        <ProductsRow>
          <Product
            title="The Hidden Language of Computer Hardware and Software"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31RLovAad7L._SX339_BO1,204,203,200_.jpg"
            rating={1}
          ></Product>
          <Product
            title="Clean Code: A Handbook of Agile Software Craftsmanship"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
            rating={4}
          ></Product>
          <Product
            title="The Pragmatic Programmer: your journey to mastery, 20th Anniversary Edition"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg"
            rating={3}
          ></Product>
        </ProductsRow>
        <ProductsRow>
          <Product
            title="Clean Architecture: A Craftsman's Guide to Software Structure and Design"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX381_BO1,204,203,200_.jpg"
            rating={5}
          ></Product>
          <Product
            title="Mastering Blockchain: Unlocking the Power of Cryptocurrencies, Smart Contracts, and Decentralized Applications"
            price={61.99}
            image="https://images-na.ssl-images-amazon.com/images/I/410CMdzrHDL._SX379_BO1,204,203,200_.jpg"
            rating={5}
          ></Product>
          <Product
            title="Mastering Ethereum: Building Smart Contracts and DApp"
            price={64.02}
            image="https://images-na.ssl-images-amazon.com/images/I/51X3VeaAZnL._SX379_BO1,204,203,200_.jpg"
            rating={5}
          ></Product>
        </ProductsRow>
      </Wrap>
    </Container>
  );
}

export default Home;

const Container = styled.div``;

const Wrap = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  max-width: 1500px;
`;

const ProductsRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
