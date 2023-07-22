export interface SwiperContent {
  id?: number | string
  image?: string
  alt?: string
  cardNo?: number | string
  color?: string
  shadow?: string
  img?: string
  Ellipse?: string[]
  text?: string
  amount?: string
  renderSlideContent?: () => JSX.Element
}

export interface SwipeProps {
  swiperContent?: SwiperContent[]
  renderSlideContent?: (content: SwiperContent) => JSX.Element | null
}

export interface CardDetailsType {
  cardNo: number | string
  color?: string
  shadow?: string
  img?: string
  Ellipse?: string[]
  text?: string
  amount?: string
}

export interface ImageDetails {
  img: string
  text: string
}

export interface CardsProps {
  cards: CardDetailsType[]
  images?: ImageDetails[]
}
export interface Item {
  icon: React.ComponentType
  text: string
}

export interface MenuItem {
  title: string
  submenu?: MenuItem[]
}
export interface image {
  img: string
}
