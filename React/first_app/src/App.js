import './App.css';
import { Manufact } from './component/Manufact';
import {Operating} from './component/Operating';

function App() {
  return (
    <div className="App">
      < Operating name="Mobile Operating System"/>
      < Manufact name="Mobile Manufacturers"/>
    </div>
  );
}

export default App;
