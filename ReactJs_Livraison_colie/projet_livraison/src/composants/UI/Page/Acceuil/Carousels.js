import React from "react";
import { Carousel, Image } from "react-bootstrap";
import slide3 from "../../../../assets/img/07.png";

export default function Carousels() {
  return (
    <>
      <div className="mt-2">
        <section className="slider container mb-3">
          <Carousel>
            <Carousel.Item className="slide" interval={1000}>
              <img className=" w-100" src={slide3} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide" interval={1000}>
              <img className=" w-100" src={slide3} alt="second slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide" interval={1000}>
              <img className=" w-100" src={slide3} alt="third slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </>
  );
}
