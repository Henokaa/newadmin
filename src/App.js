
import Application from './Application'
import React, {useState} from 'react';
import Login from './pages/Login';
import { LoginContext } from "./Contexts/LoginContext"


function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
  <LoginContext.Provider value = {{ setShowProfile, showProfile }}>
  <div className="App">
    {showProfile ? <Application/> : <Login />} 
  </div>
  </LoginContext.Provider>
  );
}

export default App;
