import React from 'react'
import PopularItems from '../Components/Carousels/popularItems'
import FeaturedItems from '../Components/Carousels/featuredItems'
import FeaturedCategory from '../Components/Carousels/featuredCategory'
import TopSlider from '../Components/Carousels/topSlider'
export default function Home() {
  return (
    <>
      {/* <PopularItems/> */}
      <TopSlider/>
      <FeaturedCategory/>
      <FeaturedItems/>
    {/* <div style={{height:"800px"}}>Home Page</div> */}
    </>

  )
}
