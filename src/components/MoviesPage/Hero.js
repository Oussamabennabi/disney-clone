import React from 'react'
import styled from 'styled-components'
import Slideshow from './Slideshow'
import MoviesBanner from './MoviesBanner'



function Hero() {

  return (
    <Container>
      <Slideshow />
      <MoviesBanner />
    </Container>
  )
}

export default Hero

const Container = styled.div`
margin-top: 1rem;
  padding: 0 5%;

`