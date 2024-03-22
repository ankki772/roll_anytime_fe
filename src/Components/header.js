import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Contexts/globalContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { isMobile } from "react-device-detect";
import roll_anytime from "../Assets/Images/roll_anytime.png";
import { getCookies, removeCookies } from "../helpers/cookiehelper";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
export default function Header() {

  const ref = useRef()
  const [checkedMenu, setCheckedMenu] = useState(false)
  const userData = useSelector((state)=>state.addcart.data);
  const [cartData, setcartData] = useState(userData.length||0)

  useEffect(() => {
    setcartData(userData.length)
  }, [userData])

  let { logged_in } = getCookies("logged_in");
  let role = Cookies.get('role')

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        let checkedMen = document.getElementById("menu-toggle") && document.getElementById("menu-toggle").checked
        if (checkedMen) {
          setCheckedMenu(false)
          document.querySelector(".menu").style.transform = "scale(1, 0)"
        }
      }
    };  
    document.addEventListener('mousedown', handleOutsideClick);
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  let menus = [{ url: '/', slug: "Home" }, { url: '/account', slug: "Profile" }, { url: "/listing", slug: "Product List" }, { url: "/", slug: "Contact-Us" }, { url: "/", slug: "Logout" }]
  const closeMenu = (e) => {
    let checkedMen = document.getElementById("menu-toggle") && document.getElementById("menu-toggle").checked
    if (checkedMen) {
      setCheckedMenu(false)
      document.querySelector(".menu").style.transform = "scale(1, 0)"
    }
    else {
      setCheckedMenu(true)
      document.querySelector(".menu").style.transform = "scale(1, 1)"
    }

  }


  const logoutHandler = () => {
    console.log("loggeoutclicked")
    removeCookies('logged_in', 'role', 'token')
    // Cookies.remove('logged_in')
    // Cookies.remove('role')
    // navigate('/')
  }

  return (
    <>
      <header className="header">
        <nav>
          <div className="nav_left" >
            {isMobile ? <><input type="checkbox" id="menu-toggle" checked={checkedMenu} />
              <label htmlFor="menu-toggle" className="menu-icon" onClick={(e) => closeMenu(e)}>
                &#9776;
              </label></> : null}

            <div className="logo">
              <Link to={'/'}>
                <LazyLoadImage
                  src={roll_anytime}
                  className="rollanytime_logo"
                  alt="Image Alt"
                  placeholderSrc={roll_anytime}

                />
                <span></span>
              </Link>
            </div>
            <ul ref={ref} className="menu" onClick={(e) => closeMenu(e)}>
              {menus.map((menuItem, id) => <>
                {id === 4 && !logged_in ?
                  <li key={`${id}${'login'}`}>
                    <Link to={'/login'}>Login</Link>
                  </li>
                  : null}
                {(id === menus.length - 1 && role === 'Admin') ?
                  <li key={`${id}${'admin'}`}>
                    <Link to={'/addProduct'}>Admin Panel</Link>
                  </li>
                  : null}
                <li key={`${id}${menuItem.slug}`}>
                  <Link to={menuItem?.slug != 'Logout' ? menuItem.url : null} onClick={menuItem?.slug == 'Logout' ? () => logoutHandler() : null}>{menuItem.slug}</Link>
                </li>


              </>)
              }
            </ul>
          </div>

          <div className="action-container">
            <div className="actions">
              <Link to='/account' >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#3E4152"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </span>
              </Link>
              <Link to='/cart'>
                <span className="cart">
                  <span className="badge">{cartData}</span>
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

      <style jsx='true'>{`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        text-decoration: none;
        list-style: none;
      }
      
      .header {
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 6px -6px;
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
        width:max-content;
        font-weight: 500;
        transition: 0.2s all ease-in-out;
        color: #1e272e;
      }
      
      .menu:hover a {
        // opacity: 0.4;
      }
      
      .menu a:hover {
        background-color: black;
        color:white;
      }
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
        .level2-header .menu {
          position:absolute;
        }
      
        .menu a {
          margin-left: 12px;
        }
      
        .menu li {
          margin-bottom: 10px;
        }
        .menu li:hover{
          background-color:black;
          width: 100%;
        }
        .menu a:hover{
          color:white;
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
      gap:5px;
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
