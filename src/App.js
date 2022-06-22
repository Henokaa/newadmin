
import Application from './Application'
import React, {useState, useEffect} from 'react';
import Login from './pages/Login';
import { LoginContext } from "./Contexts/LoginContext"

import { Provider } from 'react-redux';
import store from './store';
 import { loadUser } from './actions/authActions';
function App() {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    store.dispatch(loadUser());
    })
  return (
  <Provider store={store}>
  <LoginContext.Provider value = {{ setShowProfile, showProfile }}>
  <div className="App">
    {showProfile ? <Application/> : <Login />} 
  </div>
  </LoginContext.Provider>
  </Provider>
  );
}

export default App;
