import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function CreateNews() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [Name, setName] = useState('')
  const [Date, setDate] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [NameError, setNameError] = useState(false)
  const [DateError, setDateError] = useState(false)
  const [category, setCategory] = useState('Low')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setNameError(false)
    setDateError(false)


    if (title === '') {
      setTitleError(true)
    }
    if (Name === '') {
      setNameError(true)
    }
    if (Date === '') {
        setDateError(true)
      }
    if (title && Name && Date) {
      fetch('http://localhost:8000/news', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, Name, Date, category })
      }).then(() => history.push('/'))
    } 
  }

  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a News
      </Typography>

      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Ticket Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setName(e.target.value)}
          label="Ticket Name" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={NameError}
        />
        <TextField className={classes.field}
          onChange={(e) => setDate(e.target.value)}
          label="Ticket Date" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={DateError}
        />
        {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

        <FormControl className={classes.field}>
          <FormLabel>Tasks Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            {/* <FormControlLabel value="money" control={<Radio />} label="Money" /> */}
            <FormControlLabel value="High" control={<Radio />} label="High" />
            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="Low" control={<Radio />} label="Low" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>

      
    </Container>
  )
}
