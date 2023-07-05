import { Grid } from '@mui/material'
import MediaCard from '../../components/BestDeal'
import PhoneCard from '../../components/PhoneCard'
import Instrument from '../../assets/Music.jpg'
import IPhone from '../../assets/Phone.jpg'
import TRAS from '../../assets/TRAS.jpg'
import Image3 from '../../assets/image 3.jpg'
import ImagePhone2 from '../../assets/imagePhone2.png'
import ImgaPhone3 from '../../assets/imagePhone3.png'
import ImagePhone4 from '../../assets/imagePhone4.png'
import ImagePhone5 from '../../assets/imagePhone5.png'
import Card from '@mui/material/Card'
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import Typography from '@mui/material/Typography'


const Home = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  
  const itemList = [
    { id: 1, title: 'Item 1',bgColor:'#FFE4BD', description: 'Description for Item 1',price:45843,image:Instrument },
    { id: 2, title: 'Item 2',bgColor:'#FFBDBD', description: 'Description for Item 2',price:45843,image:IPhone },
    { id: 3, title: 'Item 3',bgColor:'#FDF0AB', description: 'Description for Item 3',price:45843,image:TRAS },
  ];

  const phoneItemList = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1',price:45843,image:Image3 },
    { id: 2, title: 'Item 2', description: 'Description for Item 2',price:45843,image:ImagePhone2 },
    { id: 3, title: 'Item 3', description: 'Description for Item 3',price:45843,image:ImgaPhone3 },
    { id: 4, title: 'Item 2', description: 'Description for Item 2',price:45843,image:ImagePhone4 },
    { id: 5, title: 'Item 3', description: 'Description for Item 3',price:45843,image:ImagePhone5 },
  ];
  return (
    <Grid container flexDirection={'column'} spacing={10}>
      <Grid item container spacing={4} justifyContent="center">
          <Grid item spacing={4} direction={'column'}>
            <Card><img src={ImagePhone5}/></Card>
            <Card><img src={ImagePhone5}/></Card>
          </Grid>
          {itemList.map((item)=><MediaCard key={item.id} item={item}/>)}
      </Grid>
      <Grid item container spacing={4} justifyContent="start">
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Grab the best deal on SmarthPhone</Typography>
      </ThemeProvider>
      </Grid>
      <Grid item container spacing={4} justifyContent="center">
        {phoneItemList.map((item)=><PhoneCard key={item.id} item={item}/>)}
      </Grid>
    </Grid>
  )
}

export default Home
