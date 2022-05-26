import React from 'react'
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { BsFillCartFill } from "react-icons/bs";
import {Carousel} from "react-bootstrap"


export default function Bootstraploja() {
  return (
    <div>
  <Container>
  <Row>
      
    <Col xs={{ order: 'last' }}><img
      className="col-md-4.service-box"
      width={300}
      src="https://static.netshoes.com.br/produtos/camisa-corinthians-pre-jogo-nike-masculina/28/2IC-4662-028/2IC-4662-028_zoom1.jpg?ts=1647543083&ims=420x"
      alt="Second slide"></img>
      <h4> <BsFillCartFill />   Camiseta masculina R$99,99</h4></Col>
    <Col xs={{order: 'second' }}><img
      className="col-md-4.service-box"
      width={300}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUYc6qxLxK5ZFWIRNiwxjzixSX2yeILkrGlr4CDOfmA-zi1a_Djd-RfY4pHGRnrLmZVU&usqp=CAU"
      alt="Second slide"></img>
        <h4><BsFillCartFill />    Blusa Corta-vento R$120,00</h4></Col>
    <Col xs={{ order: 'first' }}><img
      className="col-md-4.service-box"
      width={300}
      src="https://static3.tcdn.com.br/img/img_prod/311840/agasalho_trilobal_corinthians_feminino_40586_1_20201130180636.jpg"
      alt="Second slide"></img>
      <h4><BsFillCartFill />    Blusa Feminina R$120,00</h4></Col>
      <Col xs={{ order: 'last' }}><img
      className="col-md-4.service-box"
      width={300}
      src="https://cf.shopee.com.br/file/41d0cd4bfbda27b2ea0358618a66aa6d"
      alt="Second slide"></img>
      <h4><BsFillCartFill />     Conjunto moletom R$199,99</h4></Col>
      <Col xs={{ order: 'last' }}><img
      className="col-md-4.service-box"
      width={300}
      src="https://rogerstenis.vteximg.com.br/arquivos/ids/2724078-505-505/1000878343_1.jpg?v=637426897391870000"
      alt="Second slide"></img>
      <h4><BsFillCartFill />    Camiseta feminina R$99,99</h4></Col>
      <Col xs={{ order: 'last' }}><img
      className="col-md-4.service-box"
      width={300}
      src="https://images.lojanike.com.br/1024x1024/produto/camiseta-manga-curta-sccp-m-nk-brt-strk-CQ4710-010-1.jpg"
      alt="Second slide"></img>
      <h4><BsFillCartFill />    Regata treino R$129,99</h4></Col>
  </Row>
</Container>

    </div>
  )
}
