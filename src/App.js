import logo from './logo.svg';
import './App.css';
import LifeCycleMethod from './LifeCycleMethod';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState("purple");
  const [hide, setHide] = useState(false);

  return (
    <div className="App">
      {hide === false && <LifeCycleMethod color={color} />}
      <button onClick={(e) => setColor("orange")}>Change Props</button>
      <button onClick={(e) => setHide(!hide)}>Toogle Hide</button>
    </div>
  );
}

export default App;
