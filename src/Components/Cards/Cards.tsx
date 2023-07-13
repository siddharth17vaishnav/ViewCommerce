import myCards from './CardDetails'
// import { createTheme } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  createTheme,
  ThemeProvider
} from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CardDetails from './CardDetails'
import Swipe from '../Swiper/Swipe'
// import { ThemeProvider } from 'styled-components'
// import { Card, CardMedia } from '@material-ui/core'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 700,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
})
interface CardDetails {
  cardNo: number
  color?: string
  shadow?: string
  img?: string
  Ellipse?: string[]
  text?: string
  amount?: string
}

interface ImageDetails {
  img: string
  text: string
}
interface CardsProps {
  cards: CardDetails[]
  images?: ImageDetails[]
}

const Cards: React.FC<CardsProps> = ({ cards, images }) => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  //   const isLargeScreenForImage = useMediaQuery('(min-width:1200px)')

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mx: 4,
          mb: '108px'
        }}>
        <Box sx={{}}>
          <Grid container spacing={2} sx={{ display: 'flex', flexDirection: '' }}>
            {cards === CardDetails.cards ? (
              <Grid
                item
                xs={12}
                sm={6}
                md={12}
                lg={3.9}
                sx={{
                  '& > :first-child': {
                    mb: isMediumScreen || isLargeScreen ? '70px' : 0,
                    mr: isMediumScreen || isLargeScreen ? null : 3
                  },
                  display: isMediumScreen || isLargeScreen ? null : 'flex',
                  position: 'relative',
                  mb: (!isLargeScreen && !isMediumScreen) || isSmallScreen ? '70px' : 0
                }}>
                {images?.map((details, ind) => {
                  const { img, text } = details
                  return (
                    <Box
                      key={ind}
                      sx={{
                        position: 'relative'
                      }}>
                      <CardMedia
                        component="img"
                        src={img}
                        alt={`images-${ind}`}
                        sx={{
                          width: '100%',
                          height: '180px',
                          borderRadius: '5px'
                        }}
                      />

                      <Typography
                        sx={{
                          position: 'absolute',
                          bottom: '15px',
                          left: '20px',
                          color: '#FFFFFF',
                          fontSize: '16px',
                          fontWeight: 500
                        }}>
                        {text}
                      </Typography>
                    </Box>
                  )
                })}
              </Grid>
            ) : null}
            {cards.map((details, ind) => {
              const { cardNo, color, shadow, img, Ellipse, text, amount } = details

              if (cards === CardDetails.cards) {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={cards !== CardDetails.cards ? 4 : 2.7}
                    key={ind}>
                    <Card
                      sx={{
                        // maxWidth: 345,
                        width: '100%',
                        background: `${color}`,
                        height: '430px',
                        position: 'relative',
                        boxShadow: `${shadow}`
                      }}>
                      <CardHeader
                        action={
                          <IconButton
                            aria-label="settings"
                            sx={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: '#fff'
                            }}>
                            <FavoriteBorderIcon sx={{ width: '14.67px', height: '13.33px' }} />
                          </IconButton>
                        }
                      />
                      <CardMedia
                        component="img"
                        image={img}
                        alt={`images-${ind}-${cardNo}`}
                        sx={{ width: '200px', height: '200px', mx: 'auto' }}
                      />
                      <CardContent sx={{ pb: 4, color: '#3E3E3E' }}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 500, fontSize: '12px' }}>
                          Colors
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 0.7 }}>
                          {Ellipse?.map((ellipse, ind) => {
                            return (
                              <CardMedia
                                component="img"
                                src={ellipse}
                                alt={`Ellipse-${ind}-${cardNo}`}
                                sx={{ width: '16px', height: '16px' }}
                              />
                            )
                          })}
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            // width: '264px',
                            height: '56px',
                            my: 3,
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '24px',
                            overflowY: 'scroll'
                          }}>
                          {text}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            fontSize: '14px',
                            position: 'absolute',
                            bottom: '15px'
                          }}>
                          {amount} $
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              }
              // else if (cards !== CardDetails.cards) {
              //   return (
              //     <Grid
              //       item
              //       xs={12}
              //       sm={6}
              //       md={4}
              //       lg={cards !== CardDetails.cards ? 4 : 2.7}
              //       key={ind}>
              //       <Swipe
              //         swiperContent={CardDetails.cards}
              //         renderSlideContent={content => (
              //           <Card
              //             sx={{
              //               // maxWidth: 345,
              //               width: '100%',
              //               background: `${color}`,
              //               height: '430px',
              //               position: 'relative',
              //               boxShadow: `${shadow}`
              //             }}>
              //             <CardHeader
              //               action={
              //                 <IconButton
              //                   aria-label="settings"
              //                   sx={{
              //                     width: '32px',
              //                     height: '32px',
              //                     borderRadius: '50%',
              //                     background: '#fff'
              //                   }}>
              //                   <FavoriteBorderIcon sx={{ width: '14.67px', height: '13.33px' }} />
              //                 </IconButton>
              //               }
              //             />
              //             <CardMedia
              //               component="img"
              //               image={img}
              //               alt={`images-${ind}-${cardNo}`}
              //               sx={{ width: '200px', height: '200px', mx: 'auto' }}
              //             />
              //             <CardContent sx={{ pb: 4, color: '#3E3E3E' }}>
              //               <Typography
              //                 variant="body2"
              //                 sx={{ mb: 1, fontWeight: 500, fontSize: '12px' }}>
              //                 Colors
              //               </Typography>
              //               <Box sx={{ display: 'flex', gap: 0.7 }}>
              //                 {Ellipse?.map((ellipse, ind) => {
              //                   return (
              //                     <CardMedia
              //                       component="img"
              //                       src={ellipse}
              //                       alt={`Ellipse-${ind}-${cardNo}`}
              //                       sx={{ width: '16px', height: '16px' }}
              //                     />
              //                   )
              //                 })}
              //               </Box>
              //               <Typography
              //                 variant="body2"
              //                 sx={{
              //                   // width: '264px',
              //                   height: '56px',
              //                   my: 3,
              //                   fontWeight: 400,
              //                   fontSize: '14px',
              //                   lineHeight: '24px',
              //                   overflowY: 'scroll'
              //                 }}>
              //                 {text}
              //               </Typography>
              //               <Typography
              //                 variant="body2"
              //                 sx={{
              //                   fontWeight: 500,
              //                   fontSize: '14px',
              //                   position: 'absolute',
              //                   bottom: '15px'
              //                 }}>
              //                 {amount} $
              //               </Typography>
              //             </CardContent>
              //           </Card>
              //         )}
              //       />
              //     </Grid>
              //   )
              // }
            })}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
export default Cards
