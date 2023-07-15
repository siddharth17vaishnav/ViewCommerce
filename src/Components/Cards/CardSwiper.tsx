import { Box } from '@mui/material'
import Cards from './Cards'
import CardDetails from './CardDetails'

const CardSwiper = () => {
  return <Box sx={{ mb: '108px' }}>{<Cards cards={CardDetails.cardSwiper} />}</Box>
}
export default CardSwiper
