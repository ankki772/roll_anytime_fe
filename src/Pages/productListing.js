import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TopStrip } from "../Components/topStrip";
import { isMobile } from "react-device-detect";
import { getAllItems, getPopularItems, getProductByCategory } from "../Api/Services/products";
export default function ProductListing() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([])
  const { pathname } = useLocation();

  let { category_name } = useParams();
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

      }  catch (error) {

      }

    })()
  }, [])

  return (
    <>
      <div className="row-base">
        <div className="search-leftContainer column-base">
          <section>
            <div className="condition-render-verticalFilters condition-render-boundary-top">
              <div className="vertical-filters-filters header-container">
                <span className="header-title">FILTERS</span>
              </div>
              <div className="vertical-filters-filters categories-container">
                <span className="vertical-filters-header "> CATEGORIES</span>
                <ul className="categories-list">
                  <li>
                    <label className="common-customCheckbox vertical-filters-label">
                      <input type="checkbox" value="Tshirts" />
                      "Tshirts"
                      <span className="categories-num"></span>
                      <div className="common-checkboxIndicator"></div>
                    </label>
                  </li>
                  <li>
                    <label className="common-customCheckbox vertical-filters-label">
                      <input type="checkbox" value="Tshirts" />
                      "Tshirts"
                      <span className="categories-num"></span>
                      <div className="common-checkboxIndicator"></div>
                    </label>
                  </li>
                  <li>
                    <label className="common-customCheckbox vertical-filters-label">
                      <input type="checkbox" value="Tshirts" />
                      "Tshirts"
                      <span className="categories-num"></span>
                      <div className="common-checkboxIndicator"></div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="search-rightContainer column-base">
          <TopStrip />
          <div className="search-searchProductsContainer row-base">
            <section style={{ display: "block" }}>
              <ul className="results-base">
                {productList && !!productList.length && productList.map((item, id) => {
                  return (
                  <li className="product-base" key={item?._id} onClick={()=>{navigate(`/product/${item?.product_id}`)}}>
                    <div className="product-thumbShim"></div>
                    <a href="#" style={{ display: "block" }}>
                      <div className="product-imageSliderContainer">
                        <img
                          alt=""
                          src={item?.product_imges[0]}
                        />
                      </div>
                      <div className="product-productMetaInfo">
                        <h3 className="product-brand">{item?.product_name}</h3>
                        <h4 className="product-product">
                          {item?.product_brand}
                        </h4>
                        <h4 className="product-sizes">
                          Sizes:
                          <span className="product-sizeInventoryPresent">
                            XXL
                          </span>
                        </h4>
                        <div className="product-price">
                          <span>
                            <span className="product-discountedPrice">
                              Rs.{item?.pricing}
                            </span>
                            {/* <span className="product-strike">Rs. 1299</span> */}
                          </span>
                          {/* <span className="product-discountPercentage">
                            (62% OFF)
                          </span> */}
                        </div>
                      </div>
                    </a>
                  </li>
                  )
                })}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          body {
            font-family: "Assistant,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif";
            -webkit-font-smoothing: antialiased;
          }

          ul {
            list-style: none;
          }
          .results-base {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            margin: 0 -10px 0 3px;
            width: 100%;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: start;
            padding: 0;
            gap: 20px;
          }
          .search-searchProductsContainer section{
            width:100%;
          }
          .product-base {
            width: 210px;
            text-align: left;
            position: relative;
            vertical-align: top;
            overflow: hidden;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 0 10px 30px;
          }
          .product-thumbShim {
            position: absolute;
            top: 0;
            left: 0;
            width: 101%;
            height: 210px;
            background-color: #282c3f;
            -webkit-transition: visibility 0s, opacity 0.5s linear;
            transition: visibility 0s, opacity 0.5s linear;
            visibility: hidden;
            opacity: 0;
          }
          a {
            color: #282c3f;
          }
          .product-base a {
            text-decoration: none;
          }
          .product-imageSliderContainer {
            position: relative;
            width: 210px;
            height: 280px;
          }
          .product-imageSliderContainer > img {
            width: 100%;
            height: 100%;
            display: block;
          }
          .product-productMetaInfo {
            position: relative;
            z-index: 3;
            background: #fff;
            padding: 0 10px;
            height: 100%;
            margin-top: 12px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            overflow: hidden;
          }
          h3.product-brand {
            margin-top: inherit;
            -webkit-margin-before: initial;
            margin-block-start: 0;
          }
          .product-brand {
            font-size: 16px;
            font-weight: 700;
            line-height: 1;
            color: #282c3f;
            margin-bottom: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .product-product {
            color: #535766;
            font-size: 14px;
            line-height: 1;
            margin-bottom: 0;
            margin-top: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
            display: block;
          }
          .product-sizes {
            font-size: 14px;
            color: #535665;
            line-height: 1;
            display: none;
            margin-top: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 0;
            margin-bottom: 0;
            font-weight: 400;
          }
          .product-sizeInventoryPresent {
            color: #535665;
          }
          .product-sizes {
            font-size: 14px;
            color: #535665;
            line-height: 1;
            display: none;
            margin-top: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 0;
            margin-bottom: 0;
            font-weight: 400;
          }
          .product-mexpress,
          .product-price {
            font-size: 14px;
            line-height: 15px;
            color: #282c3f;
            white-space: nowrap;
          }
          .product-price {
            margin: 10px 0 6px;
            font-weight: 700;
          }
          .product-discountedPrice {
            font-size: 14px;
            font-weight: 700;
            color: #282c3f;
          }
          .product-strike {
            text-decoration: line-through;
            color: #7e818c;
            font-weight: 400;
            margin-left: 5px;
            font-size: 12px;
          }
          .product-discountPercentage {
            color: #ff905a;
            font-weight: 400;
            font-size: 12px;
            margin-left: 5px;
          }
          .search-searchProductsContainer {
            padding-top: 24px;
            padding-left: 15px;
            padding-right: 20px;
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

          .row-base:after {
            clear: both;
            content: " ";
            display: table;
          }
          .search-leftContainer {
            min-width: 252px;
            max-width: 252px;
            -webkit-box-flex: 0 !important;
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
          }
          search-leftContainer section {
            display: block;
          }
          .condition-render-boundary-top {
            position: static;
          }
          .condition-render-verticalFilters {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-transition: margin 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition: margin 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            margin-top: 0;
            padding-top: 23px;
          }
          .search-rightContainer {
            padding-left: 0;
            -webkit-box-flex: 1; flex: 1 1 0%;
        }
        .column-base {
          -ms-flex-item-align: start;
          align-self: flex-start;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-orient: vertical;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
      }
      .header-container {
        position: relative;
        border-right: none!important;
        padding-top: 0;
    }
    .vertical-filters-filters {
      padding-top: 20px;
      padding-bottom: 15px;
      padding-left: 25px;
      border-bottom: 1px solid #e9e9ed;
      position: relative;
      border-right: 1px solid #edebef;
  }
  .header-title {
    font-weight: 700;
}

}
.categories-container {
    position: relative;
}
.vertical-filters-filters {
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 25px;
  border-bottom: 1px solid #e9e9ed;
  position: relative;
  border-right: 1px solid #edebef;
}
.vertical-filters-header {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 0 18px;
  clear: both;
  color: #282c3f;
   display: block;
}
.search-leftContainer ul {
  margin: 0;
}
.vertical-filters-filters .vertical-filters-label {
  display: block;
  width: 95%;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 17px;
  color: #282c3f;
}
.common-customCheckbox {
  position: relative;
  cursor: pointer;
}
.common-customCheckbox input {
  margin: 0 16px 0 0;
  visibility: hidden;
}
[type=checkbox], [type=radio] {
  box-sizing: border-box;
  padding: 0;
}
.common-checkboxIndicator {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border: 1px solid #c3c2c9;
  background: #fff;
  border-radius: 2px;
}
.common-checkboxIndicator:after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 1;
  width: 7px;
  height: 4px;
  border-color: #fff;
  border-style: none none solid solid;
  border-width: 2px;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.common-customCheckbox input:checked~.common-checkboxIndicator {
  border: none;
  background: #ff3f6c;
}
.common-customCheckbox input:checked~.common-checkboxIndicator:after {
  display: block;
}
        `}
      </style>
    </>
  );
}
