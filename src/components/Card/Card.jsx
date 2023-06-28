import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import assets from './assets'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    maxWidth: 300,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  
  media: {
    width: 200,
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
}));

const ReusableCard = ({ image, title, details }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     <CardMedia
  className={classes.media}
  component="img"
  alt="B"
  src={(`../assets/${image}`)}

      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReusableCard;
