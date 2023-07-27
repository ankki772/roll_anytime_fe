import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Contexts/globalContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import roll_anytime from "../assets/roll_anytime.png";
export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="nav_left">
            <input type="checkbox" id="menu-toggle" />
            <label for="menu-toggle" className="menu-icon">
              &#9776;
            </label>

            <div className="logo">
              <a href="index.html">
                <LazyLoadImage
                  src={roll_anytime}
                  className="rollanytime_logo"
                  alt="Image Alt"
                  placeholderSrc={roll_anytime}
                  
                />
                <span></span>
              </a>
            </div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account">Profile</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Connect</Link>
            </li>
          </ul>
          </div>

          <div className="action-container">
            <div className="actions">
              <Link to='/' >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#3E4152"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </span>
              </Link>
              <Link to='/'>
              <span className="cart">
                <span className="badge">2</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="32"
                  fill="#3E4152"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                </svg>
              </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>{`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        text-decoration: none;
        list-style: none;
      }
      
      .header {
        position: sticky;
        top: 0;
        width: 100%;
        box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
        background-color: #ecf0f1;
        z-index: 4;
      }
      
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 25px;
      }
      
      .logo a {
        font-size: 24px;
        font-weight: bold;
        color: black;
      }
      
      .logo a span {
        color: #8739fa;
      }
      
      .menu {
        display: flex;
        justify-content: center;
        align-items: center;
       
      }
      
      .menu a {
        display: block;
        padding: 7px 15px;
        font-size: 17px;
        font-weight: 500;
        transition: 0.2s all ease-in-out;
        color: #1e272e;
      }
      
      .menu:hover a {
        opacity: 0.4;
      }
      
      .menu a:hover {
        opacity: 1;
        color: #fff;
      }
      
      .menu-icon {
        display: none;
      }
      
      .nav_left #menu-toggle {
        display: none;
      }
      
      .nav_left #menu-toggle:checked ~ .menu {
        transform: scale(1, 1);
      }
      
      @media only screen and (max-width: 950px) {
        .menu {
         
          flex-direction: column;
          background-color: #ecf0f1;
          align-items: start;
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          z-index: 1;
          transform: scale(1, 0);
          transform-origin: top;
          transition: transform 0.3s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
          

        }
      
        .menu a {
          margin-left: 12px;
        }
      
        .menu li {
          margin-bottom: 10px;
        }
      
        .menu-icon {
          display: block;
          color: #3E4152;
          font-size: 28px;
          cursor: pointer;
        }
        .outClick{      
          
          position:fixed;      
          width:100%;
          height:100vh;
          opacity:0.3;
          background:#82EEFD;
          z-Index:-9
        }
       
      }
      .rollanytime_logo{
        height:40px;
        width:50px;
        border-radius:8px
      }
      .action-container{
       
        height:40px;
        width:90px;
      }
     .actions{
      display:flex;
      justify-content:space-between;
      align-items-center;
      width:100%;
      height:100%;
     }
     .nav_left{
      display:flex;
      width:90px;
      justify-content:space-between
     }
      
     .cart{
      position:relative;
     }
     .badge {
      position: absolute;
      top: -22px;
      right: -12px;
      color: #fff;
      background: #ff3e6c;
      font-weight: 700;
      border-radius: 50%;
      font-size: 11px;
      display: inline-block;
      font-family: helvetica,arial,sans-serif;
      width: 19px;
      height: 19px;
      text-align: center;
      line-height: 19px;
  }
  .action-container .actions span:hover {
     cursor:pointer
  }
  .header{
    border-bottom:1px solid #d0e2df
  }
    `}</style>
    </>
  );
}
