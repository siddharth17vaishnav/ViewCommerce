import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  IconButton,
  Box,
  useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CardDetails from './CardDetails'
import Swipe from '../Swiper/Swipe'

interface CardDetails {
  cardNo: number | string
  color?: string
  shadow?: string
  img?: string
  Ellipse?: string[]
  text?: string
  amount?: string
}

interface Card {
  cardNo: number
  color: string
  img: string
  Ellipse: string[]
  text: string
  text2: string
  amount: string
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
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))

  const swiperContent = () => {
    const groupedItems = [] // Array to store grouped items

    if (isLargeScreen) {
      for (let i = 0; i < CardDetails.cardSwiper.length; i += 3) {
        // Group items into sets of three
        const group = CardDetails.cardSwiper.slice(i, i + 3)
        groupedItems.push(group)
      }
    } else if (isMediumScreen && !isSmallScreen) {
      for (let i = 0; i < CardDetails.cardSwiper.length; i += 2) {
        // Group items into sets of three
        const group = CardDetails.cardSwiper.slice(i, i + 2)
        groupedItems.push(group)
      }
    } else {
      for (let i = 0; i < CardDetails.cardSwiper.length; i += 1) {
        // Group items into sets of three
        const group = CardDetails.cardSwiper.slice(i, i + 1)
        groupedItems.push(group)
      }
    }

    return groupedItems
  }

  const swiperGroup = swiperContent()
  console.log(swiperGroup)
  const renderCard = (card: CardDetails) => {
    const { cardNo, color, img, Ellipse, text, amount } = card

    return (
      <Grid item sx={{}}>
        <Card
          key={`${cardNo}`}
          sx={{
            width: '100%',
            background: `${color}`,
            // height: '430px',
            position: 'relative'
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
            alt={`images-${cardNo}`}
            sx={{ width: '200px', height: '200px', mx: 'auto' }}
          />
          <CardContent sx={{ pb: 4, color: '#3E3E3E' }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, fontSize: '12px' }}>
              Colors
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.7 }}>
              {Ellipse?.map((ellipse, ind) => (
                <CardMedia
                  component="img"
                  src={ellipse}
                  alt={`Ellipse-${ind}-${cardNo}`}
                  sx={{ width: '16px', height: '16px' }}
                  key={ind}
                />
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mx: 4, mb: '108px' }}>
        <Box sx={{}}>
          <Grid container spacing={2}>
            {cards === CardDetails.cards ? (
              <Grid
                item
                xs={12}
                sm={6}
                md={12}
                lg={3.9}
                sx={{
                  '& > :first-child': {
                    mb: isLargeScreen && !isXLargeScreen ? 0 : '70px',
                    mr: isLargeScreen && !isXLargeScreen ? 5 : null
                  },
                  display: isLargeScreen && !isXLargeScreen ? 'flex' : null,
                  position: 'relative'
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
                                key={ind}
                              />
                            )
                          })}
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
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
            })}
            {cards === CardDetails.cardSwiper && (
              <Grid
                spacing={3}
                item
                xs={12}
                // sm={12}
                md={cards !== CardDetails.cards ? 12 : 4}
                lg={cards !== CardDetails.cards ? 12 : 2.7}
                sx={{}}>
                <Swipe SwiperGroup={swiperGroup} renderCard={renderCard} />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Cards
