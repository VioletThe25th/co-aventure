import React from "react";

const ButtonPlus = (props) => {

    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default ButtonPlus;