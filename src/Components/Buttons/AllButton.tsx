import Button, { ButtonProps } from '@mui/material/Button'
import { useMediaQuery, SxProps } from '@mui/material'

interface AllButtonProps extends ButtonProps {
  text: string
  sx?: SxProps
}

const AllButton: React.FC<AllButtonProps> = ({ text, sx, ...props }) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')
  const isSmallScreen = useMediaQuery('(max-width:500px)')

  let buttonStylesLogin: SxProps = {
    background: '#C1C1C1',
    color: '#fff',
    width: isLargeScreen ? '100px' : '100%',
    '&:hover': {
      background: '#C1C1C1',
      color: '#000'
    }
  }
  let buttonStylesHero: SxProps = {
    fontSize: '16px',
    fontWeight: 500,
    background: '#FFFFFF',
    color: '#1C1C1C',
    textTransform: 'none',
    mt: 3,
    '&:hover': {
      background: '#C1C1C1',
      color: '#fff'
    }
  }
  if (text === 'Login') {
    sx = {
      ...sx,
      ...buttonStylesLogin
    }
  }
  if (text === 'Learn more') {
    sx = {
      ...sx,
      ...buttonStylesHero
    }
  }
  if (text === 'Buy-now') {
    sx = {
      fontWeight: 500,
      fontSize: '16px',
      color: '#FFFFFF',
      Padding: '0px, 20px, 0px, 20px',
      width: '100%',
      background: 'linear-gradient(to bottom, #127FFF, #0067FF)'
    }
  }

  if (text === 'Add to cart') {
    sx = {
      fontWeight: 500,
      fontSize: '16px',
      color: '#0D6EFD',
      Padding: '0px, 20px, 0px, 20px',
      my: 2,
      width: '100%',
      background: 'white',
      border: '1px solid #DEE2E7'
    }
  }

  return (
    <Button {...props} sx={sx}>
      {text}
    </Button>
  )
}

export default AllButton
