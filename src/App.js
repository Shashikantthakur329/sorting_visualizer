import './App.css';
import {useEffect, useState} from 'react'
import Bar from './Bar'
import {RangeStepInput} from 'react-range-step-input';
import Slider from './Slider'
// const size = 10;

function App() {
  var [arr, setArr] = useState([10,9,20,8,7,6,5,4,3,2,1]);
  // var [sizeArr, setSize] = useState(10);
  function sizeArr(size_)
  {
    var tempArr = new Array(size_);
    for(var i = 0; i < size_; i++)
    {
      tempArr[i] = Math.random();
      tempArr[i] = Math.floor((tempArr[i] *1000))%20 + 1;
    }
    setArr(tempArr)
  }

  function Sleep(ms)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function sort()
  {
    const arrCopy = [...arr];
    const n = arrCopy.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++)
        {
          if(arrCopy[j] > arrCopy[j + 1]){
            const temp = arrCopy[j];
            arrCopy[j] =  arrCopy[j + 1];
            arrCopy[j + 1] = temp;
            setArr([...arrCopy]);
            await Sleep(50);
          }
        }
      }
  }

  useEffect(() => {
    console.log("asdasd");
  },[arr]);

  

  return (
    <>

          <Slider onSliderChange={sizeArr}/>        
          {/* <RangeStepInput /> */}
          <div className="App">
          {/* <Slider></Slider> */}
          <Bar arr={arr} /> 
          </div>

      <button type="button" className="btn btn-primary" style = {{"display" : "grid","margin" : "auto", "margin-top" : "10px"}} onClick={sort}>SORT</button>
    </>
  );
}

export default App;
