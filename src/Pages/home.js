import React from 'react'
import PopularItems from '../Components/Carousels/popularItems'
import FeaturedItems from '../Components/Carousels/featuredItems'
import FeaturedCategory from '../Components/Carousels/featuredCategory'
import About from '../Components/about'
export default function Home() {
  return (
    <>
      {/* <PopularItems/> */}
      <FeaturedCategory/>
      <About/>
      {/* <FeaturedItems/> */}
    {/* <div style={{height:"800px"}}>Home Page</div> */}
    </>

  )
}
