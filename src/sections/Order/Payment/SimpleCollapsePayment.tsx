import { useState, useEffect } from 'react'

import {
  Box,
  Divider,
  Typography,
  createTheme,
  useMediaQuery,
  CardMedia,
  Button
} from '@mui/material'
import Collapse from '@mui/material/Collapse'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

import { savedCards } from './AddAndPaymentArr'
import AllButton from '../../../Components/Buttons/AllButton'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import { paymentItem } from '../../../Components/Types'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1300,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif,Poppins'
  }
})

const SimpleCollapsePayment = () => {
  const [checked, setChecked] = useState(false)
  const [copiedArr, setCopiedArr] = useState<paymentItem[]>([])
  const [tog, setTog] = useState(false)
  const [numberOfArrayDisplayed, setNumberOfArrayDisplayed] = useState(4)

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  useEffect(() => {
    setCopiedArr(savedCards.slice(0, numberOfArrayDisplayed))
  }, [numberOfArrayDisplayed])

  const handleShowAll = () => {
    setChecked(prev => !prev)
    setNumberOfArrayDisplayed(prev => (prev === 4 ? savedCards.length : 4))
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    copiedArr[Number(e.currentTarget.id)].hover = true

    setTog(!tog)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // setIsHovered(false)
    copiedArr[Number(e.currentTarget.id)].hover = false
    setTog(!tog)
  }

  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{
            '& > :not(style)': {
              display: 'flex',
              justifyContent: 'space-around',
              height: '100%',
              width: '100%'
            }
          }}>
          <Box sx={{}}>
            <Collapse
              sx={{
                width: '100%'
              }}
              in={!checked || checked}
              collapsedSize={numberOfArrayDisplayed * 90}>
              {copiedArr.map((items, ind) => {
                const { img, width, height, cardNumber, hover, option1, option2 } = items

                return (
                  <>
                    <Box
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      key={`${img}-${ind}`}
                      id={`${ind}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'start',
                        background: hover ? '#F0F0F0' : null,
                        py: 3,
                        px: 2
                      }}>
                      <FormControlLabel value={`details-${ind}`} control={<Radio />} label="" />
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
                        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                          <CardMedia
                            component="img"
                            src={img}
                            alt="bank logos"
                            sx={{ width: `${width}`, height: `${height}` }}
                          />
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? '12px' : '16px',
                              fontFamily: 'Poppins',
                              color: '#000'
                            }}>
                            {cardNumber}
                          </Typography>
                        </Box>
                        {hover && (
                          <Box>
                            <FormControl>
                              <FormLabel
                                id="demo-radio-buttons-group-label"
                                sx={{
                                  fontSize: '12px',
                                  fontWeight: 500,
                                  fontFamily: 'Poppins',
                                  color: '#000'
                                }}>
                                Choose an option
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={option1}
                                name="radio-buttons-group">
                                <FormControlLabel
                                  value="Pay full amount of rs.6304"
                                  control={<Radio />}
                                  label={
                                    <Typography
                                      sx={{
                                        fontSize: '12px',
                                        fontWeight: 300,
                                        fontFamily: 'Poppins',
                                        color: '#000'
                                      }}>
                                      {option1}
                                    </Typography>
                                  }
                                />
                                <FormControlLabel
                                  value={option2}
                                  control={<Radio />}
                                  label={
                                    <Typography
                                      sx={{
                                        fontSize: '12px',
                                        fontWeight: 300,
                                        fontFamily: 'Poppins',
                                        color: '#000'
                                      }}>
                                      {option2}
                                    </Typography>
                                  }
                                />
                              </RadioGroup>
                            </FormControl>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 3,
                                my: 2
                              }}>
                              <TextField
                                sx={{ width: '85px' }}
                                id="outlined-basic"
                                size="small"
                                label={
                                  <Typography
                                    component="p"
                                    sx={{
                                      color: '#949494',
                                      fontFamily: 'Poppins',
                                      fontSize: '14px'
                                    }}>
                                    cvv
                                  </Typography>
                                }
                                variant="outlined"
                              />
                              <AllButton text="Continue" />
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Divider sx={{ width: '100%', height: '1px', background: '#E0E0E0' }} />
                  </>
                )
              })}
            </Collapse>
          </Box>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            // borderTop: '2px solid #E0E0E0',
            py: 1,
            pr: 2,
            pl: 1
          }}>
          {checked ? (
            <Button
              startIcon={<ExpandLessIcon />}
              onClick={handleShowAll}
              sx={{
                color: '#1877F2',
                fontSize: isSmallScreen ? '12px' : '18px',
                fontWeight: 600,
                textTransform: 'none'
              }}>{`View less`}</Button>
          ) : (
            <Button
              startIcon={<ExpandMoreIcon />}
              onClick={handleShowAll}
              sx={{
                color: '#1877F2',
                fontSize: isSmallScreen ? '12px' : '18px',
                fontWeight: 600,
                textTransform: 'none'
              }}>{`View all saved cards`}</Button>
          )}

          <AllButton text="Add-New card" />
        </Stack>
      </Box>
    </>
  )
}
export default SimpleCollapsePayment
