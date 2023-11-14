import React, {useState} from "react";

// import {arr, setArr, cls, setCls} from './App'
function Sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function bubbleSort(_arr, _setArr, _cls, _setCls)
{
  const arrCopy = [..._arr];
  const n = arrCopy.length;
  const clsCopyref = new Array(_cls.length);
  clsCopyref.fill(0);
  const clsCopy = [..._cls]
  for (let i = 0; i < n - 1; i++) {
    // clsCopy[i] = 1;
    // setCls(clsCopy);
    for (let j = 0; j < n - 1 - i; j++)
      {
        if(arrCopy[j] > arrCopy[j + 1]){
          clsCopy[j] = 2;
          clsCopy[j + 1] = 2;
          _setCls([...clsCopy]);
          // await Sleep(30);
          const temp = arrCopy[j];
          arrCopy[j] =  arrCopy[j + 1];
          arrCopy[j + 1] = temp;
          _setArr([...arrCopy]);
          clsCopyref[j] = 0;
          clsCopyref[j + 1] = 0;
          _setCls([...clsCopyref]);
          await Sleep(40);
        }
      }
      clsCopyref[n - i - 1] = 1;
      _setCls(clsCopyref);
    }
    clsCopyref[0] = 1;
    _setCls(clsCopyref)
}

export default bubbleSort;