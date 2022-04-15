import React from 'react'
import Artical from './Artical'
import Header from './Header'
import PhotoGrid from './PhotoGrid'
import Questions from './Questions'
import { Section } from './Section'
import SignUp from './SignUp'

function Home() {
  return (
    <main className='Home'>
      <Header />
      <Section />
      <PhotoGrid />
      <SignUp />
      <Artical />
      <Questions/>
    </main>
  )
}

export default Home