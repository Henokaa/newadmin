import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Createticket from './pages/Createticket'
import Tickets from './pages/Tickets'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import Layouttwo from './components/Layouttwo'
import React, {useState, useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext"
import Login from './pages/Login'
import { Redirect } from "react-router-dom"
import blue from '@material-ui/core/colors/blue';
import CreateNews from './pages/CreateNews';
import News from './pages/News';
import Users from './pages/Users';
import api from './api/contacts';
import { v4 as uuidv4 } from 'uuid';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';
import Home from './pages/Home';
import Signin from './pages/Signin';
import AnalyticsChart from './components/analytics/analyticsChart'
import { useSelector, useDispatch } from 'react-redux';

import NewUpdate from './components/NewUpdate';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: blue,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});


function Application() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuidv4(),
      ...contact,
    };

    const response = await api.post('/contacts', request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllCOntacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const { showProfile } = useContext(LoginContext);
  const access = useSelector(state => state.auth.isAuthenticated);
  console.log("Accessvar ", access)
  return (
      <div>
          <ThemeProvider theme={theme}>
      <Router>
      <Switch>
      <Route path={['/Login', '/signin']}>
      <Layouttwo>
            <Switch>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            </Switch>
        </Layouttwo>
        </Route>
           
           
       <Route>
        <Layout>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/realtime">
              <AnalyticsChart />
            </Route>
            {/* <Route exact path="/notes" element={access ? <Notes/>: <Redirect to='/signin' /> } /> */}
            <Route
                  path="/notes"
                  exact
                  render={(props) => (
                    access ?
                    <Notes /> :
                    <Redirect to='/signin' />
                  )}
                />
            
            <Route
                  path="/create"
                  exact
                  render={(props) => (
                    access ?
                    <Create /> :
                    <Redirect to='/signin' />
                  )}
                />
            
            <Route
                  path="/createticket"
                  exact
                  render={(props) => (
                    access ?
                    <Createticket /> :
                    <Redirect to='/signin' />
                  )}
                />
            
            <Route
                  path="/createnews"
                  exact
                  render={(props) => (
                    access ?
                    <CreateNews />:
                    <Redirect to='/signin' />
                  )}
                />
      
            <Route
                  path="/news"
                  exact
                  render={(props) => (
                    access ?
                    <News />:
                    <Redirect to='/signin' />
                  )}
                />
            

            <Route
                  path="/tickets"
                  exact
                  render={(props) => (
                    access ?
                    <Tickets />:
                    <Redirect to='/signin' />
                  )}
                />

            {/* <Route path="/users">
              <Users />
            </Route> */}
                <Route
                  path="/users"
                  exact
                  render={(props) => (
                    <ContactList
                      {...props}
                      contacts={contacts}
                      getContactId={removeContactHandler}
                    />
                  )}
                />
                <Route
                  path="/add"
                  render={(props) => (
                    <AddContact
                      {...props}
                      addContactHandler={addContactHandler}
                    />
                  )}
                />

                <Route
                  path="/edit"
                  render={(props) => (
                    <EditContact
                      {...props}
                      updateContactHandler={updateContactHandler}
                    />
                  )}
                />

          <Route path="/contact/:id" component={ContactDetail} />
          <Route path="/newupdate" component={NewUpdate} />

          </Switch>
        </Layout>
        </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    {/* ):
           (
            <Login/>
    )} */}
    </div>
  );
}

export default Application;
