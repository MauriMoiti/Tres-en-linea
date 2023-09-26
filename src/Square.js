import React from "react"

export default function Square({value, squareClick, valueColor}) {
    
    if(value === 'X'){
        valueColor = 'aqua';
    } else if(value === 'O') {
        valueColor = 'gray';
    } else {
        valueColor = 'white';
    };

    return (
        <button className="square" onClick={squareClick} style={{cursor: "pointer", width: '140px', height: '140px', backgroundColor: valueColor } }>
            { value }
        </button>
    )
}