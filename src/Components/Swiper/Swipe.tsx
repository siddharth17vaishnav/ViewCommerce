import { Swiper, SwiperSlide } from 'swiper/react'
// import banner from '../../assets/Banner.png'

import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import { SwipeProps } from '../Types'

const Swipe: React.FC<SwipeProps> = ({
  swiperContent,
  renderSlideContent,
  SwiperGroup,
  renderCard
}) => {
  const theme = useTheme()
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      navigation={swiperContent ? false : true}
      pagination={{
        // dynamicBullets: swiperContent ? true : false,
        clickable: true,
        ...(swiperContent
          ? {
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: white;"></span>`
              }
            }
          : {
              renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: transparent;"></span>`
              }
            })
      }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper">
      {swiperContent?.map(content => (
        <SwiperSlide key={content.id}>
          {renderSlideContent && renderSlideContent(content)}
        </SwiperSlide>
      ))}
      {SwiperGroup?.map((group, groupIndex) => (
        <SwiperSlide
          style={{
            display: 'flex'
          }}
          key={groupIndex}>
          {group.map((card, cardIndex) => {
            return (
              <Box
                sx={{
                  width: '100%',
                  mx: cardIndex === 1 && !isMediumScreen ? 3 : 0,
                  ml: cardIndex === 1 ? 3 : 0
                }}
                key={cardIndex}>
                {renderCard && renderCard(card)}
              </Box>
            )
          })}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Swipe
