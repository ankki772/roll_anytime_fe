import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SliderCommon from '../Components/common/slideImg';
import { getProductDetails } from '../Api/Services/products';
import SelectPackage from '../Components/mobile/selectPackage';

export default function Productdetail() {
  const {product_id} = useParams();
  console.log("product id " , product_id)
  const [productDetail, setProductDetail] = useState({})

useEffect(() => {
  ;(async()=>{
    let result = await getProductDetails(product_id);
    if (result?.result.length) {
        setProductDetail(result?.result[0])
    }
  })()

 
}, [])

  return (
  <>
  <div className = "card-wrapper">
  <div className = "product_card">
  
    <div className = "product-imgs">
      <div className = "img-display">
        <SliderCommon topSliderCategory={productDetail?.product_imges||[]} detail/>       
      </div>
     
    </div>
    
    <div className = "product-content">
      <h2 className = "product-title">{productDetail?.product_name}</h2>
    

      <div className = "product-price">
        <p className = "new-price">Price: <span>Rs.{productDetail?.pricing}</span></p>
      </div>

      <div className = "product-detail">
        <h2>About this item: </h2>
        <p>{productDetail?.product_description}</p>
        <ul>
          <li>Select Packs: <SelectPackage/></li>
          {/* <li>Available: <span>in stock</span></li>
          <li>Category: <span>Shoes</span></li>
          <li>Shipping Area: <span>India</span></li>
          <li>Shipping Fee: <span>Free</span></li> */}
        </ul>
      </div>

      <div className = "purchase-info">
        <button type = "button" className = "btn">
          Add to Cart <i className = "fas fa-shopping-cart"></i>
        </button>
      </div>

    </div>
  </div>
</div>
<style jsx>
  {
    `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}

.card-wrapper{
    max-width: 1100px;
    margin: 0 auto;
}
img{
    width: 100%;
    display: block;
}
.img-showcase{
    display: flex;
    width: 100%;
    transition: all 0.5s ease;
}
.img-showcase img{
    min-width: 100%;
    border-radius:30px;
}
.img-select{
    display: flex;
}
.img-item{
    margin: 0.3rem;
}
.img-item img{
  border-radius:10px;  
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
    margin-right: 0;
}
.img-item:hover{
    opacity: 0.8;
}
.product-content{
    padding: 2rem 1rem;
}
.product-title{
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
}
.product-title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    background: #12263a;
}
.product-link{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
}
.product-link:hover{
    opacity: 0.9;
}
.product-rating{
    color: #ffc107;
}
.product-rating span{
    font-weight: 600;
    color: #252525;
}
.product-price{
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
}
.product-price span{
    font-weight: 400;
}
.last-price span{
    color: #f64749;
    text-decoration: line-through;
}
.new-price span{
    color: #256eff;
}
.product-detail h2{
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
}
.product-detail p{
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
}
.product-detail ul{
    margin: 1rem 0;
    font-size: 0.9rem;
}
.product-detail ul li{
    margin: 0;
    list-style: none;
    // background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png) left center no-repeat;
    background-size: 18px;
    // padding-left: 1.7rem;
    margin: 0.4rem 0;
    font-weight: 600;
    opacity: 0.9;
}
.product-detail ul li span{
    font-weight: 400;
}
.purchase-info{
    margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn{
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
}
.purchase-info input{
    width: 60px;
}
.purchase-info .btn{
    cursor: pointer;
    color: #fff;
}
.purchase-info .btn:first-of-type{
    background: #256eff;
}
.purchase-info .btn:last-of-type{
    background: #f64749;
}
.purchase-info .btn:hover{
    opacity: 0.9;
}
.social-links{
    display: flex;
    align-items: center;
}
.social-links a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #000;
    border: 1px solid #000;
    margin: 0 0.2rem;
    border-radius: 50%;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.5s ease;
}
.social-links a:hover{
    background: #000;
    border-color: transparent;
    color: #fff;
}
.product_card{
  padding:10px;
}
.img-display{
  max-width:500px
}
.img-display .slick-slide img{
  height:100%
}
@media screen and (min-width: 992px){
    .product_card{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        padding:10px;
    }
    .img-display{
      margin-top:32px;
    }
    .card-wrapper{
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-imgs{
        display: flex;
        flex-direction: column;

    }
    .product-content{
        padding-top: 0;
    }
    img-display .slick-slider{
      height:100%
    }
}
    `
  }
</style>
  </>
  )
}
