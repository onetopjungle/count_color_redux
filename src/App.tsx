// import "./styles.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { counter } from "./redux/counter/selector";
import { coler } from "./redux/coler/selector";
import { useDispatch } from "react-redux";
import { TANG, RESET, GIAM, upNumberInput, downNumberInput } from "./redux/counter/action";
import { GREEN, RED, YELLOW } from "./redux/coler/action";
export default function App() {
  const number = useSelector(counter);
  const showColor = useSelector(coler);
  const dispatch = useDispatch();
  console.log(number);

  const [value, setValue] = useState("");
  return (
    <div className="App" >
      <div>
        <div style={{backgroundColor:showColor, width:500, height:500}}></div>
        <h1 style={{color:showColor}}>{showColor}</h1>
        <button onClick={() => dispatch({ type: GREEN })}>GREEN</button>
        <button onClick={() => dispatch({ type: RED })}>RED</button>
        <button onClick={() => dispatch({ type: YELLOW })}>YELLOW</button>
      </div>

      <div>
       <h1>{number}</h1>
       <button onClick={() => dispatch({ type: TANG })}>Increase</button>
       <button onClick={() => dispatch({ type: GIAM })}>Decrease</button>
       <button onClick={() => dispatch({ type: RESET })}>Reset</button>
       <input value={value} onChange={(e:any)=> setValue(e.target.value)}/>
       <button onClick={() => dispatch(upNumberInput(Number(value)))}>Increase2</button>
       <button onClick={() => dispatch(downNumberInput(Number(value)))}>Decrease2</button>
      </div>
    </div>
  );
}
