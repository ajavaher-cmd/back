import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App() {

  const [listen, setListen] = useState([])
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/api/notes').then(res=>setListen(res))
  }, [])
  
  return (
    <div className="App">
      <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={120}
      moonColor={'yellow'}
      sunColor='red'
    />
      {
        listen.data?.map(i=>(
          <p >{i.content}</p>
        ))
      }
    </div>
  );
}

export default App;
