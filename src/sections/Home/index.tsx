import { Box, Grid } from '@mui/material'
import MediaCard from '../../components/BestDeal'
import PhoneCard from '../../components/PhoneCard'
import Instrument from '../../assets/Music.jpg'
import IPhone from '../../assets/Phone.jpg'
import TRAS from '../../assets/TRAS.jpg'
import Image3 from '../../assets/image 3.jpg'
import Footer from '../../components/common/Footer'
const Home = () => {
  const itemList = [
    { id: 1, title: 'Item 1',bgColor:'#FFE4BD', description: 'Description for Item 1',price:45843,image:Instrument },
    { id: 2, title: 'Item 2',bgColor:'#FFBDBD', description: 'Description for Item 2',price:45843,image:IPhone },
    { id: 3, title: 'Item 3',bgColor:'#FDF0AB', description: 'Description for Item 3',price:45843,image:TRAS },
  ];

  const phoneItemList = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1',price:45843,image:Image3 },
    { id: 2, title: 'Item 2', description: 'Description for Item 2',price:45843,image:IPhone },
    { id: 3, title: 'Item 3', description: 'Description for Item 3',price:45843,image:IPhone },
    { id: 4, title: 'Item 2', description: 'Description for Item 2',price:45843,image:IPhone },
    { id: 5, title: 'Item 3', description: 'Description for Item 3',price:45843,image:IPhone },
  ];
  return <Box sx={{ m: 3 }}>
    <Box>
      <Grid container spacing={4}>
        {itemList.map((item)=>(
          <MediaCard key={item.id} item={item}></MediaCard>
        ))}
      </Grid>
    </Box>
    <Box>
    <div>
        Grab the best deal on Smartphones
      </div>
    </Box>
    <Box>
      <Grid container spacing={5}>
      {phoneItemList.map((item)=>(
        <PhoneCard key={item.id} item={item}></PhoneCard>
      ))}
      </Grid>
    </Box>
    <Footer></Footer>
  </Box>
}

export default Home
