import React, { useState } from 'react';

const Contadordecaracteres = ({ label }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
  };

  return (
    <div>
      <label htmlFor="textInput">{label}:</label>
      <input
        type="text"
        id="textInput"
        value={text}
        onChange={handleInputChange}
      />
      <p>Total de caracteres digitado pelo usuario: {text.length}</p>
    </div>
  );
};

export default Contadordecaracteres;
