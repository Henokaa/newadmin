import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button';
import { ImageSearchSharp } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    images: {
         backgroundImage: (news) => {
            if (news.category === 'Sport') {
              return "/sport.jpg"
            }
            if (news.category === 'Politics') {
              return "/politics.png"
            }
            if (news.category === 'Economics') {
              return 
            }
            return 
          },
    }
  });
  function imagess(news){
    if (news.category === 'Sport') {
        return "/sport.jpg"
      }
      if (news.category === 'Politics') {
        return "/politics.jpg"
      }
      if (news.category === 'Economics') {
        return "/economics.jpg"
      }
      return "/alert.PNG"
    }

export default function NewsCard({ news, handleDelete }) {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagess(news)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.disc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}