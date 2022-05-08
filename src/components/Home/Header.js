import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../providers/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <Container>
      <Link to="/">
        <HeaderLogo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></HeaderLogo>
      </Link>
      <HeaderSearch>
        <HeaderSearchInput />
        <HeaderSearchIcon />
      </HeaderSearch>
      <HeaderNav>
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Sign In</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Return</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Your</OptionLineOne>
          <OptionLineTwo>Prime</OptionLineTwo>
        </HeaderOption>
        <Link to="/checkout">
          <HeaderOptionBasket>
            <HeaderBasketIcon />
            <HeaderBasketCount>{basket?.length}</HeaderBasketCount>
          </HeaderOptionBasket>
        </Link>
      </HeaderNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

const HeaderSearchInput = styled.input.attrs({ type: "text" })`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 4px;
`;

const HeaderSearchIcon = styled(SearchIcon)`
  padding: 5px;
  height: 22px;
  background-color: #cd9042;
  border-radius: 0px 4px 4px 4px;

  margin-left: -32px;
`;

const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;

const OptionLineOne = styled.span`
  font-size: 10px;
`;

const OptionLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

const HeaderOptionBasket = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

const HeaderBasketIcon = styled(ShoppingCartIcon)``;

const HeaderBasketCount = styled(OptionLineTwo)`
  margin: 0 10px;
`;
