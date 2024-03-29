import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchfilter from "../Components/bottomstrip";
import { products } from "../dummyprd";
import SortbyDrawer from "./sortbyDrawer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getAllItems } from "../Api/Services/products";
function Prdlist() {

  const [productList, setProductList] = useState([])
  useEffect(() => {
    // getpopularItemslist();
    ;(async()=>{
      let result = await getAllItems();
      console.log("sjbkjbaklka",result)
      if (result?.result.length) {
        setProductList(result?.result)
      }

    })()

  
    
  }, [])
  
  return (
    <>
    {console.log("djvmsnkdvnlsdcls",productList)}
      {/* <Searchfilter /> */}
      {/* <SortbyDrawer/> */}
      {/* <ul className="list">
        {products.map((prd, idx) => {
          return (
            <>
              <li
                className={`${
                  idx === 0
                    ? "item top-border itemBorderRight"
                    : idx === 1
                    ? "item top-border"
                    : idx % 2 === 1
                    ? "item "
                    : "item itemBorderRight"
                }`}
                key={`${idx}_prd`}
              >
                <div className="searchProduct">
                  <Link to="/">
                    <div className="ripple-container">
                      <div className="LazyLoad  is-visible">
                        <LazyLoadImage
                          src={prd?.img_url}
                          className="img-responsive preLoad loaded"
                          alt="Image Alt"
                          placeholderSrc={roll_anytime}
                          effect="blur"
                        />
                      </div>
                    </div>
                    <div className="content-wrap">
                      <div className="text-md price-wrap text-sm">
                        <h3 className="prod-title text-md">
                          {prd?.title || ""}
                        </h3>
                        <h4 className="description text-sm">
                          {prd?.desc || ""}
                        </h4>
                        <div className="price-container">
                          <span className="price">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 24 24"
                              className="rupees"
                              fill="#282C3F"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h24v24H0z" opacity="0"></path>
                                <path
                                  fill="#282C3F"
                                  d="M7 6.215h4.962v2.43H7.505L7.13 9.858h4.764a3.05 3.05 0 01-.827 1.539 2.99 2.99 0 01-2.022.895l-1.361-.003a.304.304 0 00-.214.519l6.717 6.779 1.697-.004-6.107-6.16a4.193 4.193 0 002.14-1.167 4.256 4.256 0 001.198-2.398h2.474l.376-1.215h-2.799v-2.43h3.496V5H7v1.215z"
                                ></path>
                              </g>
                            </svg>
                            <span className="price-value">{prd?.price}</span>
                          </span>
                          <span>
                            <span className="orig-price price-font">
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 9 10"
                                className="strike-rupees"
                              >
                                <g fill="#282C3F">
                                  <path d="M1.951 5.845l3.91 3.602-.902.376L.7 5.845l.452-.711c.186-.005.392-.02.615-.048a5.2 5.2 0 001.347-.356c.218-.09.42-.201.604-.331.185-.13.345-.281.479-.455.134-.173.231-.371.29-.594H.865v-.841h3.644a1.759 1.759 0 00-.284-.667 1.826 1.826 0 00-.567-.512 2.964 2.964 0 00-.865-.332A5.22 5.22 0 001.63.882H.864V0h6.2v.882H4.18c.173.077.33.174.468.29a2.09 2.09 0 01.612.848c.064.162.11.325.137.489h1.668v.84H5.383a2.38 2.38 0 01-.43 1.03 3.095 3.095 0 01-.8.748 4.076 4.076 0 01-1.043.482 6.15 6.15 0 01-1.159.236z"></path>
                                  <path d="M0 6.104v-.792h8.14v.792z"></path>
                                </g>
                              </svg>
                              <span className="price-value">
                                {" "}
                                {prd?.price_value}{" "}
                              </span>
                            </span>
                          </span>
                          <span className="disc-percent">
                            <span>({prd.disc_percentage})</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="plpXceleratorInfoTag"></div>
                  </Link>
                </div>
              </li>
            </>
          );
        })}
      </ul> */}
      <section className="sc-hokXgN fKSTpe">
        {productList && productList.length ?
        productList.map((product,id)=>{
          return(
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
                  <h3 className="sc-fxmata sc-izfUZz kiIscI">{product?.product_name}</h3>
                  <div className="sc-eqGige dKRZxZ">
                    {product?.product_description}
                  </div>
                  <div className="sc-eqGige dKRZxZ">
                  <span style={{color:'black'}}>Price : </span>   Rs. {product?.pricing} 
                  </div>

                </div>
              </Link>
            </div>

          </div>

        </div>
            </>
          )

          
        }):null}
        {/* <div className="sc-bke1zw-0 fIuLDK">
          <div className="sc-bke1zw-1 hWGQVf">
            <div>
              <Link to='/product/:product_id'>
                <section className="sc-hQfrgq jsPkKi">
                  <div className="sc-s1isp7-1 gMhjmN sc-fxMfqs gYVtRh">
                    <div className="sc-s1isp7-3 cVOEqG"></div>
                    <img className="sc-s1isp7-5 fyZwWD" src="https://images.pexels.com/photos/339379/pexels-photo-339379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                  </div>
                  <section className="sc-rzOft kLNdwA"></section>
                </section>
                <div className="sc-jklikK fomxOG">
                  <h3 className="sc-fxmata sc-izfUZz kiIscI">Camera Sony</h3>
                  <div className="sc-eqGige dKRZxZ">
                    This the best camera having the clearity to see the moon
                  </div>
                  <div className="sc-eqGige dKRZxZ">
                  <span style={{color:'black'}}>Price : </span>   Rs. 800 
                  </div>

                </div>
              </Link>
            </div>

          </div>

        </div> */}
        {/* <div className="sc-bke1zw-0 fIuLDK">
          <div className="sc-bke1zw-1 hWGQVf">
            <div>
              <Link to='/product/:product_id'>
                <section className="sc-hQfrgq jsPkKi">
                  <div className="sc-s1isp7-1 gMhjmN sc-fxMfqs gYVtRh">
                    <div className="sc-s1isp7-3 cVOEqG"></div>
                    <img className="sc-s1isp7-5 fyZwWD" src="https://b.zmtcdn.com/data/pictures/3/20522803/85dc6144ea1befddbae8ce564a1feb02.jpg?fit=around|285:195&crop=285:195;*,*" />

                  </div>
                  <section className="sc-rzOft kLNdwA"></section>
                </section>
                <div className="sc-jklikK fomxOG">
                  <h3 className="sc-fxmata sc-izfUZz kiIscI">Camera</h3>
                  <div className="sc-eqGige dKRZxZ">
                    
                    Digital Camera 
                  </div>
                  <div className="sc-eqGige dKRZxZ">
                   <span style={{color:'black'}}>Price : </span> Rs 4999
                  </div>

                </div>
              </Link>
            </div>

          </div>

        </div>
        <div className="sc-bke1zw-0 fIuLDK">
          <div className="sc-bke1zw-1 hWGQVf">
            <div>
              <Link to='/product/:product_id'>
                <section className="sc-hQfrgq jsPkKi">
                  <div className="sc-s1isp7-1 gMhjmN sc-fxMfqs gYVtRh">
                    <div className="sc-s1isp7-3 cVOEqG"></div>
                    <img className="sc-s1isp7-5 fyZwWD" src="https://b.zmtcdn.com/data/pictures/3/20522803/85dc6144ea1befddbae8ce564a1feb02.jpg?fit=around|285:195&crop=285:195;*,*" />

                  </div>
                  <section className="sc-rzOft kLNdwA"></section>
                </section>
                <div className="sc-jklikK fomxOG">
                  <h3 className="sc-fxmata sc-izfUZz kiIscI">Camera</h3>
                  <div className="sc-eqGige dKRZxZ">
                    
                    Digital Camera 
                  </div>
                  <div className="sc-eqGige dKRZxZ">
                   <span style={{color:'black'}}>Price : </span> Rs 4999
                  </div>

                </div>
              </Link>
            </div>

          </div>

        </div>
        <div className="sc-bke1zw-0 fIuLDK">
          <div className="sc-bke1zw-1 hWGQVf">
            <div>
              <Link to='/product/:product_id'>
                <section className="sc-hQfrgq jsPkKi">
                  <div className="sc-s1isp7-1 gMhjmN sc-fxMfqs gYVtRh">
                    <div className="sc-s1isp7-3 cVOEqG"></div>
                    <img className="sc-s1isp7-5 fyZwWD" src="https://b.zmtcdn.com/data/pictures/3/20522803/85dc6144ea1befddbae8ce564a1feb02.jpg?fit=around|285:195&crop=285:195;*,*" />

                  </div>
                  <section className="sc-rzOft kLNdwA"></section>
                </section>
                <div className="sc-jklikK fomxOG">
                  <h3 className="sc-fxmata sc-izfUZz kiIscI">Camera</h3>
                  <div className="sc-eqGige dKRZxZ">
                    
                    Digital Camera 
                  </div>
                  <div className="sc-eqGige dKRZxZ">
                   <span style={{color:'black'}}>Price : </span> Rs 4999
                  </div>

                </div>
              </Link>
            </div>

          </div>

        </div> */}
      </section>

      {/* <style jsx>{`
        .searchResults .list {
          list-style: none;
          padding: 0;
          overflow: hidden;
          clear: both;
        }
        ul {
          margin-top: 0;
          margin-bottom: 0;
        }
        .searchResults .InlineFilter:nth-child(odd),
        .searchResults .item:nth-child(odd) {
          clear: left;
        }
        .searchResults .itemBorderRight {
          border-right: 0.5px solid #d4d5d9;
        }
        .searchResults .top-border {
          border-top: 1px solid #d4d5d9;
        }
        .LazyLoad span{
          width:100% !important
        }
        .searchResults .item {
          border-bottom: 0.5px solid #d4d5d9;
          float: left;
          width: 50%;
          margin: 0;
          overflow: hidden;
        }
        .searchProduct {
          position: relative;
          text-align: center;
          padding-bottom: 17px;
        }
        .ripple-container {
          position: relative;
          overflow: hidden;
        }
        .searchProduct .LazyLoad {
          width: auto !important;
          position: relative;
          height: 255px;
          width: 100%;
          background: rgb(255, 242, 223);
        }
        .searchProduct img {
          width: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          -o-object-position: top;
          object-position: top;
          height: 255px;
        }
        .LazyLoad img {
          background: #fff;
          color: #fff;
        }
        .loaded {
          opacity: 1;
        }

        .img-responsive {
          display: block;
          max-width: 100%;
          height: auto;
        }
        .searchProduct .content-wrap {
          position: relative;
        }
        .searchProduct .price-wrap {
          padding: 8px 0;
        }
        .text-sm {
          font-size: 12px;
        }

        .text-md {
          font-size: 14px;
        }
        .searchProduct h3.prod-title {
          margin-bottom: inherit;
        }

        .searchProduct .prod-title {
          padding-left: 8px;
          font-weight: 700;
          color: var(--dark);
          line-height: 1.57;
          text-align: left;
          color: #282c3f;
          font-size: 13px;
          width: 85%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .searchProduct .price-wrap .description {
          opacity: 0.6;
          padding-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
          margin: 0;
          font-size: 11px;
          font-weight: 400;
          text-align: left;
          color: #282c3f;
          height: 12px;
        }
        .searchProduct .price-container {
          margin-top: -1px;
          padding-left: 6px;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .searchProduct .price-wrap .price {
          font-weight: 700;
          color: #282c3f;
          font-size: 13px;
        }
        .searchProduct .price-container .rupees {
          position: relative;
          top: 4px;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        .searchProduct .price-container .price-value {
          position: relative;
          left: -2px;
        }
        .searchProduct .price-wrap .price-font {
          font-size: 13px;
        }

        .searchProduct .price-wrap .orig-price {
          opacity: 0.4;
          color: #282c3f;
          text-decoration: line-through;
          font-size: 11px;
        }
        .searchProduct .price-container .strike-rupees {
          position: relative;
          top: 1px;
        }
        .searchProduct .price-container .price-value {
          position: relative;
          left: -2px;
        }
        .searchProduct .price-wrap .disc-percent {
          color: #ff905a;
          font-weight: 700;
          font-size: 11px;
          white-space: nowrap;
        }

        .pdpXceleratorInfoTag,
        .plpXceleratorInfoTag {
          color: #ff5722;
          font-size: 12px;
          font-weight: 700;
          min-height: 17px;
          text-align: left;
          margin-left: 8px;
        }
      `}</style> */}

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
