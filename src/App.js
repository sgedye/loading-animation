import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  
  const content = {
    heading: `Hey what's up`,
    subHeading: `No, really this is UP!!!`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    more: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  }

  const [loadingState, updateLoadingState] = useState(true);
  const [contentState, updateContentState] = useState({
    heading: `Loading`,
    subHeading: `Loading`,
    text: `Loading`,
    more: `Loading`
  });


  useEffect(() => {
    setTimeout(() => {
      updateContentState(content);
      updateLoadingState(false);
    }, 2000);
  },[content])

  return (
    <main className={loadingState ? 'loading' : ''}>
      <h1>{contentState.heading}</h1>
      <h2>{contentState.subHeading}</h2>
      <p>{contentState.text}</p>
      <p>{contentState.more}</p>
    </main>
  );
}

export default App;
