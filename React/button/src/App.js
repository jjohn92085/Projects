import React from 'react';
import Button from './Button';
import './App.css';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="container">
        <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;

