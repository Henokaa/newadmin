import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';


const useStyles = makeStyles(theme => ({
  root: {
      backgroundColor: '#fdfdff'
  },
  pageHeader:{
      padding:theme.spacing(4),
      display:'flex',
      marginBottom:theme.spacing(2)
  },
  pageIcon:{
      display:'inline-block',
      padding:theme.spacing(2),
      color:'#3c44b1'
  },
  pageTitle:{
      paddingLeft:theme.spacing(4),
      '& .MuiTypography-subtitle2':{
          opacity:'0.6'
      }
  }
}))

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  const classes = useStyles();
  
  return (
    <div className="main">
      <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                <PeopleOutlineTwoToneIcon fontSize="large" />
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        Employee registration</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        </Typography>
                </div>
            </div>
        </Paper>
      <h2>
        Lesan Admins
        <Link to="/add">
          <button className="ui button blue right">Add Employee</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
