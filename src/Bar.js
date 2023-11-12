export default function Bar({arr}){
    return (
        <>
            <div className ="container" style={{"height" : "550px", "grid-template-columns":  `repeat(${arr.length + 1}, 1fr)`}}>{arr.map((x) => <div id="elem" style={{height: `${x * 20}px`}}> {x}</div>)}</div>      
        </>
    );
}

