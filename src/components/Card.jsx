import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Location from './Location';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

function MediaCard() {
  const classes = useStyles();
  return (
  <React.Fragment>
    <CssBaseline />
      <Container maxWidth="sm">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image='grocery.jpg'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            La Grande
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Avery's Organics is a mid-sized farm in Northern Oregon that grows organic produce, and sells it at Farmer's Markets throughout town.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Container>
  </React.Fragment>
  );
}

export default MediaCard;
