import React from 'react'
import {Carousel} from "react-bootstrap"

export default function Bootstrapcarousel() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100 " 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7Wa9CP2p3HZDgtMgTrB97mcgVeTNtsCjnA&usqp=CAU"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://a-static.mlcdn.com.br/618x463/luminaria-de-acrilico-corinthians-s-c-c-p-elood/elood/11581834420/178f309483f0cd21adde647ffc3512a7.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://a-static.mlcdn.com.br/618x463/luminaria-de-acrilico-corinthians-s-c-c-p-elood/elood/11581834420/178f309483f0cd21adde647ffc3512a7.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
