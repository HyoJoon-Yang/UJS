import React from "react";
import Carousel from "react-bootstrap/Carousel";

const TextShadow = {
  textShadow: "2px 2px 2px black",
};

export default function Carousels({ id }: any) {
  return (
    <Carousel id="main_carousels">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="img/carousel1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 style={TextShadow}>
            <b>실력에서 오는 자신감</b>
          </h4>
          <p style={TextShadow}>UJS에서 당신의 실력 향상을 도와줄 것입니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="img/carousel2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4 style={TextShadow}>
            <b>정확한 자세 분석</b>
          </h4>
          <p style={TextShadow}>
            검증된 데이터만을 학습한 모델이 당신의 자세를 분석합니다.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="img/carousel3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4 style={TextShadow}>
            <b>UJS만의 랭킹제</b>
          </h4>
          <p style={TextShadow}>골프 연습에 재미를 더합니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
