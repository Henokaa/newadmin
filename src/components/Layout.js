import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { useHistory, useLocation } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
  BubbleChart,
} from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { LoginContext } from '../Contexts/LoginContext';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import CreateIcon from '@material-ui/icons/Create';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions'
import { Link } from "react-router-dom";

const drawerWidth = 240;

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
      backgroundColor: '#77C1E0',
    },
    active: {
      background: '#ffffff',
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginTop: '7px',
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setShowProfile } = useContext(LoginContext);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuItems = [
    {
      text: 'Home',
      icon: <HomeIcon color="secondary" />,
      path: '/',
    },
    {
      text: 'Realtime Analytics',
      icon: <BubbleChart color="secondary" />,
      path: '/realtime',
    },
    {
      text: 'Users',
      icon: <AddIcon color="secondary" />,
      path: '/users',
    },

    {
      text: 'News',
      icon: <BookOutlinedIcon color="secondary" />,
      path: '/news',
    },

    {
      text: 'Create News',
      icon: <CreateIcon color="secondary" />,
      path: '/createnews',
    },

    {
      text: 'Tasks',
      icon: <AppsIcon color="secondary" />,
      path: '/notes',
    },

    {
      text: 'Create Tasks',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create',
    },

    {
      text: 'Tickets',
      icon: <SubjectOutlined color="secondary" />,
      path: '/Tickets',
    },
    {
      text: 'Create Tickets',
      icon: <ConfirmationNumberIcon color="secondary" />,
      path: '/createticket',
    },
  ];

  function handleClick() {
    dispatch(logout())
    history.push("/login");
    
  }
  return (
    <div className={classes.root}>
      {' '}
      {/* setting it to be flex for  */}
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
          
          <Button
            className={classes.avatar}
            variant="text"
            onClick={handleClick}
          >
            Logout
          </Button>
          
          {/* <Avatar src="./image/user.png" /> */}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
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
              className={
                location.pathname === item.path ? classes.active : null
              } // The useLocation() is very useful to get and use the query parameters defined in the URL.
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>{' '}
        {/* take all the property of the toolbar of the navbar including height make it the height*/}
        {children}
      </div>
    </div>
  );
}
