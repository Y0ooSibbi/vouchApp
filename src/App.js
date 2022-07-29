import React from 'react';
import Loginn from './components/login';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <Nav title="Vouch Digital" abt="Home"/>
      <div style={{displya:"inline"}}>
      <Loginn/>

      {/* <Worker/> */}
      </div>

      
    </>

  );
}

export default App;
