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
import Grid from '@material-ui/core/Grid';

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
  const [disc, setDisc] = useState('')
  const [content, setContent] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (content === '') {
      setDetailsError(true)
    }
    if (title && content) {
      fetch('http://localhost:8000/news', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, disc, content, category })
      }).then(() => history.push('/news'))
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
          label="News Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setDisc(e.target.value)}
          label="Description" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setContent(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

        <FormControl className={classes.field}>
          <FormLabel>News Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <Grid container>
            {/* <FormControlLabel value="money" control={<Radio />} label="Money" /> */}
            <Grid item md={4}> 
            <FormControlLabel value="Economics" control={<Radio />} label="Economics" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel value="Politics" control={<Radio />} label="Politics" />
            </Grid>
            <Grid item md={4}>
            <div></div>
            </Grid>
            <Grid item md={4}>
            <FormControlLabel value="Sport" control={<Radio />} label="Sport" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel value="Alert" control={<Radio />} label="Alert" />
            </Grid>
            <Grid item md={4}>
            <div></div>
            </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Synthesize
        </Button>
      </form>

      
    </Container>
  )
}
