import React from 'react';
import Navbar from './includes/navbar';
import Index from './components/index';

function App() {
    
  return (
    <>
       
      <Navbar />

      <div className="container mt-5">
        <Index />
      </div>

    </>
  );
}

export default App;
