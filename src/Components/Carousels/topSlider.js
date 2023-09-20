import React from 'react'
import { topSliderCategory } from '../../dummyprd';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
export default function TopSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
       
      };
  return (
   <>
   <div className='myx-indexContainer'>
    <div className='myx-stretch'>
       <div className='carousel-base'>
       <Slider {...settings}>
            {topSliderCategory.map((item) => (
             
                 <div className='container-base myx-stretch'>
                    <div style={{paddingBottom:"50px"}}>
                        <div className='container-container container-aspectContainer'>
                            <div className=' row-base'>
                                <div className=' column-base'>
                                    <Link to='/'>
                                           <img className='image-image image-hand' src={item.img_url} alt=''/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>            
            ))}
          </Slider>
       </div>
    </div>
   </div>
   <style jsx >
    {`
    .myx-indexContainer{
        height:400px;
        overflow:hidden;
        background-color:#f6f6f6;
        margin-top:10px
    }
   
    .myx-indexContainer>div.myx-stretch {
        max-width: 100%;
        height:400px
    }
    .myx-indexContainer>div {
        margin: 0 auto;
    }
    .carousel-base {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-top: 20px;
        padding-bottom: 15px;
        margin: 0 auto;
    }
    .container-base {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
    }
    .container-container {
        margin: 0 auto;
    }
    .container-aspectContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .row-base {
        display: flexbox;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
    }
    .column-base {
        -webkit-box-direction: normal;
        -ms-flex-item-align: start;
        align-self: flex-start;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-orient: vertical;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-box-flex: 1;
        flex: 1 1 0%;
    }
    .slick-slide img {
        display: block;
    }
    .image-image {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
    img {
        border-style: none;
    }
    .image-hand {
        cursor: hand;
    }
    .myx-stretch{
           height:340px
    }
    @media screen and (max-width: 768px){
        .myx-indexContainer{
            height:240px;
            overflow:hidden
        }  
        .carousel-base .slick-slider{
            height:200px;
            background-color: rgb(247, 239, 237)
        }
        .image-image {
            height:200px
        }
        .myx-stretch{
            height:240px
     }
    }
    `}
   </style>
   </>
  )
}
