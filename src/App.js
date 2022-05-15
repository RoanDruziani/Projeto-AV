import logo from './logo.svg';
import './App.css';

import Bootstrapcarousel from "./components/Bootstrapcarousel";
import Bootstrapnavbar from './components/Bootstrapnavbar';
import Bootstrapcards from './components/Bootstrapcards';
import Bootstrapforms from './components/Bootstrapforms';
import Bootstrapbutton from './components/Bootstrapbutton';
import Bootstraprodape from './components/Bootstraprodape';

function App() {
  return (
      <div className="App">
      <Bootstrapnavbar />
      <Bootstrapcarousel />
      <br></br>
      
      <view style={{
        display:'flex',
        flexDirection: 'row'
      }}>
        <Bootstrapcards />
        <Bootstrapcards />
        <Bootstrapcards />
        <Bootstrapcards />       
      </view>  
      <Bootstrapforms /> 
      <Bootstrapbutton />
      <br></br>
      <Bootstraprodape />  

    </div>
  );
}

export default App;
