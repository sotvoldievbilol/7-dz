import { useState } from "react";
import Input1 from "./input/Input1";
import Input2 from "./input/Input2";
import Deleniy from "./button/Deleniy";
import Minus from "./button/Minus";
import Umnojenia from "./button/Umnojenia";
import Plus from "./button/Plus";
import "./style.css"


function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  return (
    <div className="App">
      <Input1 setInput1={setInput1} />
      <Input2 setInput2={setInput2} />
      <Deleniy input1={input1} input2={input2} setInput3={setInput3} />
      <Minus input1={input1} input2={input2} setInput3={setInput3} />
      <Umnojenia input1={input1} input2={input2} setInput3={setInput3} />
      <Plus input1={input1} input2={input2} setInput3={setInput3} />
        <input type="text" value={input3}></input>
    </div>
  );
}

export default App;
