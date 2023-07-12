import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Image 1",
      title: "Lamborghini Huracan Performante",
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
      description: 
        "For offroad lovers. Super fast, Super Comfortable.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
      alt: "Image 4",
      title: "Lamborghini Aventador SV",
      description:
        "Aventador SV provide thrills unlike anything that has ever been experienced before.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Image 5",
      title: "Ferrari 458 Speciale",
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
      title: "Dodge Challenger",
      description:
        "The Challenger has a classic muscle-car interior, with a simple design",
    },
    {
      id: 8,
      src: "https://i.pinimg.com/750x/88/33/1b/88331be20045f95b28e91e21fa663ad0.jpg",
      alt: "Image 8",
      title: "Lamborghini Gallardo",
      description:
        "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
    },
    {
      id: 9,
      src: "https://i.pinimg.com/564x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg",
      alt: "Image 9",
      title: "2021 Mercedes-AMG GLE53 Coupe electrifies",
      description:
        "Its electric motor can provide up to 184 pound-feet of torque on demand.",
    },
  ];
  

export default function featuredItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: (
            <div>
              <div className="next-slick-arrow"> ⫸ </div>
            </div>
          ),
        prevArrow: (
            <div>
              <div className="prev-slick-arrow"> ⫷ </div>
            </div>
          ),
      };
  return (
    <>
 <div className="content">
      <h1 className="header1">Car Gallery</h1>
      <div className="container">
        <Slider {...settings}>
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="img" />
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>

   <style jsx>{
    `
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
        height: 40vh;
        width: 80%;
        border-radius: 5%;
      }
      .container {
        margin: 0 auto;
        width: 100%;
        height: 80vh;
        border-color: white;
      }
      .title {
        margin-left: 50px;
        width: 70%;
        font-size: 30px;
        padding: 20px;
        border-radius: 5px;
        font-size: 33px;
      }
      .description {
        margin: 20px auto;
        width: 80%;
        font-size: 25px;
        margin: 20px auto;
      }
      .slick-prev {
        left: -52px !important;
      }
      .slick-next:before,
      .slick-prev:before {
        content: "" !important;
      }
      .next-slick-arrow,
      .prev-slick-arrow {
        color: #000000;
        font-size: 45px;
      }   
    `
}</style>
    </>
  )
}
