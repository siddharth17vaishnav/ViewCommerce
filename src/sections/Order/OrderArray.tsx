import img1 from '../../assets/images/order/Image 38.png'
import img2 from '../../assets/images/order/image 35-1.png'
import img3 from '../../assets/images/order/image 36.png'
import img4 from '../../assets/images/order/image 37.png'
import img5 from '../../assets/images/order/image 35.png'
import img6 from '../../assets/images/order/image 39.png'

import { image } from '@/Components/Types'

const order: image[] = [
  {
    img: img1
  },
  {
    img: img2
  },
  {
    img: img3
  },
  {
    img: img4
  },
  {
    img: img5
  },

  {
    img: img6
  }
]
const modernShoesProperties1 = [
  {
    name: 'Type:',
    value: 'Modern Shoes'
  },
  {
    name: 'Outer material:',
    value: 'Textile'
  },
  {
    name: 'Design:',
    value: 'Modern nice'
  }
]
const modernShoesProperties2 = [
  {
    name: 'Country of Origin:',
    value: 'Bangladesh, Vietnam, China, United States'
  },
  {
    name: 'Protection:',
    value: 'Refund Policy'
  },
  {
    name: 'Warranty:',
    value: '2 years full warranty'
  }
]
const modernShoesPropertiesSm = [
  {
    name: 'Type:',
    value: 'Modern Shoes'
  },
  {
    name: 'Material:',
    value: 'Plastic'
  },
  {
    name: 'Category:',
    value: 'shoes'
  },
  {
    name: 'Item num:',
    value: 23421
  }
]

export default { order, modernShoesPropertiesSm, modernShoesProperties1, modernShoesProperties2 }
