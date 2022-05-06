import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";

function BannerSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="https://m.media-amazon.com/images/I/6151Qbfc-QL._SX3000_.jpg" />
      </Wrap>
      <Wrap>
        <img src="https://m.media-amazon.com/images/I/719x9f+7Z0L._SX3000_.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default BannerSlider;

const Carousel = styled(Slider)`
  /*ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }*/

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }

  img {
    width: 100%;
    margin-bottom: -150px;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.9)
    );
    height: 100%;
    transition-duration: 300ms;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
`;
