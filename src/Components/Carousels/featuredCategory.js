import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import SUbcategoryList from "../mobile/subcategoryList";

const Images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    alt: "Image 1",
    Category: "Camera",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    alt: "Image 2 ",
    Category: "Lights",
    description:
      "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
    alt: "Image 3",
    category: "Cabs",
    description: "For offroad lovers. Super fast, Super Comfortable.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Image 4",
    category: "Food ",
    description:
      "Aventador SV provide thrills unlike anything that has ever been experienced before.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    alt: "Image 5",
    category: "Makeup ",
    description:
      "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1611425094224-ab2b0eab0458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3Jld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Image 6",
    category: "Crew",
    description:
      "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Image 7",
    category: "Wardrobe",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
];

export default function featuredItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
              class="bi bi-caret-right-fill"
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
              class="bi bi-caret-left-fill"
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
          infinite: false,
          slidesToShow: 3.5,
          slidesToScroll: 1,
          autoplay: false,
          speed: 1000,
          autoplaySpeed: 7000,
          gap: 10,
        },
      },
    ],
  };
  return (
    <>
      <div className="content">
        <h2 className="header1">Featured Category</h2>
        <div className="car-container">
          <Slider {...settings}>
            {Images.map((item, idx) => (
              <Link to={"/"}>
                <div
                  key={item.id + "fc"}
                  className={`img_wrap ${idx === 0 ? "active_cat" : ""}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="img"
                    loading="lazy"
                  />
                  <h2 className="title">{item?.category || ""}</h2>
                  {/* <p className="description">{item.description}</p> */}
                </div>
              </Link>
            ))}
          </Slider>
        </div>
        {isMobile ? <SUbcategoryList /> : null}
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
