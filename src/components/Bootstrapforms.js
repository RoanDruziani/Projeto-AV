import React, { useState } from 'react'
import { Form } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import Bootstrapbutton from './Bootstrapbutton'



export default function () {

  const [cep, setCep ] = useState()
  const [rua, setRua ] = useState()
  const [cidade, setCidade ] = useState()
  const [estado, setEstado ] = useState()

  const preencherFormulario = (endereco) => {
    document.getElementById('formGridCity').value = endereco.localidade
    document.getElementById('formGridState').value = endereco.uf
    document.getElementById('formGridAddress1').value = endereco.logradouro
  }
  
  
  
  const pesquisarCep = async () => {
    try {
  
      console.log(cep);
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const dados = await fetch(url);
      const endereco = await dados.json();
      preencherFormulario(endereco);
  
    } catch (error) {
  
      alert("Ocorreu um erro inesperado, tente novamente");
  
    }
  
  }
  
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
<<<<<<< Updated upstream
            <Form.Control type="email" placeholder="Enter email"  />
=======
            <Form.Control type="email" placeholder="Email" />
>>>>>>> Stashed changes
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
<<<<<<< Updated upstream
          <Form.Label>Rua</Form.Label>
          <Form.Control placeholder="1234 Main St" onChange={(e) => setRua(e.target.value)} />
=======
          <Form.Label>Endereço</Form.Label>
          <Form.Control placeholder="Endereço" />
>>>>>>> Stashed changes
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Complemento</Form.Label>
          <Form.Control placeholder="Casa, Apartamento..." />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control onChange={(e) => setCidade(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Control placeholder="" onChange={(e) => setEstado(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control onBlur={pesquisarCep} onChange={(e) => setCep(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check className='mb-35' type="checkbox" label="lembre-se de min" />
        </Form.Group>
      </Form>
      <Bootstrapbutton  type = "submit"/>
    </div>
  )
}