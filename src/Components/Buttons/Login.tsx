import Button from '@mui/material/Button'
import { useMediaQuery } from '@mui/material'

const Login = () => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)')

  return (
    <Button
      sx={{
        background: '#C1C1C1',
        color: '#fff',
        width: isLargeScreen ? '100px' : '100%'
      }}>
      Login
    </Button>
  )
}
export default Login
