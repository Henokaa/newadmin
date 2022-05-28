import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#d5d5d5',
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      text: 'Home', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Create Tasks', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/create' 
    },
    { 
      text: 'Tickets', 
      icon: <SubjectOutlined color="secondary" />,  
      path: '/Tickets' 
    },
    { 
      text: 'Create Tickets', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/createticket' 
    },
  ];

  return (
    <div className={classes.root}> {/* setting it to be flex for  */}
      {/* nav app bar */}
      <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          {/* <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography> */}
          <Typography variant="h5" className={classes.date}>
            Lesan 
          </Typography>
          <Typography>HenokF</Typography>
          <Avatar className={classes.avatar} src="/henok.jpg" />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }} // changing the paper style
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Dashboard
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} // menu item text, otem path go to its path
              onClick={() => history.push(item.path)} // The useHistory() hook returns the history, Pushes a new entry onto the history stack. Useful to redirect users to page
              className={location.pathname === item.path ? classes.active : null} // The useLocation() is very useful to get and use the query parameters defined in the URL.
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div> {/* take all the property of the toolbar of the navbar including height make it the height*/}
        { children }
      </div>
    </div>
  )
}
