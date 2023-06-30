import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './assets'
interface ReusableCardProps {
  image: string;
  title: string;
  details: string;
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    maxWidth: 300, // Set the desired width here
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  media: {
    width: 200,
    height: 200,
    padding: 8, // Add padding here
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
}));

const ReusableCard: React.FC<ReusableCardProps> = ({ image, title, details }) => {
  const classes = useStyles();
  const imagePath = require(`../assets/${image}`).default;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} component="img" alt="B" src={imagePath} />
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
