import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router";

const Home = () => { 
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}

const Element = () => {
  const {element} = useParams();
  return (
    <div>
      {isNaN(+element)?
        <h1>The word is: {element}</h1>
        :<h1>The number is: {element}</h1>
      }
      <Link to={'/'}>Go Home</Link>
    </div>
  )
}

const Custom = () => {
  const { element, color, background} = useParams();
  return(
    <>
    <div style={{color: color, background: background}}>
      {isNaN(+element)?
        <h1>The word is: {element}</h1>
        :<h1>The number is: {element}</h1>
      }
      <Link to={'/'}>Go Home</Link>

    </div>
    </>
  )
}

    
function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:element" element={<Element />}/>
        <Route path='/:element/:color/:background' element={<Custom />}/>

        
      </Routes>
    </div>
    </>
  );
}
    
export default App
