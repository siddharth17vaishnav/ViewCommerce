import React, { useEffect, useState } from 'react'
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
import { Autoplay, Pagination } from 'swiper/modules'

interface SwiperContent {
  id?: number
  image?: string
  alt?: string
  cardNo?: number
  color?: string
  shadow?: string
  img?: string
  Ellipse?: string[]
  text?: string
  amount?: string
}

interface SwipeProps {
  swiperContent: SwiperContent[]
  renderSlideContent: (content: SwiperContent) => JSX.Element
}

const Swipe: React.FC<SwipeProps> = ({ swiperContent, renderSlideContent }) => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const [activeIndex, setActiveIndex] = useState(0) // State to store the active index

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }
  useEffect(() => {
    console.log(activeIndex)
  }, [activeIndex])

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: false,
        renderBullet: function (index, className) {
          return `<span class="${className}" style="background-color: white;"></span>`
        }
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      onSlideChange={handleSlideChange}
      className="mySwiper">
      {swiperContent.map(content => (
        <SwiperSlide key={content.id}>{renderSlideContent(content)}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Swipe
