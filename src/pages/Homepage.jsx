import React from 'react'
import HeroSection from '../components/HeroSection'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const Homepage = () => {
  return (
    <>
      <HeroSection/>
      <HomeCards/>
      <JobListings isHome={true}/>
      <ViewAllJobs/>
    </>
  )
}

export default Homepage
