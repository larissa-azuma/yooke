import React from "react";
import Slider from "react-slick";
import Picture1 from '../../assets/images/Picture1.png';
import Picture2 from '../../assets/images/Picture2.png';

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
  return (
    
      <Slider {...settings}>
          <img src={Picture1} alt="Picture1.png" />
          <img src={Picture2} alt="Picture2.png" />
      </Slider>
    
  );
}

export default MultipleItems;
