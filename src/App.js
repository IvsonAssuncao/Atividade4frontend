import React from 'react';
import Contadordecaracteres from './Contadordecaracteres';

const App = () => {
  return (
    <div>
      <h1>Contador de Caracteres</h1>
      <Contadordecaracteres label="Digite seu texto" />
      <Contadordecaracteres label="Digite seu texto digitado 2" />
    </div>
  );
};

export default App;
