import React from 'react';
import logo from './logo.svg';
import './App.css';

import Bootstrapcarousel from "./components/Bootstrapcarousel";
import Bootstrapnavbar from './components/Bootstrapnavbar';
import Bootstrapcards from './components/Bootstrapcards';
import Bootstrapforms from './components/Bootstrapforms';
import Bootstrapbutton from './components/Bootstrapbutton';
import Bootstraprodape from './components/Bootstraprodape';
import Bootstraploja from './components/Bootstraploja';


function App() {
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
<<<<<<< Updated upstream
      <br></br>
             
        <Bootstrapcards />
               
=======
      <br></br>     
        <Bootstrapcards />              
>>>>>>> Stashed changes
      <br></br>
      <h1 class='main-title'> Cadastro Sócio Torcedor</h1>  
      <br></br>
      <div className='forms'>       
        <Bootstrapforms /> 
      </div>
  
      <br></br>
      <Bootstraprodape />  

    </div>
  );
}

export default App;
