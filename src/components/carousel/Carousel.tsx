import { useState } from 'react';
import produto from '../../data/produto.json';
import Item from './item/Item';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.scss'


function Carousel() {
  const [lista] = useState(produto);

  const itens = lista.products.map((item) => (
    <div className='carouselItem'>
      <Item key={item.productName} {...item}/>
    </div>
  ));

  const responsive = {
    0: {
        items: 2,
    },
    512: {
        items: 4,
    },
  };
  
  return (
    <div className='carousel'>
      <AliceCarousel
        mouseTracking
        infinite
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls={false}
        responsive={responsive}
        items={itens}
        autoPlay={false}
      />
    </div>
  )
}

export default Carousel