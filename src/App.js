import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Bootstrapcarousel from "./components/Bootstrapcarousel";
import Bootstrapnavbar from './components/Bootstrapnavbar';
import Bootstrapcards from './components/Bootstrapcards';
import Bootstrapforms from './components/Bootstrapforms';
import Bootstrapbutton from './components/Bootstrapbutton';
import Bootstraploja from './components/Bootstraploja';
import AtividadeLista from './components/AtividadesLista';

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: 'titulo',
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    prioridade: '1',
    titulo: 'titulo',
    descricao: 'teste',
  },
];

function App() {

  
  
    const [atividades, setAtividades] = useState(initialState);
    const [atividade, setAtividade] = useState({});
  
    function addAtividade(e) {
      e.preventDefault();
  
      const atividade = {
        id: document.getElementById('id').value,
        prioridade: document.getElementById('prioridade').value,
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
  
      };
  
  
      setAtividades([...atividades, { ...atividade }]);
    }
  
    function deletarAtividade (id){
      const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesFiltradas]);
    } 
    function pegarAtividade(id) {
      const atividade = atividades.filter((atividade) => atividade.id === id);
      setAtividade(atividade[0])
    }
  return (
    <div className="App">
      <Bootstrapnavbar />
      <Bootstrapcarousel />
      <br></br>
      <h1 class='main-title'> Loja </h1>
      <br></br>
      <Bootstraploja />
      <br></br>
      <h1 class='main-title'> Ultimas Contratações</h1>
      <br></br>
      <Bootstrapcards />
      <br></br>
      <h1 class='main-title'> Cadastro Sócio Torcedor</h1>
      <br></br>
      <div className='forms'>
        <Bootstrapforms />
      </div>
      <br></br>

      <div>
        <AtividadeLista
          atividades={atividades}
          deletarAtividade={deletarAtividade}
          pegarAtividade={pegarAtividade}
        />
      </div>



    </div>
  );
}

export default App;
