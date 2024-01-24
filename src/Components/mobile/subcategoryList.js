import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummysubcatlist } from "../../dummyprd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getProductByCategory } from "../../Api/Services/products";
import SelectPackage from "./selectPackage";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "@mui/material";
import LongMenu from "./menuDrop";
import { useSelector } from "react-redux";
import { toastError, toastSuccess } from "../../helpers/toastHelper";

export default function SUbcategoryList({ categoryName }) {
  const [categoryList, setCategoryList] = useState([])
  const [packArr, setPackArr] = useState([])
  const cart = useSelector((state) => state.cart)



  useEffect(() => {
    ; (async () => {
      let result = await getProductByCategory(categoryName);
      if (result?.result.length) {
        setCategoryList(result?.result)
        setPackArr(JSON.parse(result?.result[0]?.product_pack[0]))
      }
    })()
  }, [categoryName])

  useEffect(() => {
    if (cart.status == 'succeeded') {
      toastSuccess("Item Successfully Added to the cart");
      // setGoCartButton(true);
    }
    else if(cart.status == 'failed'){
      toastError("Item is Not Added due to some error")
    }
  }, [cart])

  return (
    <>
      <div className="subcat-container">
        <div className="top-head">
          <h2>Most popular</h2>
          <h2>Name</h2>
          <h2>Price</h2>
          <h2>Action</h2>
        </div>
        <ul className="subcat-item-list">
          {categoryList.slice(0, 3).map((item, idx) => (
              <li className="subcat-item" key={`${idx}_scl`}>
                <span>
                  <LazyLoadImage
                    src={item?.product_imges[0]}
                    className="rollanytime_logo"
                    alt="Image Alt"
                    effect="blur"
                  />
                </span>
                <span>{item?.product_name?.split(' ').splice(0, 2).join(' ')}</span>
                <span>{item?.pricing}</span>
                <span><LongMenu viewProduct={`/product/${item?.product_id}`} packs={packArr} product_id={item?.product_id}/></span>
                </li>
          ))}
          {categoryList.length > 3 ?
            <Link to={`categories/${categoryName}`}>

              View all

            </Link> : null}
        </ul>
      </div>
      <style jsx>{`
        .subcat-container {
          width: 100%;
          margin: 10px 0 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: #f6f6f6;
          margin: 10px 0px 0px 0px;
        }
        .subcat-container .top-head {
          width: 100%;
          display: flex;
          justify-content: space-around;
          border-bottom: 1px solid #00000017;
          height: 36px;
          align-items: center;
          font-size: 10px;
          font-weight: bold;
          color: #5c6158e0;
        }
        .subcat-item-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          padding: 5px 0;
        }
        .subcat-item-list .subcat-item {
          display: flex;
          width: 100%;
          justify-content: space-around;
          align-items: center;
          margin: 7px 0;
        }
        .subcat-item-list .subcat-item span img {
          display: inline-block;
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid #fff;
          box-shadow: 0 2px 6px #0003;
        }
        .catlist span{
          color:#000
        }
      `}</style>
    </>
  );
}
