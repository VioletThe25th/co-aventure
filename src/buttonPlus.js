import React from "react";

const ButtonPlus = (props) => {

  return (
    <button className="text-3xl" onClick={props.onClick}>{props.text}</button>
  )
}

export default ButtonPlus;