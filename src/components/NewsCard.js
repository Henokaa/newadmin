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
import {Link} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    mediaheight: {
      height: 206,
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
    },
    appBar: {
      position: 'relative',
      backgroundColor: "#4040f9",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    disc: {
      fontWeight: "Bold",
    }
  }));

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

    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    

export default function NewsCard({ news, setNews, handleDelete }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={imagess(news)}
          title="News Media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontWeight: "bold"}}>
            {news.disc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={handleClickOpen}>
          Learn more
        </Button>
         <Button size="small" color="secondary" onClick={() => handleDelete(news.id)}>
          Delete
        </Button> 
        {/* <IconButton onClick={() => handleDelete(news.id)}>
              <DeleteOutlined />
        </IconButton> */}
      </CardActions>
    </Card>

    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Close
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary={imagess(news)} secondary={news.detailS} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary={news.Details} secondary="Tethys" />
          </ListItem>
        </List> */}
        <div style={{ margin:"20px"}}>
        <Card>
      <CardActionArea>
        <CardMedia
          className={classes.mediaheight}
          image={imagess(news)}
          title="News Media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontWeight: "bold", fontSize: "16px"}}>
            {news.disc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="secondary" onClick={handleClickOpen}>
          Learn more
        </Button>
         <Button size="small" color="secondary" onClick={() => handleDelete(news.id)}>
          Delete
        </Button>  */}
        {/* <IconButton onClick={() => handleDelete(news.id)}>
              <DeleteOutlined />
        </IconButton> */}
      </CardActions>
    </Card>
    </div>
      </Dialog>
    </div>

  )
}