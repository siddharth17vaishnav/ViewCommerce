import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const MediaCard=({item})=> {
  return (
    <Grid item xs={2} sm={4} md={4}>
        <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="Chevrolet"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          colors
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.price}
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
  );
}

export default MediaCard;