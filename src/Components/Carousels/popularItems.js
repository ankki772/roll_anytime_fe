import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getPopularCategories } from "../../Api/Services/products";
export default function PopularItems() {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    getPCategories();
  }, []);
async function getPCategories(){
  const popItems = await getPopularCategories();
      console.log("ressssssssssssss", popItems);
      if (popItems?.data?.data) {
        setPopularItems([...popItems?.data?.data, ...popItems?.data?.data]);
      } else {
        setPopularItems([]);
      }
}
  console.log("oooooooooooooo", popularItems);
  // var settings1 = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,

  //   responsive: [
  //     {
  //       breakpoint: 667,
  //       settings: {
  //         slidesToShow: 3,
  //         initialSlide:0,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const settings ={
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay:true,
    speed: 500,
 
    }
  return (
    <>
      <div className="slksldrwrp">
      <h2> Multiple items </h2>
          <ul class="slksldr">
        <Slider {...settings}>
          {/* {popularItems.map((items) => {
            return (
              <>
                <figure>
                  <img
                    src={items.image}
                    alt="Mountains"
                    height="230"
                    width="200"
                  />
                  <figcaption>{items.category}</figcaption>
                </figure>
              </>
            );
          })} */}
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/amana-01.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/ranveer.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/rajeev-sen.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/shekhar-Suman.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/amana-01.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/ranveer.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/rajeev-sen.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
<li><img src="https://images.news18.com/ibnkhabar/uploads/2020/07/shekhar-Suman.jpg?impolicy=website&width=582&height=388" alt="img"/><h2>Heading 1</h2></li>
        </Slider>
</ul>
      </div>
      <style jsx>{`
      	*{margin: 0;padding: 0;list-style: none; text-decoration: none;}
       body{ margin:auto; }
       .slksldrwrp{position: relative; margin: 0 20px;}
       .slksldr{overflow: hidden; width:100%;}
       .slksldr li {margin: 0 10px;position: relative;line-height: 0;}
       .slksldr li img{width: 100%;}
       .slksldr .slick-track{  display: flex;}
       .slksldr .slick-list{overflow: hidden; margin: 0 50px;}
       .slksldr li h2{position: absolute;padding: 15px;background: rgba(0,0,0,.3);font-size: 18px;top: 0;bottom: 0;left: 0;right: 0;color: #fff;}
       .slksldr .slick-arrow{width: 40px; height: 40px; position: absolute; top:50%; margin-top: -20px; border-radius: 100%; font-size: 0; border: none; background: #ccc;}
       .slksldr .slick-arrow:before{content: "";border-right: 15px solid #fff;border-top: 8px solid transparent;border-bottom: 8px solid transparent;position: relative;left: -2px; cursor: pointer;}
       .slksldr .slick-arrow.slick-prev{left:0px;}
       .slksldr .slick-arrow.slick-next{right:0px; transform: rotate(180deg);}
       .slick-prev:before, .slick-next:before{
        font-size:0
       }
      `}</style>
    </>
  );
}
