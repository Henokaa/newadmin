import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (ticket) => {
      if (ticket.category === 'Medium') {
        return yellow[700]
      }
      if (ticket.category === 'Low') {
        return green[500]
      }
      if (ticket.category === 'High') {
        return pink[500]
      }
      return blue[500]
    },
  }
})

export default function TicketCard({ ticket, handleDelete }) {
  const classes = useStyles(ticket)

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {ticket.category[0].toUpperCase()}
            </Avatar>}
          action={
            <IconButton onClick={() => handleDelete(ticket.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={ticket.title}
          subheader={ticket.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { ticket.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}