import React, { useEffect } from 'react'
import Header from './Header'
import styled from 'styled-components'
import Hero from './Hero'
import MoviesSlider from './MoviesSlider'
import db from '../../firebase'
import {  collection, query, where, getDocs } from "firebase/firestore";

const images = [
  {
    url: '/images/gridImages/1.jpeg',
    id: 1
  }, {
    url: '/images/gridImages/2.png'
    ,
    id: 2
  }, {
    url: '/images/gridImages/3.png',
    id: 3
  }, {
    url: '/images/gridImages/4.png'
    ,
    id: 4
  }, {
    url: '/images/gridImages/5.jpeg'
    , id: 5

  }, {
    url: '/images/gridImages/6.png'
    , id: 6

  }, {
    url: '/images/gridImages/7.jpeg'
    , id: 7

  }, {
    url: '/images/gridImages/8.jpeg'
    , id: 8

  }, {
    url: '/images/gridImages/9.jpeg'
    , id: 9

  }
]
function MoviesPage() {
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "movies"), where("capital", "==", true))
      console.log(q)
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        console.log(doc.data())
      })
    }
    getData()
  },[])
  return (
    <Wrap url="/images/home-background.png" className='MoviesPage'>
      <Header />
      <Hero />

      <MoviesSlider moviesImages={images} />
      <MoviesSlider moviesImages={images} />
      <MoviesSlider moviesImages={images} />
      <MoviesSlider moviesImages={images} />
    </Wrap>
  )
}

export default MoviesPage
const Wrap = styled.main`
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;

`