import Drawer from '@mui/material/Drawer'
import CustomizedMenus from './CustomizedMenus'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery } from '@mui/material'

const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false)

  const isLargeScreen = useMediaQuery('(max-width:1200px)')
  console.log(isLargeScreen)

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: '240px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '240px'
          }
        }}>
        <CustomizedMenus />
      </Drawer>
      {isLargeScreen && (
        <MenuIcon
          onClick={() => setOpen(!open)}
          sx={{ ml: 'auto', color: '#000000', cursor: 'pointer' }}
        />
      )}
    </>
  )
}
export default TemporaryDrawer
