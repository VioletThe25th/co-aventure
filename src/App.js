import './App.css';
import React, { useState } from 'react';
import Activite from './activite';
import ButtonPlus from './buttonPlus';
import Propose from './propose';

function App() {
  const [componentActivite, setComponentActivite] = useState(["Sample Component"]);
  const [componentPropose, setComponentPropose] = useState(["Sample Component"]);
  const [showActivite, setShowActivite] = useState(false);
  const [showPropose, setShowPropose] = useState(false);

  function addComponentActivite() {
    setComponentActivite([...componentActivite, "Sample Component"]);
  }

  function addComponentPropose() {
    setComponentPropose([...componentPropose, "Sample Component"]);
  }

  function toggleButtonActivite() {
    setShowActivite(!showActivite);
    if (showPropose) {
      setShowPropose(false);
    }
  }

  function toggleButtonPropose() {
    setShowPropose(!showPropose);
    if (showActivite) {
      setShowActivite(false);
    }
  }

  return (
    <div>
      <div className='flex px-8 py-8 justify-around'>
        <div className='bg-slate-200 rounded-md px-8 py-8 hover:bg-slate-400'>
          <button onClick={toggleButtonActivite}>Choisir une activité</button>
        </div>
        <div className='bg-slate-200 rounded-md px-8 py-8 hover:bg-slate-400'>
          <button onClick={toggleButtonPropose}>Proposez moi</button>
        </div>
      </div>
      <div>
        {showActivite && <div className='parent'>
          {componentActivite.map((item, i) => (
          <Activite key={i} text={item}/>
        ))}
        <div className='px-8 mt-2 '>
          <ButtonPlus onClick={addComponentActivite} text="+" className="button" />
        </div>
      </div>}
        <div>
        {showPropose && <div className='parent'>
          {componentPropose.map((item, i) => (
          <Propose key={i} text={item}/>
        ))}
        <div className='px-8 mt-2 '>
          <ButtonPlus onClick={addComponentPropose} text="+" className="button" />
        </div>
      </div>}
        </div>
      </div>
    </div>
  );
}

export default App;