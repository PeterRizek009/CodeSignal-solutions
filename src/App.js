import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import FirstNotRepeatingCharacter from './components/firstNotRepeatingCharacter/firstNotRepeatingCharacter';


function App() {
  return (
    <>
      <FirstNotRepeatingCharacter/>

      <BrowserRouter>
      <Routes>
        <Route path="/FirstNotRepeatingCharacter" element={<FirstNotRepeatingCharacter/>}/>
        {/* <Route path="*" element={<DifferentSquares/>}/> */}
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
