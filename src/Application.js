import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Createticket from './pages/Createticket'
import Tickets from './pages/Tickets'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import React, {useState, useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext"
import Login from './pages/Login'
import { Redirect } from "react-router-dom"
import blue from '@material-ui/core/colors/blue';
import CreateNews from './pages/CreateNews'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: blue
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function Application() {
    const { showProfile } = useContext(LoginContext);
  return (
      <div>
          {showProfile ? (
          <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes/>
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/createticket">
              <Createticket />
            </Route>
            <Route path="/createnews">
              <CreateNews />
            </Route>
            <Route path="/tickets">
              <Tickets />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
    ):
           (
            <Login/>
    )}
    </div>

  );
}

export default Application;
