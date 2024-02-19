import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import SUbcategoryList from "../mobile/subcategoryList";
import ProductTable from "../mobile/productTable";
import { capitalizeFirstLetter } from "../../helpers/helper";


export default function FeaturedItems({ categoryList }) {
  const [categoryName, setCategoryName] = useState(categoryList[0]?.category_name)

  useEffect(() => {
    setCategoryName(categoryList[0]?.category_name);
  }, [categoryList[0]?.category_name])
  

  useEffect(() => {
    // ;(async () => {
    //   let result = await getProductByCategory(categoryName);
    //   console.log("result of category",result)
    //   if (result?.result.length) {
    //   }
    // })()
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <div className="prev-next-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </div>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          {" "}
          <div className="prev-next-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </div>{" "}
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          // infinite: false,
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
          autoplay: false,
          speed: 1000,
          autoplaySpeed: 7000,
          gap: 10,
        },
      },
    ],
  };

  const categoryHandler = (name)=>{
    if (isMobile) {
      // console.log("mobilecategory",name)
      setCategoryName(name);
    }

  }
  return (
    <>
      <div className="content">
        <div className="header-content">
          <h2 className="header1">Featured Category</h2>
          <div className="view-all">            
            <Link to={'/allCategory'}>View All</Link>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="14"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <div className="car-container">
          <Slider {...settings}>
            {categoryList.map((item, idx) => (
              <Link to={!isMobile?`categories/${item?.category_name}`:null} onClick={()=>categoryHandler(item?.category_name)} key={item?._id}>
                <div
                  key={item.id + "fc"}
                  className={`img_wrap ${idx === 0 ? "active_cat" : ""}`}
                >
                  <img
                    src={item?.category_images}
                    alt={item?.category_name}
                    className="img"
                    loading="lazy"
                  />
                  <h2 className="title">{capitalizeFirstLetter(item?.category_name || "")}</h2>
                  {/* <p className="description">{item.description}</p> */}
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        {/* {isMobile ? <ProductTable /> : null} */}
        {isMobile ? <SUbcategoryList categoryName={categoryName} /> : null}
      </div>

      <style jsx>{`
      .img_wrap{
        width:95%
      }
       .img_wrap h2 {
          font-size: 20px !important;
          font-family: sans-serif;
          display: flex;
          justify-content: center;
        }
       .img_wrap h3 {
          font-size: 10px;
          background-color: blue;
          display: flex;
          justify-content: center;
          border-radius: 5px;
          padding: 150px 0;
          margin: 0px auto;
          font-family: sans-serif;
          margin: 0 50px;
        }
        .content {
          text-align: center;
          margin-bottom: 30px;
          padding:5px 0 20px 0;
          background-color:#f6f6f6;
          margin-top:30px
        }
        .header1 {
          font-size: 33px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 5px;
      }
        .img {
          display: flex;
          margin: 0 auto;
          height: 250px;
          width: 100%;
        }
        .car-container {
          margin: 0 auto;
          width: 90%;
          border-color: white;
        }
        .car-container .img_wrap {
          position: relative;
        }
        
        .description {
          margin: 20px auto;
          width: 80%;
          font-size: 25px;
          margin: 20px auto;
        }
        .car-container .slick-prev {
          left: -52px !important;
        }
        
        .next-slick-arrow,
        .prev-slick-arrow {
          color: #000000;
          font-size: 45px;
        }
        .prev-next-wrap {
          height: 40px;
          width: 40px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background-color: #ccc;
        }
        .header-content{
          position: relative;
          display: flex;
        }
        .view-all{
          position:absolute;
          right:25px;
          top:10px;
        }
      
     
        @media screen and (max-width: 768px) {
          .car-container {
            margin: 0 auto;
            width: 90%;
            border-color: white;
            height:105px;
            overflow:hidden;
          }
          
                 
          .img_wrap{
            position:relative;
            width:95%
          }
          .img_wrap .title{
            border-left: 1px solid #d2c4c4;
            border-right: 1px solid #d2c4c4;
             font-size: 10px !important;
            font-weight: bold;
            height: 18px !important;
          }
          .img {
            display: flex;
            border: 1px solid #d2c4c4;
            border-radius: 5px;
            height: 100px;
            width: 100%;
            border: 1px solid #d2c4c4;
            border-radius: 5px;
          }
          .car-container .slick-list{
            height:105px;
          }
          .car-container .slick-list .slick-track{
              height:105px;           
          }
          .car-container .slick-dots{
            bottom:-5px;
          }
          .content .header1 {
            font-size: 20px;
            height: 36px;
            display: flex;
            justify-content: start;
            align-items: center;
            margin-bottom: 5px;
            padding-left: 15px;
            overflow:hidden
          }
          .active_cat{
            border: 2px solid #65a4bccc;
            opacity: 0.8;
            border-radius: 5px;
           } 
         
        }
        .img_wrap .title {
          position: absolute;
          font-size: 15px;
          color: black;
          font-weight: bold;
          bottom: 0;
          background-color: #295a57;
          width: 100%;
          opacity: 0.7;
          height: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
      }
     
      
      `}</style>
    </>
  );
}
