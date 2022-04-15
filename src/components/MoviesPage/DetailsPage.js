import React from 'react'
import styled from 'styled-components'
import Header from './Header'
const DetailsPage = () => {
  return (
    <Container imgUrl="/images/gridImages/2.png">
      <Header />
      <MovieInfo>
        {/* <img/> */}
        <ButtonsContainer>
          <div className='btns'>
          <button className='btn-play'><img src='/images/play-icon-black.png' alt='play' />PLAY</button>
          <button className='btn-trailer'><img src='/images/play-icon-white.png' alt='trailer' />TRAILER</button>

          </div>
          <div className='icons'>
          <img className="icon" src='/images/watchlist-icon.svg' alt='watchlist' />
          <img className="icon" src='/images/group-icon.png' alt='group-icon' />

          </div>
        </ButtonsContainer>
        <MovieDescription>
          <h5 className='movie-stats'>2018&#x2022;7m&#x2022;Family,Fantasy,Kids,Animation</h5>
          <p className='movie-description'>
            Enim aliquip dolore pariatur magna veniam esse qui.Enim aliquip dolore pariatur magna veniam esse qui.Enim aliquip dolore pariatur magna veniam esse qui.
          </p>
        </MovieDescription>
      </MovieInfo>
    </Container>
  )
}

export default DetailsPage
const Container = styled.main`
  min-height: 100vh;
  background-image: url(${(porps) => porps.imgUrl});
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  // overlay :

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,.25);

  }
  background-size: cover;
`
const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: calc(100vh - 10vh);
  padding: 0 30% 0 5%;
  position: relative;
`
const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
  .btns {
    display: flex;
    gap: 1rem;
  }
  .icons {
    display: flex;
    gap: 1rem;
  }
  button {
    border-radius: 0.2rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: 2px solid white;
    padding: 0.6rem 1.4rem;
    font-size: 1.2rem;
    transition: all 250ms ease-in-out;
  }
  .btn-play {
    background-color: #eee;
    &:hover {
      opacity: .9;
    }
  }
  .btn-trailer {
    background-color: rgba(0,0,0,.3);
    color: white;
    &:hover {
    background-color: rgba(0,0,0,.7);
    }
  }
  .icon {
    cursor: pointer;
    width: 40px;
    outline: 2px solid white;
    background-color: rgba(0,0,0,.5);
    border-radius: 50%;
    padding: 0.2rem;

  }
  @media screen and (max-width:456px){
    flex-direction: column;
    align-items: flex-start;
    button {
      margin-bottom: 1rem;
      transform: scale(.88);
    }
  }
`
const MovieDescription = styled.div`
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
    /* background-color: rgba(0,0,0,.5); */
    .movie-stats {
      padding-bottom: 2rem;
      font-weight: normal;
    }
  
`