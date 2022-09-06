import { useState } from "react";
import Button from "./tools/Input";
import './App.css';


const App = () => {
  let [number1, setNumber1] = useState('');
  let [number2, setNumber2] = useState('');
  const [total, setTotal] = useState("");

  const onChange1 = (e) => {
    setNumber1(e.target.value);
    setTotal(0);
  };

  const onChange2 = (e) => {
    setNumber2(e.target.value);
    setTotal(0);

  };

  return (
    <>
    <div  className="App">
      <h1 className="text-center"><u>Calculator</u></h1>
      <h6 className="text-center">Please enter here two inputs and then press your operator</h6>
      <div >
        <input type="text" onChange={onChange1}  style={{ height: 80, width: 80, textAlign: "center", fontSize: 30, margin:10 }} />
        <input type="text" onChange={onChange2}  style={{ height: 80, width: 80, textAlign: "center", fontSize: 30, margin:10 }} />
      </div>
      <div className="buttons" >
        <Button opSymbol="+" onClick={() => setTotal(parseInt(number1) + parseInt(number2))} /> 
        </div>

        <div className="buttons">
        <Button opSymbol="-" onClick={() => setTotal(number1 - number2)} />
        </div>

        <div className="buttons ">
        <Button opSymbol="X" onClick={() => setTotal(number1 * number2)} />
        </div>

        <div className="buttons ">
        <Button opSymbol="/" onClick={() => setTotal(number1 / number2)} />
        </div>

        <div className="buttons ">
        <Button opSymbol="%" onClick={() => setTotal(number1 % number2)} /> 
        </div>

      <h3 style={{fontSize:30}} className="text-center bg-light mt-3">{total}</h3>
    
    
    </div>

</>
  );
};

export default App;
