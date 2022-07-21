import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
  return (
    <div>
      <Carousel fade style={{ }}>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/06/25/3023625676.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/07/06/2321098187.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "25em",
            }}
            className="d-block w-100"
            src="https://cinemags.co.id/wp-content/uploads/2022/05/jurassic-world-dominion.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
