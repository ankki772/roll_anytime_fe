import { React,useEffect,useState } from 'react'
import PopularItems from '../Components/Carousels/popularItems'
import FeaturedItems from '../Components/Carousels/featuredItems'
import FeaturedCategory from '../Components/Carousels/featuredCategory'
import About from '../Components/about'
import TopSlider from '../Components/Carousels/topSlider'
import { getAllCategories } from '../Api/Services/category'
import { getPopularItems } from '../Api/Services/products'
export default function Home() {

  const [categoryList, setCategoryList] = useState([])
  const [populatItems, setPopulatItems] = useState([])

  useEffect(() => {
    getAllCategoylist();
    getpopularItemslist();
  }, [])
  
  async function getAllCategoylist(){
    const categoriesList = await getAllCategories();
        if (categoriesList?.result) {
          setCategoryList(categoriesList?.result)
        } else {
          setCategoryList([]);
        }
  }
  async function getpopularItemslist(){
    const popItems = await getPopularItems();
        console.log("ressssssssssssss", popItems);
        if (popItems?.result) {
          setPopulatItems(popItems?.result)
        } else {
          setPopulatItems([]);
        }
  }

  return (
    <>
      {/* <PopularItems/> */}
      <TopSlider/>
      {/* <FeaturedCategory categoryList={categoryList}/> */}
      <FeaturedCategory/>
      <FeaturedItems populatItem = {populatItems}/>
      {/* <FeaturedItems/> */}
      <About/>
    {/* <div style={{height:"800px"}}>Home Page</div> */}
    </>

  )
}
