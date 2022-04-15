import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const slideImages = [
  {
    url: "/images/slider-badag.jpg"
  },
  {
    url: "/images/slider-badging.jpg"
  }, {
    url: "/images/slider-scale.jpg"
  }, {
    url: "/images/slider-scales.jpg"
  }
]
function Slideshow() {
  return (

      <CustomSlider {...settings}>
        {slideImages.map((img, i) => {
          return <SlideImage key={i} src={img.url} className="single-slide" >
          </SlideImage>

        })}
      </CustomSlider>
  )
}

export default Slideshow

const CustomSlider = styled(Slider)`
ul li button {
  &::before {
    margin-top: 2rem;
    font-size: 1rem;
  }
}
li.slick-active button::before {
  color: white;
}
.slick-list {
  overflow: visible;

}
margin-bottom: 6rem;
button.slick-arrow.slick-prev {
  z-index: 1;
}
`
const SlideImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 20px 15px black;
  border-radius: .5rem;
  transition: all .2s ease-in-out;
  border: 4px solid rgb(41,46,62);
  &:hover {
    outline: 4px solid white;
    transform: scale(.98);

  }
`