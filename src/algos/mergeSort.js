
function Sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function mergeSort(arr, _setArr, cls, setCls)
{


    async function merge(arr, l, m, r)
    {
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = new Array(n1); 
        var R = new Array(n2);
        var tarr = arr.slice();
        for (var i = 0; i < n1; i++)
            L[i] = tarr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = tarr[m + 1 + j];

        var i = 0;
        var j = 0;
        var k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
            _setArr([...arr]);
            await Sleep(20);
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
            _setArr([...arr]);
            await Sleep(20);
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
            _setArr([...arr]);
            await Sleep(20);
        }
    }

    async function mergesort(arr,l, r){
        if(l>=r){
            return;
        }
        var m =l+ parseInt((r-l)/2);
        await mergesort(arr,l,m);
        
        await mergesort(arr,m+1,r);
        
        await merge(arr,l,m,r);
        // _setArr([...arr]);
        // await Sleep(100);
    }
    var arr_size = arr.length;
    var temparr = [...arr];

    mergesort(temparr, 0, arr_size - 1);
}

export default mergeSort;
