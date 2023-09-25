import React from "react";
import { Link } from "react-router-dom";
import { dummysubcatlist } from "../../dummyprd";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SUbcategoryList() {
  return (
    <>
      <div class="subcat-container">
        <div class="top-head">
          <h2>Most popular</h2>
          <h2>Name</h2>
          <h2>Price</h2>
        </div>
        <ul class="subcat-item-list">
          {dummysubcatlist.map((item, idx) => (
            <Link to="/account" className="catlist">
              <li class="subcat-item" key={`${idx}_scl`}>
                <span>
                  <LazyLoadImage
                    src={item.img_url}
                    className="rollanytime_logo"
                    alt="Image Alt"
                    effect="blur"
                  />
                </span>
                <span>{item.sub_cat_name}</span>
                <span>{item.price}</span>
              </li>
            </Link>
          ))}
          <Link to='/'>
            <li>
              View all
            </li>
          </Link>
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
          margin: 0;
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
