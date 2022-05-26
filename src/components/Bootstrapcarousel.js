import React from 'react'
import {Carousel} from "react-bootstrap"

export default function Bootstrapcarousel() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100 " 
      src="https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/roger-guedes-corinthians-avai.jpg?9grBL88BdqpRz1QxsXOFOqDxMpSF6PDT"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className='slide1'>Corinthians vence Avai com 3 gols marcados por Roger Guedes</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s2.glbimg.com/7nLC-0OQ8Rxo8XciiO87gH1FEow=/0x0:2000x1389/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/P/1/AR4qwlSE2cIkeTBQibfg/agenciacorinthians-foto-190191.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className='slide2'>Zagueiro Robert Renan fará estreia pelo Corinthians em jogo de time misto na Copa do Brasil</h2>      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.meutimao.com.br/fotos-do-corinthians/w941/2019/04/23/as_meninas_do_corinthians_futebol_feminino_r.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className='slide3'>Com três gols em 16 minutos, Corinthians bate Real Brasília e vira vice-líder do Brasileirão Feminino</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
