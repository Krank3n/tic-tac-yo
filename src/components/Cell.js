import React from "react";

const Cell = ({ value, onClick }) => {
    const style = value ? `cells ${value}` : `cells`;

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Cell;

