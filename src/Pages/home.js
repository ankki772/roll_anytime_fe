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
        if (popItems?.result) {
          setPopulatItems(popItems?.result)
        } else {
          setPopulatItems([]);
        }
  }

  return (
    <>
      <div className='homeContainer'>
      <TopSlider/>
      <FeaturedCategory categoryList={categoryList}/>
      <FeaturedItems populatItem = {populatItems}/>
      <About/>
      </div>
      <style jsx='true'>{`
      @media screen and (max-width: 768px) {
        .homeContainer {
          position:relative;
          width: 95%;
          margin: 15px auto;
          top: 75px;
          margin-bottom: 140px;
        }
      }
      `}</style>
    </>

  )
}
