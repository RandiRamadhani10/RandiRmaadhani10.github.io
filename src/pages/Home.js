import React from 'react'
import SectionCover from '../section/SectionCover'
import SectionAbout from '../section/SectionAbout'
import SectionServices from '../section/SectionServices'

const Home = () => {
  return (
    <div>
      {/* cover */}
      <SectionCover/>

      {/* section about */}
      <SectionAbout/>

      {/* section services */}
      <SectionServices/>
    </div>
  )
}

export default Home