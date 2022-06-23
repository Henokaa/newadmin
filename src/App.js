
import Application from './Application'
import React, {useState, useEffect} from 'react';
import Login from './pages/Login';
import { LoginContext } from "./Contexts/LoginContext"

import { Provider } from 'react-redux';
import store from './store';
 import { loadUser } from './actions/authActions';
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 import Signin from './pages/Signin';

 import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const isLogged = true;
  
  useEffect(() => {
    store.dispatch(loadUser());
    })
  return (

  <Provider store={store}>
  <LoginContext.Provider value = {{ setShowProfile, showProfile }}>
  
  <div className="App">
    <Application />
  </div>
 
  </LoginContext.Provider>
  </Provider>
  );
}

export default App;
