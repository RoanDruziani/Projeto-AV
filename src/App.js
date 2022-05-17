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
      <Bootstraploja />
      <div style={{
        display:'flex',
        flexDirection: 'row'
      }}>
        <Bootstrapcards />
        <Bootstrapcards />
        <Bootstrapcards />
        <Bootstrapcards />       
      </div>  
      <div className='forms'>
        <Bootstrapforms /> 
      </div>
      <Bootstrapbutton  type = "submit"/>
      <br></br>
      <Bootstraprodape />  

    </div>
  );
}

export default App;
