import React from 'react';
import './App.scss';
import TextInput from './componentes/TextInput';

function App() {
  return (
    <div className="App">

      <p className='igorbdev'>{"<IgorB-Dev />"}</p>
      
        <TextInput name='name' placeholder='Nome Completo' />


    </div>
  );
}

export default App;
