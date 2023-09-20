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
  return <>
    <div className="featured_container">
      <div className="featured_content">
        <h2 className="f_heading">Featured Items</h2>
        <h3 className="sub_heading">Explore the featured items with best rating and reviews</h3>
        <div className="f_cards">
          <div className="featured_card">
            <div>
            <img
              alt="img"
              className="featured_image"
              src="https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
          </div>
            <div className="img_desc">
              <span>Mazda 3 sedan</span>
              <span>Rs.199/day</span>
            </div>
          </div>
          <div className="featured_card">
            <div>
            <img
              alt="img"
              className="featured_image"
              src="https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            />
          </div>
            <div className="img_desc">
              <span>Mazda 3 sedan</span>
              <span>Rs.199/day</span>
            </div>
          </div>
          <div className="featured_card">
            <div>
            <img
              alt="img"
              className="featured_image"
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
          </div>
            <div className="img_desc">
              <span>Mazda 3 sedan</span>
              <span>Rs.199/day</span>
            </div>
          </div>
          
        </div>
        <a href="#" >
        <div className="btn-container">          
            <button>More</button>
          </div>
        </a>
      </div>
    </div>
  <style jsx>{`
         body {
          font-family: "Assistant,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif";
          -webkit-font-smoothing: antialiased;
        }
    .featured_container {
      margin: 5px;
  width: 100%;
  background-color: black;
  padding: 10px 0 30px 0;
    }
    .featured_container .featured_content {
      background-color: black;
      flex-direction: column;
      width: 63%;
      margin: 10px auto;
      position: relative;
    }
    .featured_content  .f_heading {
      margin:10px 0 0 0;

      /* font-size: 18px; */
      font-weight: bold;
      color: white;
      background-color: black;
    }
    .f_cards {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
    }
   .featured_container .featured_card{
      width: 32%;
      object-fit: cover;
      position: relative;
      border: 1px solid #949d9f;
      border-radius: 5px;
   }
   .featured_container .featured_card img{
      width: 100%;
      height: 230px;
      border-radius:5px 5px 0 0
   }
   .featured_container .featured_card .img_desc{
    height: 40px;
    width:100%;
    background-color: #282C35;
    display: flex;
    justify-content: space-between;
    margin: 0 ;
    border-radius:0 0 5px 5px
   

   }
   .featured_container .featured_card .img_desc span:first-child{
      color: #ffff;
      font-size: 15px;
      font-weight: 500;
      padding:10px 5px;
   }
   .featured_container .featured_card .img_desc span:nth-child(2){
      font-size: 12px;
      color: #ffff;
      padding:12px  5px;
   }
   .featured_container .featured_card div:first-child{
      object-fit: cover;
      height: 230px;
      width: 100%;
   }
   .sub_heading{
      color:#f8f9f5;
      font-size: 13px;
      font-weight: normal;
      margin: 0 0 5px 0;
   }
   .featured_content .btn-container{
      position: absolute;
      top: 10px;
      right: 43px;
      width: 100px;
   }
button{
color: #ce5c0c;
border-color: #ce5c0c;
}
.featured_content button{
position: relative;
height: 30px;
width: 100px;
margin: 0 40px;
font-size: 20px;
font-weight: 400;
letter-spacing: 1px;
border-radius: 5px;
text-transform: uppercase;
border: 1px solid #ce5c0c;
outline: none;
cursor: pointer;
background: #0d0d0d;
overflow: hidden;
transition: 0.6s;
}
.featured_content button:before, button:after{
position: absolute;
content: '';
left: 0;
top: 0;
height: 100%;
filter: blur(30px);
opacity: 0.4;
transition: 0.6s;
}
.featured_content button:before{
width: 60px;
background: rgba(255,255,255,0.6);
transform: translateX(-130px) skewX(-45deg);
}
.featured_content button:after{
width: 30px;
background: rgba(255,255,255,0.6);
transform: translateX(-130px) skewX(-45deg);
}
.featured_content button:hover:before,
.featured_content button:hover:after{
opacity: 0.6;
transform: translateX(320px) skewX(-45deg);
}
.featured_content button:hover{
color: #f2f2f2;
}
.featured_content button:hover{
background: #ce5c0c;
}
button{
color: #ce5c0c;
border-color: #ce5c0c;
}
   @media screen and (max-width: 768px){
      .featured_container .featured_card{
          width: 100%;
      }
      .f_cards{
          gap:13px
      }
      .featured_container .featured_content{
          width:75%;
          position: relative;
      }
      .featured_content .btn-container{
            position: absolute;
            bottom: -35px !important;
         
            left: 15% !important;
            top: auto;
            
      }
   }
   .featured_content a{
  text-decoration: none;
}
  `}
  </style>
  </>
}
