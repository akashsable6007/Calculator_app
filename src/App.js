import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';


function App() {

const [expression , setExpression] = useState('');

const clickHandler = (value) => {
 if (value === '=') {
  try {
    setExpression(eval(expression).toString());
  } catch (error) {
    setExpression('error')
  }
 } else if (value === "C") {
  setExpression('')
 }
 else{
  setExpression(expression + value);
 }
}

  return (
    <>
    <div className="calculator">
      <h3>Calculator App</h3>
      <input type="text"
             className='form-control expression-display'
             readOnly value={expression}
            placeholder='0'
            />

      <div className="buttons">
        <button className="btn btn-primary" onClick={() => clickHandler('1')} >1</button>
        <button className="btn btn-primary" onClick={() => clickHandler('2')} >2</button>
        <button className="btn btn-primary" onClick={() => clickHandler('3')} >3</button>
        <button className="btn btn-primary" id='plusoperator' onClick={() => clickHandler('+')} >+</button>
        <button className="btn btn-primary" onClick={() => clickHandler('4')} >4</button>
        <button className="btn btn-primary" onClick={() => clickHandler('5')} >5</button>
        <button className="btn btn-primary" onClick={() => clickHandler('6')} >6</button>
        <button className="btn btn-primary" id='minusoperator' onClick={() => clickHandler('-')} >-</button>
        <button className="btn btn-primary" onClick={() => clickHandler('7')} >7</button>
        <button className="btn btn-primary" onClick={() => clickHandler('8')} >8</button>
        <button className="btn btn-primary" onClick={() => clickHandler('9')} >9</button>
        <button className="btn btn-primary" id='muiltioperator' onClick={() => clickHandler('*')} >*</button>
        <button className="btn btn-primary" id='caloperator' onClick={() => clickHandler('C')} >C</button>
        <button className="btn btn-primary" onClick={() => clickHandler('0')} >0</button>
        <button className="btn btn-primary" id='equaloperator' onClick={() => clickHandler('=')} >=</button>
        <button className="btn btn-primary" id='divoperator' onClick={() => clickHandler('/')} >/</button>
      </div>
    </div>
    
    
    </>
  );
}

export default App;
