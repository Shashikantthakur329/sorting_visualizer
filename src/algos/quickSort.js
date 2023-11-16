function Sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function quickSort(arr, _setArr, cls, setCls)
{
    async function swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    async function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                await swap(items, i, j); //sawpping two elements
                i++;
                j--;
                _setArr([...items])
                await Sleep(40);
            }
        }
        return i;
    }
    var tempcls = [...cls];
    async function quicksort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = await partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                await quicksort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                await quicksort(items, index, right);
            }
        }

        for(var i = left; i <= right; i++)
        {
            tempcls[i] = 1;
        }
        setCls([...tempcls]);
        return items;
    }
    // first call to quick sort
    var tarr = [...arr]
    var sortedArray = quicksort(tarr, 0, tarr.length - 1);
    console.log(sortedArray); //prints [2,3,5,6,7,9]
}

export default quickSort;