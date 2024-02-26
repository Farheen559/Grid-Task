// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Task</h1>
      </header>
      <main>
        <div className="grid-container">
          <div className="grid-item item1">Content 1</div>
          <div className="grid-item item2">Content 2</div>
          <div className="grid-item item3">Content 3</div>
          <div className="grid-item item4">Content 4</div>
          <div className="grid-item item5">Content 5</div>
          <div className="grid-item item6">Content 6</div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Flex Item 1</div>
          <div className="flex-item">Flex Item 2</div>
          <div className="flex-item">Flex Item 3</div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Task</p>
      </footer>
    </div>
  );
}

export default App;
