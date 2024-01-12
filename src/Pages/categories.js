import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../Api/Services/category';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../helpers/helper';

export default function Categories() {
  const [categoriesList, setCategoriesList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    ; (async () => {
      const categoriesList = await getAllCategories();
      if (categoriesList?.result) {
        setCategoriesList(categoriesList?.result)
      } else {
        setCategoriesList([]);
      }
    })()
  }, [])

  return (<>
    <div class="item">

      {categoriesList && !!categoriesList.length && categoriesList.map((item) => {
        return (
          <div class="card" onClick={()=>{navigate(`/categories/${item?.category_name}`)}}>
            <div class="pos" style={{backgroundImage:`url(${item?.category_images})`,color:"red"}}><div class="abv abv1">{capitalizeFirstLetter(item?.category_name)}</div></div>
            <h2>"Italian Spicy cuisine"</h2>
          </div>
        )
      })}
    </div>
    <style jsx>{`

.item{
  justify-content: space-around;
   align-content: center;
   border-image-slice: 1;
   min-height: 100vh;
   display: grid;
   grid-template-columns: auto auto auto;
   
}
 .pos{
   height: 350px;
   width: 350px;
  //  background-image: url(https://images.pexels.com/photos/772513/pexels-photo-772513.png?auto=compress&cs=tinysrgb&dpr=1&w=500);
   background-size: 350px;
   background-position: center;
   transition: .5s;
   background-repeat: no-repeat;
}

.card {
  margin: 40px;
  width: 350px;
  display: grid;
  justify-content: center;
  height: 500px;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  transition: .5s;
  border: 1px solid;
  background: #eee;
  box-shadow: 0 8px 8px -4px lightblue;
}
.card>img{
    width: 350px;
}
.abv{
   margin-top: 40%;
   padding: 30px;
   font-size: 25px;
   font-family: nyala;
   font-weight: bolder;
   color: #442b41;
   background: rgba(255,255,255,.5);

}
.card>h2{
   text-align: center;
   font-family: Gabriola;
   color: #442b41;
   font-size: 30px;
}
.pos:hover{
   background-size: 400px;
}
@media(max-width: 720px){
 .item{
   grid-template-columns: auto;
 }
}`}</style>
  </>
  )
}
