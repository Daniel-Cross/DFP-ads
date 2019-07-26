import React, { Fragment, useState } from 'react';
import useDfpSlot from './components/dfp'
import './App.css';
import DynamicAd from './components/dynamicAd';

const App = () => {
  useDfpSlot({
    path: '/21737763597/adunit-1',
    size: [320, 100],
    id: 'div-gpt-ad-1563785376756-0',
  });

  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>

      <div
        id="div-gpt-ad-1563785376756-0"
        style={{ width: '320px', height: '100px' }}
      />

      <button onClick={() => setToggle(!toggle)} style={{ height: '60px', width: '120px' }} >Click Me</button>

      {toggle ? (<DynamicAd />) : null}

    </Fragment>
  )
};

export default App;
