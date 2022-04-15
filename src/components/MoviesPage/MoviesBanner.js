import React from 'react'
import styled from 'styled-components'



function MoviesBanner() {
  return (
    <Container>
      <Cart>
        <img alt="famous-tv-show" src='/images/viewers-disney.png' />
        <video
          type="video/mp4" src="/videos/1564674844-disney.mp4" autoPlay loop />
      </Cart>
      <Cart>
        <img alt="famous-tv-show" src='/images/viewers-marvel.png' />
        <video
          type="video/mp4" src='/videos/1564676115-marvel.mp4' autoPlay loop />
      </Cart>
      <Cart>
        <img alt="famous-tv-show" src='/images/viewers-pixar.png' />
        <video
          type="video/mp4" src='/videos/1564676714-pixar.mp4' autoPlay loop />
      </Cart>
      <Cart>
        <img alt="famous-tv-show" src='/images/viewers-starwars.png' />
        <video
          type="video/mp4" src='/videos/1608229455-star-wars.mp4' autoPlay loop />
      </Cart>
      <Cart>
        <img alt="famous-tv-show" src='/images/viewers-national.png' />
        <video
          type="video/mp4" src='/videos/1564676296-national-geographic.mp4' autoPlay loop />
      </Cart>
    </Container>
  )
}

export default MoviesBanner


const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(5,1fr);
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1%;
  gap: 1rem;
  @media screen and (max-width: 1139px){
    grid-template-columns: repeat(2,1fr);
  }
  @media screen and (max-width: 727px){
    grid-template-columns: repeat(1,1fr);
  }
`
const Cart = styled.div`
  position: relative;
  border-radius: .7rem;
  outline: 2px solid rgb(101,99,107);
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  transition: all .15s ease-in;
  box-shadow: 0 20px 15px black;
  &::before {
    content: "";
    background-color: rgb(35,40,47);
    position: absolute;
    inset: 0;
    transition: all .1s ease-in;
  }
  video {
    width: 100%;
  }
  video::-webkit-media-controls {
    display:none !important;
}
  img {
    position: absolute;
    width: 100%;
    margin: auto;
    inset: 0;
  }
  &:hover::before {
    background-color: transparent;
  }
  &:hover {
    transform: scale(1.02);
    outline: 2px solid white;
  }
  &:hover video {

  }
`
