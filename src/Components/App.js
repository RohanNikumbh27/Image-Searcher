import { useState } from 'react';
import '../Styles/App.css';
import Sresult from './Sresult';
import NoPicture from './NoPicture';

function App() {
  const [imag, setImag] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;
    setImag(data);
    console.log(imag);
  }

  return (
    <>
      <input type='text' onChange={inputEvent} placeholder='Search Photos' className='inputt'></input>
      {imag?<Sresult value={imag}/>:<NoPicture/>}
    </>
  );
};

export default App;
