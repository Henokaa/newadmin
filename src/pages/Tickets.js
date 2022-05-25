import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import TicketCard from '../components/TicketCard'
import Grid from '@material-ui/core/Grid'
export default function Tickets() {
  const [Ticket, setTicket] = useState([]);

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
    <Container>
      <Grid container spacing={3}>
        {Ticket.map(ticket => (
          <Grid item xs={12} key={ticket.id}>
            <TicketCard ticket={ticket} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container> 

  )
}
