import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Searchfilter from "../Components/bottomstrip";
import { products } from "../dummyprd";
import SortbyDrawer from "./sortbyDrawer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getAllItems, getPopularItems, getProductByCategory } from "../Api/Services/products";
import { capitalizeFirstLetter } from "../helpers/helper";
function Prdlist() {
  let { category_name } = useParams();
  const { pathname } = useLocation();
  const [productList, setProductList] = useState([])
  useEffect(() => {
    ; (async () => {
      try {
        if (category_name) {
          let result = await getProductByCategory(category_name);
          if (result?.result.length) {
            setProductList(result?.result)
          }
        }
        else if (pathname == '/popularItem') {
          let result = await getPopularItems();
          if (result?.result.length) {
            setProductList(result?.result)
          }
        }
        else {
          let result = await getAllItems();
          if (result?.result.length) {
            setProductList(result?.result)
          }
        }

      } catch (error) {

      }

    })()



  }, [])

  return (
    <>
      <section className="sc-hokXgN fKSTpe">
        {productList && productList.length ?
          productList.map((product, id) => {
            return (
              <>
                <div className="sc-bke1zw-0 fIuLDK" key={product?._id}>
                  <div className="sc-bke1zw-1 hWGQVf">
                    <div>
                      <Link to={`/product/${product?.product_id}`}>
                        <section className="sc-hQfrgq jsPkKi">
                          <div className="sc-s1isp7-1 gMhjmN sc-fxMfqs gYVtRh">
                            <div className="sc-s1isp7-3 cVOEqG"></div>
                            <img className="sc-s1isp7-5 fyZwWD" src={product?.product_imges[0]} />

                          </div>
                          <section className="sc-rzOft kLNdwA"></section>
                        </section>
                        <div className="sc-jklikK fomxOG">
                          <h3 className="sc-fxmata sc-izfUZz kiIscI">{capitalizeFirstLetter(product?.product_name)}</h3>
                          <div className="sc-eqGige dKRZxZ">
                            {/* {product?.product_description} */}
                            {`${product?.product_description.substring(0, 70)}${product?.product_description.length > 70 ? '...' : null}`}
                          </div>
                          <div className="sc-eqGige dKRZxZ">
                            <span style={{ color: 'black' }}>Price : </span>   Rs. {product?.pricing}
                          </div>

                        </div>
                      </Link>
                    </div>

                  </div>

                </div>
              </>
            )


          }) : null}
      </section>
      <style jsx>
        {`


  .fIuLDK {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding:10px
}
.hWGQVf {
  position: relative;
  width: 100%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 25%;
  padding: 0px 15px 20px 0px;
  border-radius:24px
}
.gYVtRh {
  border-radius: inherit;
}
.gMhjmN {
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.cVOEqG {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  background: linear-gradient(to right, rgb(248, 248, 248) 0%, rgb(255, 255, 255) 10%, rgb(248, 248, 248) 40%, rgb(248, 248, 248) 100%) no-repeat rgb(248, 248, 248);
  opacity: 0;
  transition: opacity 0.25s ease-out 0s;
  will-change: opacity;
  border-radius: inherit;
  animation: 1.5s linear 0s infinite normal forwards running jCOzbu;
}
.fyZwWD {
  width: 100%;
  height: 252px;
  object-fit: fill;
  transform: none;
  opacity: 1;
  will-change: transform, opacity;
  border-radius: inherit;
  filter: unset;
  transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
}
.kLNdwA {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 0.6rem;
  width: 100%;
  height: 100%;
}
.fomxOG {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.kiIscI{
  white-space: nowrap;
    display: inline;
    font-size: 1.8rem;
    line-height: 1.5;
    color: rgb(28, 28, 28);
}
.dKRZxZ {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  color: rgb(79, 79, 79);
    font-weight: 400;
}
@media screen and (max-width: 480px){

  .hWGQVf {
    padding: 0px 0px 20px !important;
    max-width: 100% !important;
    border-radius:24px;
    background:#ecf0f1;
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
}
.kLNdwA {
  border-radius: 1.6rem 1.6rem 1.6rem 1.6rem;
}
.fomxOG {
  padding: 0px 1.2rem;
 
}

.kiIscI {
  font-size: 1.9rem;
  font-weight: 400;
  margin-top: 0.8rem;
}
.dKRZxZ {
  margin-top: 0px;
  line-height: 1.6rem;
  font-size: 1.2rem;
}
.jsPkKi{
  border-radius:24px  24px 0 0;
}
}
  `}

      </style>

    </>
  );
}
export default React.memo(Prdlist);
