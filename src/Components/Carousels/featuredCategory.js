import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Image 1",
    title: "Lamborghini ",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    alt: "Image 2 ",
    title: "Porsche 911 Turbo S",
    description:
      "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Image 3",
    title: "Ford Mustang",
    description: "For offroad lovers. Super fast, Super Comfortable.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
    alt: "Image 4",
    title: "Lamborghini ",
    description:
      "Aventador SV provide thrills unlike anything that has ever been experienced before.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt: "Image 5",
    title: "Ferrari ",
    description:
      "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    alt: "Image 6",
    title: "Porsche 911",
    description:
      "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80",
    alt: "Image 7",
    title: "Dodge ",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/750x/88/33/1b/88331be20045f95b28e91e21fa663ad0.jpg",
    alt: "Image 8",
    title: "Lamborghini ",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/564x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg",
    alt: "Image 9",
    title: "2021 Mercedes",
    description:
      "Its electric motor can provide up to 184 pound-feet of torque on demand.",
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
    responsive: [ {
			breakpoint: 768,
			settings: {
				arrows: false,
				dots:true,
				infinite: false,
				slidesToShow:1.5,
				slidesToScroll:1,
				autoplay: true,
				speed:1000,
        autoplaySpeed:7000,
        gap:10
        
			}
		}]
  };
  return (
    <>
      <div className="content">
        <h1 className="header1">Car Gallery</h1>
        <div className="car-container">
          <Slider {...settings}>
            {Images.map((item) => (
              <Link to={"/"}>
                <div key={item.id} className="img_wrap">
                  <img src={item.src} alt={item.alt} className="img" loading="lazy"/>
                  <h2 className="title">{item.title}</h2>
                  {/* <p className="description">{item.description}</p> */}
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        h2 {
          font-size: 20px;
          font-family: sans-serif;
          display: flex;
          justify-content: center;
        }
        h3 {
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
        }
        .header1 {
          font-size: 42px;
        }
        .img {
          display: flex;
          margin: 0 auto;
          height: 250px;
          width: 200px;
        }
        .car-container {
          margin: 0 auto;
          width: 90%;
          border-color: white;
        }
        .car-container .img_wrap {
          position: relative;
        }
        .car-container .title {
          position: absolute;
          top: 10px;
          left: 20px;
          font-size: 15px;
          color: black;
          font-weight: bold;
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

            height:260px;
            overflow:hidden;
          }
          
                 
          .img_wrap{
            position:relative;
            width:210px
          }
          .img {
            display: flex;
            margin: 0 5px;
            height: 250px;
            width: 100%;
          }
          .car-container .slick-list{
            height:260px;
          }
          .car-container .slick-list .slick-track{
              height:260px;           
          }
          .car-container .slick-dots{
            bottom:-5px;
          }
        }
      `}</style>
    </>
  );
}
