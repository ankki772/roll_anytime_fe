import React from "react";

export default function Cart() {
  return (
    <>
      <div className="cart-wrapper">
        <section className="cart-items-wrapper">
          <ul>
            <li>
              <div class="product">
                <img
                  src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                  alt=""
                />
                <div className="product-info">
                  <p>Antique Clock from ancient</p>
                  <div className="product-price">
                    <p>
                      <strong>Rs. 74.99</strong>{" "}
                    </p>
                  </div>

                  <div className="product-removal">
                    <button className="remove-product">Remove</button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="product">
                <img
                  src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                  alt=""
                />
                <div className="product-info">
                  <p>Antique Clock from ancient</p>
                  <div className="product-price">
                    <p>
                      <strong>Rs. 74.99</strong>{" "}
                    </p>
                  </div>

                  <div className="product-removal">
                    <button className="remove-product">Remove</button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="product">
                <img
                  src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                  alt=""
                />
                <div className="product-info">
                  <p>Antique Clock from ancient</p>
                  <div className="product-price">
                    <p>
                      <strong>Rs. 74.99</strong>{" "}
                    </p>
                  </div>

                  <div className="product-removal">
                    <button className="remove-product">Remove</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="total-wrapper">
          <div className="total-title">Price Details</div>
          <div className="total-detail">
            <div className="total-price">
              <span>Price (6 items)</span>
              <span>Rs .1800</span>
            </div>
            <div className="total-price">
              <span>Delivery Charges</span>
              <span>Rs. 880</span>
            </div>
          </div>
          <div className="total-amount">
              <span>Total Amount</span>
              <span>Rs. 1800</span>
            </div>
        </section>
      </div>

      <style jsx>
        {`
          .cart-wrapper {
            width: 80%;
            margin: 30px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .cart-wrapper .cart-items-wrapper,
          .cart-wrapper .total-wrapper {
            width: 48%;
            height: 100%;
            padding: 5px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
          }
          .cart-wrapper .total-wrapper .total-title {
            color: #878787;
            padding: 10px 3px;
            border-bottom: 1px solid #d0e2df;
          }
          .cart-wrapper .total-wrapper .total-detail {
            padding: 10px 3px;
            border-bottom: 1px solid #d0e2df;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .cart-wrapper .total-wrapper .total-detail .total-price,
          .cart-wrapper .total-wrapper .total-detail .total-price {
            display: flex;
            justify-content: space-between;
          }
          .cart-wrapper .total-wrapper .total-amount{
            display: flex;
            justify-content: space-between;
            margin-top:10px;
          }
          .cart-wrapper .total-wrapper .total-amount>span:first-child{
            font-weight:bold;
            font-size:16px;
            margin-bottom:10px;
          }
          .cart-wrapper .cart-items-wrapper ul {
            list-style: none;
            display: flex;
            flex-direction: column;
          }
          .cart-wrapper .cart-items-wrapper ul li {
            margin: 0;
            padding: 5px;
            overflow: hidden;
          }
          .cart-wrapper .cart-items-wrapper ul li:not(:last-child) {
            border-bottom: 1px solid #d0e2df;
          }
          .cart-wrapper .cart-items-wrapper ul li .product {
            display: flex;
            gap: 10px;
          }
          .cart-wrapper .cart-items-wrapper ul li .product .product-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .cart-wrapper .cart-items-wrapper ul li .product .product-info > p {
            margin: 0;
            padding: 0;
            font-weight: bold;
            font-size: 16px;
            color: #333;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          .cart-wrapper
            .cart-items-wrapper
            ul
            li
            .product
            .product-info
            > p:hover {
            cursor: pointer;
            color: blue;
          }
          .cart-wrapper .cart-items-wrapper ul li .product img {
            height: 100px;
            width: 100px;
            border-radius: 5px;
            object-fit: cover;
          }
          .remove-product {
            border: 0;
            padding: 4px 8px;
            background-color: #c66;
            color: #fff;
            font-size: 12px;
            border-radius: 3px;
          }
          .product-price {
            color: #878787;
          }
          @media screen and (max-width: 768px) {
            .cart-wrapper {
              width: 95%;
              margin: 15px auto;
            }
            .cart-wrapper .cart-items-wrapper,
            .cart-wrapper .total-wrapper {
              width: 100%;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
}
