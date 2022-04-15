import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: false,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  variableWidth: true,
};
const MoviesSlider = ({title,moviesImages}) => {

  return (
    <>
      <MoviesTitle>
        {title}
        somme recomondations
      </MoviesTitle>
    <CustomSlider {...settings}>
        {moviesImages.map((movie, i) => (
          <Link key={i} to={`/details/${movie.id}`}>
            <Movie style={{width:300}}  src={movie.url}/>
          </Link>
        ))}
    </CustomSlider>
    </>
  )
}

export default MoviesSlider
const CustomSlider = styled(Slider)`
  padding: 0 5%;

 .slick-slide {
      margin: 0 1.4rem;
  }

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

      margin: 2rem .45rem;
}
margin-bottom: 6rem;
button.slick-arrow.slick-prev {
  z-index: 1;
}
button.slick-arrow {
  height: 100%;
  width: 35px;
  margin-inline: 2rem;
  }
`

const Movie = styled.img`
  border-radius: .7rem;
  min-height: 100%;
  cursor: pointer;
  object-fit: cover;
  box-shadow: 0 20px 15px black;

  outline: 3px solid rgb(41,46,62);
  transition: all .2s ease-in-out;
  &:hover {
    outline: 3px solid white;
    transform: scale(1.03);
  }
`
const MoviesTitle = styled.h1`
  color: white;
  margin-top: 3rem;
  padding-left: .45rem;
`