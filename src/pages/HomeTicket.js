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
  }
})); 

export default function HomeTicket() {
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

  return (
     <div>
      
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

            <TicketCard ticket={ticket} handleDelete={handleDelete} />
          
        ))}
      </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[3]}
            component="div"
            
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  </div>
  )
}
