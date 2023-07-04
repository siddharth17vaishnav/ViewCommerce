import { Box, Button, ThemeProvider, Typography, createTheme } from '@mui/material'
import banner from '../assets/Banner.png'
import { useMediaQuery } from '@mui/material'

const Hero = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, Arial, sans-serif'
    }
  })
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

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
          sx={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
          }}>
          <Box
            sx={{
              position: 'absolute',
              color: '#1C1C1C',
              left: '10%',
              top: '30%'
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

            <Button
              variant="contained"
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                background: '#FFFFFF',
                color: '#1C1C1C',
                textTransform: 'none',
                mt: 3
              }}>
              Learn more
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
export default Hero
