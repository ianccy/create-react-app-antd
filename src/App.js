import React, { useState } from 'react';

import CustomButton from 'components/CustomButton';

function App() {
  const [count, setCount] = useState(0);

  function handleUpdateCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        count: {count}
        <CustomButton onClick={handleUpdateCount} type="primary">
          Button
        </CustomButton>
      </header>
    </div>
  );
}

export default App;
