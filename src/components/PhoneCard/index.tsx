import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IPhone from '../../assets/iPhone.jpg'

const PhoneCard=()=> {
  return (
    <div style={{margin: '25%'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={IPhone}
        alt="Chevrolet"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          colors
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Wood lamp, Floor Lamp, Lambader, Decorative
        </Typography>
        <Typography variant="body2" color="text.secondary">
        458,43 $
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  );
}

export default PhoneCard;