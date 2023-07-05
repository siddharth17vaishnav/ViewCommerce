import { Box, ThemeProvider, Typography, createTheme } from '@mui/material'
import banner from '../assets/Banner.png'
import { useMediaQuery } from '@mui/material'
import Swipe from './Swiper/Swipe'
import AllButton from './Buttons/AllButton'

const Hero = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, Arial, sans-serif'
    }
  })
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  const swiperContent = [
    { id: 1, image: banner, alt: 'Banner 1' },
    { id: 2, image: banner, alt: 'Banner 2' },
    { id: 3, image: banner, alt: 'Banner 3' }
  ]

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mt: '55px',
          position: 'relative',
          width: '100% ',
          height: '602px',
          px: isLargeScreen ? 5 : 0
        }}>
        <Box
        // sx={{
        //   backgroundImage: `url(${banner})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   height: '100%'
        // }}
        >
          <Swipe
            swiperContent={swiperContent}
            renderSlideContent={content => (
              <Box
                display="flex"
                justifyContent="center" // You can customize this based on your requirements
                sx={{
                  width: '100%',
                  height: '494px',
                  backgroundImage: `url(${content.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}></Box>
            )}
          />
          <Box
            sx={{
              position: 'absolute',
              color: '#1C1C1C',
              left: '10%',
              top: '30%',
              zIndex: 2
            }}>
            <Typography
              variant="h1"
              component="p"
              sx={{
                fontSize: '23px',
                fontWeight: 400
              }}>
              Latest trending
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: '27px',
                fontWeight: 700
              }}>
              Electronic items
            </Typography>
            <AllButton text="Learn more" />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
export default Hero
