export default function Bar({arr, clsarr}){
    return (
        <>
            <div className ="container"  style={{"height" : "550px", "grid-template-columns":  `repeat(${arr.length + 1}, 1fr)`}}>{arr.map((x, indx) => <div className="elem" id = {clsarr[indx] === 1 ? "curr" : clsarr[indx] === 2 ? "toSwap" : "notCurr"} style={{height: `${x * 20}px`}}> {x}</div>)}</div>      
        </>
    );
}

