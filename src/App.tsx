import React, {useState} from 'react';
import './App.css';
import {Number} from "./Number";
import {Operation} from "./Operation";

function App() {
    const [startNumber, setStartNumber] = useState<string>("0")
    const [nextNumber, setNextNumber] = useState("")

    // если кликнули по кнопке /,*,-,+  должно записываться другое число
    // если кликнули по = должнен записываться результат
    // если кликнули по "," то после числа должна записаться запятая
    const onChangeNumber = (title: string) => {
        +startNumber > 0 ? setStartNumber(`${startNumber}${title}`) : setStartNumber(`${title}`)
    }
    const changeToNull = () => setStartNumber("0")
    // const changeDelete = () => setResult((+startNumber / +nextNumber))
    return (
        <div className="App">
            <div className="mainBlock">
                <div className="result">{startNumber}</div>
                <hr/>
                <div className="operationBlock">
                    <Operation title={"ac"} operationFunct={changeToNull}/>
                    <Operation title={"/"}/>
                    <Operation title={"*"}/>
                    <Operation title={"-"}/>
                    <Operation title={"+"}/>
                </div>
                <div className="numbers">
                    <Number title={"7"} operationFunc={onChangeNumber}/>
                    <Number title={"8"} operationFunc={onChangeNumber}/>
                    <Number title={"9"} operationFunc={onChangeNumber}/>
                    <Number title={"4"} operationFunc={onChangeNumber}/>
                    <Number title={"5"} operationFunc={onChangeNumber}/>
                    <Number title={"6"} operationFunc={onChangeNumber}/>
                    <Number title={"1"} operationFunc={onChangeNumber}/>
                    <Number title={"2"} operationFunc={onChangeNumber}/>
                    <Number title={"3"} operationFunc={onChangeNumber}/>
                    <Number title={"0"} operationFunc={onChangeNumber}/>
                    <Number title={","}/>
                    <Number title={"="}/>
                </div>
            </div>
        </div>
    );
}

export default App;
