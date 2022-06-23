import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core'
import { yellow, green, pink, blue } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
 const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
      borderRadius: 15,
      margin: '10px 10px',
      maxWidth: 950
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
     fontWeight: "600",
      marginTop: "7px",
  },
  status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  }
})); 

export default function TicketCard({ ticket, handleDelete }) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles(ticket)

  function gameLines() {
      return (
        <div>
        <Button variant="outlined" color="primary" >
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      </div>

      )
    }

  return (
    

     <TableRow key={ticket.Name} onClick={gameLines}>
      
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{ticket.title}</Typography>
                          {/* <Typography color="textSecondary" variant="body2">{ticket.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{ticket.phone}</Typography> */}
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="textSecondary" variant="subtitle2">{ticket.Name}</Typography>
                  {/* <Typography color="textSecondary" variant="body2">{ticket.Name}</Typography> */}
                </TableCell>
              <TableCell>{ticket.Date}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((ticket.category === 'High' && '#f7dbdb') ||
                        (ticket.category === 'Medium' && '#fff7cd') ||
                        (ticket.category === 'Low' && '#dcf1d7')),
                        color: 
                        ((ticket.category === 'High' && 'Red') ||
                        (ticket.category === 'Medium' && 'Black') ||
                        (ticket.category === 'Low' && 'Green'))
                    }}
                  >{ticket.category}</Typography>
                </TableCell>
            </TableRow>
          
          
  )
}