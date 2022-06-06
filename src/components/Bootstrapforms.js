import React, { useEffect, useState } from 'react'
import { Form } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import Bootstrapbutton from './Bootstrapbutton'
import AtividadeLista from './AtividadesLista'

export default function () {

  const [cep, setCep] = useState()
  const [rua, setRua] = useState()
  const [cidade, setCidade] = useState()
  const [estado, setEstado] = useState()
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState(null);

  const preencherFormulario = (endereco) => {
    document.getElementById('formGridCity').value = endereco.localidade
    document.getElementById('formGridState').value = endereco.uf
    document.getElementById('formGridAddress1').value = endereco.logradouro
  }

  async function getPersons() {
    try {

      const url = 'http://localhost:3000/person';
      const dados = await fetch(url);
      const resposta = await dados.json();
      setAtividades(resposta)


    } catch (error) {

      alert("Ocorreu um erro inesperado, tente novamente");

    }
  }

  useEffect(() => {
    getPersons()
  }, [])


  const enviar = async () => {

    const cidade = document.getElementById('formGridCity').value
    const estado = document.getElementById('formGridState').value
    const rua = document.getElementById('formGridAddress1').value
    const email = document.getElementById('formGridEmail').value
    const password = document.getElementById('formGridPassword').value
    const name = document.getElementById('formGridAddress2').value

    const formularioJson = JSON.stringify({
      cidade: cidade,
      estado: estado,
      rua: rua,
      email: email,
      password: password,
      name: name
    })

    if (atividade !== null) {

      const url = 'http://localhost:3000/person/' + atividade._id;
      await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: formularioJson
      });
      setAtividade(null)
      getPersons()
    } else {
      try {

        const url = 'http://localhost:3000/person';
        const dados = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: formularioJson
        });

        getPersons()

      } catch (error) {

        alert("Ocorreu um erro inesperado, tente novamente");

      }
    }
  }

  const cancelar = () => {



  }


  async function deletarAtividade(id) {
    try {

      const url = 'http://localhost:3000/person/' + id;
      await fetch(url, {
        method: "DELETE"
      });


      getPersons()

    } catch (error) {

      alert("Ocorreu um erro inesperado, tente novamente");

    }
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0])

    document.getElementById('formGridCity').value = atividade[0].cidade;
    document.getElementById('formGridEmail').value = atividade[0].email;

  }

  const pesquisarCep = async () => {
    try {
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
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Nome</Form.Label>
          <Form.Control placeholder="Nome do usuário" disabled={atividade !== null} />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control placeholder="Endereço" onChange={(e) => setRua(e.target.value)} />
        </Form.Group>



        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control onChange={(e) => setCidade(e.target.value)} />
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
          <Form.Check className='mb-35' type="checkbox" label="Check" />
        </Form.Group>
      </Form>
      <div className='botoesLista'>
        <Bootstrapbutton text={atividade !== null ? "Atualizar" : "Salvar"} type="submit" onClick={enviar} />
        <Bootstrapbutton text="Cancelar" type="submit" onClick={cancelar} />
      </div>
      <div>
        <AtividadeLista
          atividades={atividades}
          deletarAtividade={deletarAtividade}
          pegarAtividade={pegarAtividade}
        />
      </div>
    </div>
  )
}