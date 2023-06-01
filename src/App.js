import './App.css';
import React, { useState } from 'react';
import Activite from './activite';
import ButtonPlus from './buttonPlus';

function App() {

  const [components, setComponents] = useState(["Sample Component"]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addComponent() {

    setComponents([...components, "Sample Component"]);

  }

  function handleTotalPriceChange(newTotalPrice) {
    setTotalPrice(totalPrice + newTotalPrice);
    console.log(totalPrice);
  }

  return (
    <div className='parent'>
      {components.map((item, i) => (
      <Activite onTotalPriceChange={handleTotalPriceChange} key={i} text={item} />
    ))}
    <div className='px-8 mt-2 '>
      <ButtonPlus onClick={addComponent} text="+" className="button" />
    </div>

    <div>
      <p className='px-8 mt-2 text-2xl '>Total : {totalPrice}€</p>
    </div>
    </div>
  );
}

export default App;