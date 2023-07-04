import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery } from '@mui/material'
import Divider from '@mui/material/Divider'
import SideMenu from '../Lists/SideMenu'
import Login from '../Buttons/Login'
import CustomizedAccordions from '../CustomizedAccordions'

const PrimaryDrawer = () => {
  const [open, setOpen] = useState(false)

  const isLargeScreen = useMediaQuery('(max-width:1200px)')
  console.log(isLargeScreen)

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={
          {
            // overflowX: 'hidden'
          }
        }>
        <CustomizedAccordions />
        <Divider sx={{ my: 4 }} />
        <SideMenu />
        <Login />
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
export default PrimaryDrawer
