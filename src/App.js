import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Bootstrapcarousel from "./components/Bootstrapcarousel";
import Bootstrapnavbar from './components/Bootstrapnavbar';
import Bootstrapcards from './components/Bootstrapcards';
import Bootstrapforms from './components/Bootstrapforms';
import Bootstraploja from './components/Bootstraploja';
import AtividadeLista from './components/AtividadesLista';

function App() {

  return (
    <div className="App">
      <Bootstrapnavbar />
      <Bootstrapcarousel />
      <br></br>
      <h1 className='main-title'> Loja </h1>
      <br></br>
      <Bootstraploja />
      <br></br>
      <h1 className='main-title'> Ultimas Contratações</h1>
      <br></br>
      <Bootstrapcards />
      <br></br>
      <h1 className='main-title'> Cadastro Sócio Torcedor</h1>
      <br></br>
      <div className='forms'>
        <Bootstrapforms />
      </div>
      <br></br>
    </div>
  );
}

export default App;
