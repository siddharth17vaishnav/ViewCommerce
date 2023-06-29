import { Box, Grid } from '@mui/material'
import MediaCard from '../../components/BestDeal'
import PhoneCard from '@/components/PhoneCard'
import IPhone from '../../assets/iPhone.jpg'
import Footer from '../../components/common/Footer'
const Home = () => {
  const itemList = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1',price:45843,image:IPhone },
    { id: 2, title: 'Item 2', description: 'Description for Item 2',price:45843,image:IPhone },
    { id: 3, title: 'Item 3', description: 'Description for Item 3',price:45843,image:IPhone },
  ];
  return <Box>
    HELLO THERE TESTED SUCCESSFULLY BY Belay
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {itemList.map((item)=>(
      <MediaCard key={item.id} item={item}></MediaCard>
    ))}
    </Grid>
    <Footer></Footer>
  </Box>
}

export default Home
