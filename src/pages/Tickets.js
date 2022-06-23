import React, { useEffect, useState } from 'react'
import TicketCard from '../components/TicketCard'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  TableFooter
} from '@material-ui/core';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
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
      backgroundColor: "#d1e9fc",
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
      
      color: theme.palette.secondary.dark
  },
  status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

})); 

export default function Tickets() {
  const classes = useStyles();
  const [Ticket, setTicket] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetch('http://localhost:8000/tickets')
      .then(res => res.json())
      .then(data => setTicket(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/tickets/' + id, {
      method: 'DELETE'
    })
    const newTicket = Ticket.filter(Ticket => Ticket.id !== id)
    setTicket(newTicket)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  

  return (
     <div>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8}>
    <Typography variant="h4" gutterBottom>
            Tickets
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} style={{float: "right"}}>
          <Link to="/createticket">
          <Button variant="contained"  to="/createticket" style={{backgroundColor:"#103996", color: "#f9fafd", float: "right"}}>
            <AddIcon />
            New Ticket
          </Button>
          </Link>
          </Grid>
      </Grid>
    <TableContainer component={Paper} className={classes.tableContainer}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className={classes.tableHeaderCell}>Ticket</TableCell>
          <TableCell className={classes.tableHeaderCell}>Name</TableCell>
          <TableCell className={classes.tableHeaderCell}>Date</TableCell>
          <TableCell className={classes.tableHeaderCell}>Priority</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Ticket.map(ticket => (

<TableRow key={ticket.Name} onClick={() => hanldeClick(ticket)} >
      
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

          
        ))}
      </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>

      </Table>

      {show && <Modal details={selectedData} handleClose={hideModal} seen={show}/>}
    </TableContainer>
  </div>
  )
}
const Modal = ({ handleClose, details, seen }) => {
  const [age, setAge] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Dialog open={seen} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">{details.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {details.Name}
      </DialogContentText>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>In Progress</MenuItem>
          <MenuItem value={20}>Activate</MenuItem>
          <MenuItem value={30}></MenuItem>
        </Select>
      </FormControl>
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
  );
};
