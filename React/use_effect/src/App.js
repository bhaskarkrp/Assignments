import React from 'react';
import './App.css';

import {Timer} from './component/Timer'
function App() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="App">
      {show ?  <Timer start={10} end={20}/> : false}
      <button onClick={() => setShow(!show)}>Show</button>

    </div>
  );
}

export default App;
