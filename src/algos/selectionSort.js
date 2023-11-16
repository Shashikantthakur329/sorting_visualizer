async function Sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function selectionSort(arr, _setArr, cls, _setCls) {
    var clstemp = [...cls]
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
      clstemp[i] = 1;
      _setCls(clstemp);
      _setArr([...arr]);
      await Sleep(80);
    }
    return arr
  }

export default selectionSort;