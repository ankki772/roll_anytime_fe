import React from 'react'
import PopularItems from '../Components/Carousels/popularItems'
import FeaturedItems from '../Components/Carousels/featuredItems'
import FeaturedCategory from '../Components/Carousels/featuredCategory'
export default function Home() {
  return (
    <>
      <PopularItems/>
      <FeaturedCategory/>
      {/* <FeaturedItems/> */}
    {/* <div style={{height:"800px"}}>Home Page</div> */}
    </>

  )
}
