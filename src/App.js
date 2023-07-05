import Resume from './Components/Resume'
import Inputs from './Components/Inputs'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import store from './Components/Store/Store'
import { useState } from 'react'

function App() {
  const [inputs,setInputs] = useState([])
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <store.Provider value={{data:inputs, dataFun:setInputs}}>
            <Inputs/>
          </store.Provider>
        }/>
        <Route path="/resume" element={
          <store.Provider value={{data:inputs, dataFun:setInputs}}>
            <Resume/>
          </store.Provider>
        }/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
