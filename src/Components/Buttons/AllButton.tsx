import Button, { ButtonProps } from '@mui/material/Button'
import { useMediaQuery, SxProps } from '@mui/material'

interface AllButtonProps extends ButtonProps {
  text: string
  sx?: SxProps
}

const AllButton: React.FC<AllButtonProps> = ({ text, sx, ...props }) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

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

  return (
    <Button {...props} sx={sx}>
      {text}
    </Button>
  )
}

export default AllButton
