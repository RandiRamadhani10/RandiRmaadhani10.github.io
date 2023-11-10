import React from 'react'
import SectionCover from '../section/SectionCover'
import SectionAbout from '../section/SectionAbout'
import SectionServices from '../section/SectionServices'
import SectionPortfolio from '../section/SectionPortfolio'
import SectionSkills from '../section/SectionSkills'

const Home = () => {
  return (
    <div>
      {/* cover */}
      <SectionCover/>

      {/* section about */}
      <SectionAbout/>

      {/* section services */}
      <SectionServices/>

      {/* section portfolio */}
      <SectionPortfolio/>

      {/* section skills */}
      <SectionSkills/>
    </div>
  )
}

export default Home