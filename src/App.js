import './App.css';
import {useEffect, useState} from 'react'
import Bar from './Bar'
// import {RangeStepInput} from 'react-range-step-input';
import Slider from './Slider'
import bubbleSort from './algos/BubbleSort';
import mergeSort from './algos/mergeSort';
// const size = 10;

function App() {
  var [arr, setArr] = useState([10,9,20,8,7,6,5,4,14,2,1,10,12,18,8,2,5,7,1,8]);
  var [cls, setCls] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  // var [sizeArr, setSize] = useState(10);

  function sizeArr(size_)
  {
    var tempArr = new Array(size_);
    var clsArr = new Array(size_);
    for(var i = 0; i < size_; i++)
    {
      clsArr[i] = 0;
      tempArr[i] = Math.random();
      tempArr[i] = Math.floor((tempArr[i] *1000))%20 + 1;
    }
    setCls(clsArr);
    setArr(tempArr);
  }

  function Sleep(ms)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  useEffect(() => {
    console.log("asdasd");
  },[arr]);

  // var sort = bubbleSort(_arr = arr, _cls = cls, _setCls = setCls)
  return (
    <>

          <Slider onSliderChange={sizeArr}/>        
          {/* <RangeStepInput /> */}
          <div className="App">
          {/* <Slider></Slider> */}
          <Bar arr={arr} clsarr = {cls} /> 
          </div>

      <button type="button" className="btn btn-primary" style = {{"display" : "grid","margin" : "auto", "margin-top" : "10px"}} onClick={bubbleSort.bind(null, arr, setArr, cls, setCls)}>SORT</button>
      <button type="button" className="btn btn-primary" style = {{"display" : "grid","margin" : "auto", "margin-top" : "10px"}} onClick={mergeSort.bind(null, arr, setArr, cls, setCls)}>MERGE_SORT</button>
    </>
  );
}

export default App;
