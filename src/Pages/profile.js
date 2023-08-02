import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/userContext";
import { decryptToken } from "../helpers/decryption";
import { removeCookies, setCookies } from "../helpers/cookiehelper";
import Input from "../Components/input";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../helpers/cookiehelper";
import { uploadImages } from "../helpers/image.helper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { updateUserDetail ,getUserDetail } from "../Api/Services/user";

let editSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-pencil"
    viewBox="0 0 16 16"
  >
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
  </svg>
);
export default function Profile() {
  let { token = "" } = getCookies("token");
  const userDetail = decryptToken(token);
  console.log("userDetail===>>>>>>>>>> ", userDetail);
  // if (!userDetail) {
  //   removeCookies("logged_in", "token");
  //   setAuth(false);
  //   nav("/signin");
  // }
  const nav = useNavigate();
  const { setAuth } = useContext(UserContext);
  const [editable, setEditable] = useState(false);
  const [userInfo, setUserDetail] = useState({
    profile_img: "",
    username: "",
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  useEffect(() => {
    getUserDetail()
    return () => {}
  }, []);

const handleUserUpdate = async () =>{
     
}

  const handleChange = (e) => {
    let {name,value} = e.target
    console.log("nameeeeeee",name,value)
    if(name === "profileImage"){
    let { imageFormatErr = [], uploadImagesArr = [] } = uploadImages(e);
    setUserDetail((prev) => ({
      ...prev,
      profile_img: uploadImagesArr[0],
    }));
  }
  else{
    console.log("ppppppppppppppppp",name,value)
    setUserDetail({
      ...userInfo,
      [name]: value
    });
  }
  };
  console.log("---------->>>", userInfo);
  return (

    <>
      <div className="main-content">
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <LazyLoadImage
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        className="rounded-circle"
                        alt="Image Alt"
                        // placeholderSrc={roll_anytime}
                      />
                      <Input
                        type="file"
                        id="upload"
                        hidden
                        svg={editSVG}
                        onChange={handleChange}
                        name="profileImage"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-2 pb-0 pb-md-4"></div>

                <div className="text-center">
                  <h3>Jessica Jones</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                  { !editable  ? <button className="btn  btn-primary" onClick={()=>setEditable(!editable)}>EDIT</button> :
                      <button className="btn  btn-primary" onClick={handleUserUpdate}>Save</button>}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group ">
                            <Input
                              type="text"
                              id="input-username"
                              label="user name"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="Username"
                              defaultValue="lucky.jesse"
                              name="username"
                              editable={editable}

                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Input
                              type="text"
                              id="input-email"
                              label="Email address"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="jesse@example.com"
                              defaultValue={userInfo.email}
                              name="email"
                              editable={editable}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group ">
                            <Input
                              type="text"
                              id="input-first-name"
                              label="First name"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="First name"
                              defaultValue="Lucky"
                              name="first_name"
                              editable={editable}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group ">
                            <Input
                              type="text"
                              id="input-last-name"
                              label="Last name"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="Last name"
                              defaultValue="Lucky"
                              name="last_name"
                              editable={editable}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group ">
                          <Input
                              type="text"
                              id="input-username"
                              label=" Address"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="Address"
                              defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              name="address"
                              editable={editable}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group ">
                          <Input
                              type="text"
                              id="input-city"
                              label=" Address"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="City"
                              defaultValue="New York"
                              name="city"
                              editable={editable}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group ">
                          <Input
                              type="text"
                              id="input-country"
                              label="Country"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="Country"
                              defaultValue="United States"
                              name="country"
                              editable={editable}
                            />
                            
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                          <Input
                              type="number"
                              id="postal-code"
                              label="Postal code"
                              labelTag={true}
                              onChange={handleChange}
                              labelClass="form-control-label"
                              inputClass="form-control form-control-alternative"
                              placeholder="Postal coe"
                              defaultValue="United States"
                              name="postalCode"
                              editable={editable}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
      :root {
        --blue: #5e72e4;
        --indigo: #5603ad;
        --purple: #8965e0;
        --pink: #f3a4b5;
        --red: #f5365c;
        --orange: #fb6340;
        --yellow: #ffd600;
        --green: #2dce89;
        --teal: #11cdef;
        --cyan: #2bffc6;
        --white: #fff;
        --gray: #8898aa;
        --gray-dark: #32325d;
        --light: #ced4da;
        --lighter: #e9ecef;
        --primary: #5e72e4;
        --secondary: #f7fafc;
        --success: #2dce89;
        --info: #11cdef;
        --warning: #fb6340;
        --danger: #f5365c;
        --light: #adb5bd;
        --dark: #212529;
        --default: #172b4d;
        --white: #fff;
        --neutral: #fff;
        --darker: black;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --font-family-sans-serif: Open Sans, sans-serif;
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      
   
      .main-content{
        margin-top: 170px!important;
      }
     
      
      @-ms-viewport {
        width: device-width;
      }
      
      
      section {
        display: block;
      }
      
      
      [tabindex='-1']:focus {
        outline: 0 !important;
      }
      
      hr {
        overflow: visible;
        box-sizing: content-box;
        height: 0;
      }
      
      .main-content h1,
      .main-content h3,
      .main-content h4,
      .main-content h5,
      .main-content h6 {
        margin-top: 0;
        margin-bottom: .5rem;
      }
      
      .main-content p {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      
      .main-content address {
        font-style: normal;
        line-height: inherit;
        margin-bottom: 1rem;
      }
      
      .main-content ul {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      
      .main-content ul ul {
        margin-bottom: 0;
      }
      
      .main-content dfn {
        font-style: italic;
      }
      
      .main-content strong {
        font-weight: bolder;
      }
      
    
      
      
      
      
      
    .main-content  img {
        vertical-align: middle;
        border-style: none;
      }
      
    .main-content  caption {
        padding-top: 1rem;
        padding-bottom: 1rem;
        caption-side: bottom;
        text-align: left;
        color: #8898aa;
      }
      
     .main-content  label {
        display: inline-block;
        margin-bottom: .5rem;
      }
      
    .main-content  button {
        border-radius: 0;
      }
      
    .main-content  button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
      }
      
     .main-content input,
     .main-content button,
      {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        margin: 0;
      }
      
      .main-content button,
      .main-content input {
        overflow: visible;
      }
      
      .main-content button {
        text-transform: none;
      }
      
      .main-content button,
      html [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
      }
      
      button::-moz-focus-inner,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        padding: 0;
        border-style: none;
      }
      
      input[type='radio'],
      input[type='checkbox'] {
        box-sizing: border-box;
        padding: 0;
      }
      
      input[type='date'],
      input[type='time'],
      input[type='datetime-local'],
      input[type='month'] {
        -webkit-appearance: listbox;
      }
      
      textarea {
        overflow: auto;
        resize: vertical;
      }
      
      legend {
        font-size: 1.5rem;
        line-height: inherit;
        display: block;
        width: 100%;
        max-width: 100%;
        margin-bottom: .5rem;
        padding: 0;
        white-space: normal;
        color: inherit;
      }
      
      progress {
        vertical-align: baseline;
      }
      
      [type='number']::-webkit-inner-spin-button,
      [type='number']::-webkit-outer-spin-button {
        height: auto;
      }
      
      [type='search'] {
        outline-offset: -2px;
        -webkit-appearance: none;
      }
      
      [type='search']::-webkit-search-cancel-button,
      [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      
      ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
      }
      
      [hidden] {
        display: none !important;
      }
      
      .main-content h1,
      .main-content h3,
      .main-content h4,
      .main-content h5,
      .main-content h6,
      .main-content .h1,
      .main-content .main-content .h3,
      .main-content .h4,
      .main-content .h5,
      .main-content .h6 {
        font-family: inherit;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: .5rem;
        color: #32325d;
      }
      
      .main-content h1,
      .main-content.h1 {
        font-size: 1.625rem;
      }
      
      .main-content h3,
      .main-content .h3 {
        font-size: 1.0625rem;
      }
      
      .main-content h4,
      .main-content .h4 {
        font-size: .9375rem;
      }
      
      .main-content h5,
      .main-content .h5 {
        font-size: .8125rem;
      }
      
       h6,
      .main-content .h6 {
        font-size: .625rem;
      }
      
      .main-content .display-2 {
        font-size: 2.75rem;
        font-weight: 600;
        line-height: 1.5;
      }
      
      .main-content hr {
        margin-top: 2rem;
        margin-bottom: 2rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, .1);
      }
      
      .main-content code {
        font-size: 87.5%;
        word-break: break-word;
        color: #f3a4b5;
      }
      
      
      
    
      .btn-primary {
        color: #fff;
        border-color: #5e72e4;
        background-color: #5e72e4;
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
      }
      
      .btn-primary:hover {
        color: #fff;
        border-color: #5e72e4;
        background-color: #5e72e4;
      }
    
      
      .container-fluid {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;
      }
      
      .row {
        display: flex;
        
        margin-left: -15px;
        flex-wrap: wrap;
      }
      
      .col-4,
      .col-8,
      .col,
      .col-md-10,
      .col-md-12,
      .col-lg-3,
      .col-lg-4,
      .col-lg-6,
      .col-lg-7,
      .col-xl-4,
      .col-xl-6,
      .col-xl-8 {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      }
      
      .col {
        max-width: 100%;
        flex-basis: 0;
        flex-grow: 1;
      }
      
      .col-4 {
        max-width: 33.33333%;
        flex: 0 0 33.33333%;
      }
      
      .col-8 {
        max-width: 66.66667%;
        flex: 0 0 66.66667%;
      }
      
      @media (min-width: 768px) {
      
        .col-md-10 {
          max-width: 83.33333%;
          flex: 0 0 83.33333%;
        }
      
        .col-md-12 {
          max-width: 100%;
          flex: 0 0 100%;
        }
      }
      
      @media (min-width: 992px) {
      
        .col-lg-3 {
          max-width: 25%;
          flex: 0 0 25%;
        }
      
        .col-lg-4 {
          max-width: 33.33333%;
          flex: 0 0 33.33333%;
        }
      
        .col-lg-6 {
          max-width: 50%;
          flex: 0 0 50%;
        }
      
        .col-lg-7 {
          max-width: 58.33333%;
          flex: 0 0 58.33333%;
        }
      
        .order-lg-2 {
          order: 2;
        }
      }
      
      @media (min-width: 1200px) {
      
        .col-xl-4 {
          max-width: 33.33333%;
          flex: 0 0 33.33333%;
        }
      
        .col-xl-6 {
          max-width: 50%;
          flex: 0 0 50%;
        }
      
        .col-xl-8 {
          max-width: 66.66667%;
          flex: 0 0 66.66667%;
        }
      
        .order-xl-1 {
          order: 1;
        }
      
        .order-xl-2 {
          order: 2;
        }
      }
      
      .form-control {
        font-size: 1rem;
        line-height: 1.5;
        display: block;
        width: 100%;
        height: calc(2.75rem + 2px);
        padding: .625rem .75rem;
        transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);
        color: #8898aa;
        border: 1px solid #cad1d7;
        border-radius: .375rem;
        background-color: #fff;
        background-clip: padding-box;
        box-shadow: none;
      }
      
      @media screen and (prefers-reduced-motion: reduce) {
        .form-control {
          transition: none;
        }
      }
      
      .form-control::-ms-expand {
        border: 0;
        background-color: transparent;
      }
      
      .form-control:focus {
        color: #8898aa;
        border-color: rgba(50, 151, 211, .25);
        outline: 0;
        background-color: #fff;
        box-shadow: none, none;
      }
      
      .form-control:-ms-input-placeholder {
        opacity: 1;
        color: #adb5bd;
      }
      
      .form-control::-ms-input-placeholder {
        opacity: 1;
        color: #adb5bd;
      }
      
      .form-control::placeholder {
        opacity: 1;
        color: #adb5bd;
      }
      
      .form-control:disabled,
      .form-control[readonly] {
        opacity: 1;
        background-color: #e9ecef;
      }
      
      textarea.form-control {
        height: auto;
      }
      
      .form-group {
        margin-bottom: 1.5rem;
      }
      
      .form-inline {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
      }
      
      @media (min-width: 576px) {
        .form-inline label {
          display: flex;
          margin-bottom: 0;
          align-items: center;
          justify-content: center;
        }
      
        .form-inline .form-group {
          display: flex;
          margin-bottom: 0;
          flex: 0 0 auto;
          flex-flow: row wrap;
          align-items: center;
        }
      
        .form-inline .form-control {
          display: inline-block;
          width: auto;
          vertical-align: middle;
        }
      
        .form-inline .input-group {
          width: auto;
        }
      }
      
      .main-content .btn {
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1.5;
        display: inline-block;
        padding: 5px 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        border: 1px solid transparent;
        border-radius: .375rem;
      }
      
      
      
      .input-group>.form-control {
        position: relative;
        width: 1%;
        margin-bottom: 0;
        flex: 1 1 auto;
      }
      
      .input-group>.form-control+.form-control {
        margin-left: -1px;
      }
      
      .input-group>.form-control:focus {
        z-index: 3;
      }
      
      .input-group>.form-control:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      
      .input-group>.form-control:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      
      .input-group-prepend {
        display: flex;
      }
      
      
     
      
      .input-group-prepend {
        margin-right: -1px;
      }
      
      .input-group-text {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        display: flex;
        margin-bottom: 0;
        padding: .625rem .75rem;
        text-align: center;
        white-space: nowrap;
        color: #adb5bd;
        border: 1px solid #cad1d7;
        border-radius: .375rem;
        background-color: #fff;
        align-items: center;
      }
      
      .input-group-text input[type='radio'],
      .input-group-text input[type='checkbox'] {
        margin-top: 0;
      }
      
  
      .input-group>.input-group-prepend>.input-group-text {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      
      
      .input-group>.input-group-prepend:not(:first-child)>.input-group-text,
      
      .input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      
      .nav {
        display: flex;
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
        flex-wrap: wrap;
      }
      
      .nav-link {
        display: block;
        padding: .25rem .75rem;
      }
      
      .nav-link:hover,
      .nav-link:focus {
        text-decoration: none;
      }
      
      .navbar {
        position: relative;
        display: flex;
        padding: 1rem 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      }
      
     
    
      
      .navbar-nav .nav-link {
        padding-right: 0;
        padding-left: 0;
      }
      
      .navbar-nav .dropdown-menu {
        position: static;
        float: none;
      }
      
    
     
      
      .navbar-dark .navbar-nav .nav-link {
        color: rgba(255, 255, 255, .95);
      }
      
      .navbar-dark .navbar-nav .nav-link:hover,
      .navbar-dark .navbar-nav .nav-link:focus {
        color: rgba(255, 255, 255, .65);
      }
      
      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        border: 1px solid rgba(0, 0, 0, .05);
        border-radius: .375rem;
        background-color: #fff;
        background-clip: border-box;
      }
      
      .card>hr {
        margin-right: 0;
        margin-left: 0;
      }
      
      .card-body {
        padding: 1.5rem;
        flex: 1 1 auto;
      }
      
      .card-header {
        margin-bottom: 0;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, .05);
        background-color: #fff;
        

      }
      
      .card-header:first-child {
        border-radius: calc(.375rem - 1px) calc(.375rem - 1px) 0 0;
      }
      
      @keyframes progress-bar-stripes {
        from {
          background-position: 1rem 0;
        }
      
        to {
          background-position: 0 0;
        }
      }
      
      .progress {
        font-size: .75rem;
        display: flex;
        overflow: hidden;
        height: 1rem;
        border-radius: .375rem;
        background-color: #e9ecef;
        box-shadow: inset 0 .1rem .1rem rgba(0, 0, 0, .1);
      }
      
      .media {
        display: flex;
        align-items: flex-start;
      }
      
      .media-body {
        flex: 1 1;
      }
      
      .bg-secondary {
        background-color: #f7fafc !important;
      }
      
      a.bg-secondary:hover,
      a.bg-secondary:focus,
      button.bg-secondary:hover,
      button.bg-secondary:focus {
        background-color: #d2e3ee !important;
      }
      
      .bg-default {
        background-color: #172b4d !important;
      }
      
      a.bg-default:hover,
      a.bg-default:focus,
      button.bg-default:hover,
      button.bg-default:focus {
        background-color: #0b1526 !important;
      }
      
      .bg-white {
        background-color: #fff !important;
      }
      
      a.bg-white:hover,
      a.bg-white:focus,
      button.bg-white:hover,
      button.bg-white:focus {
        background-color: #e6e6e6 !important;
      }
      
      .bg-white {
        background-color: #fff !important;
      }
      
      .border-0 {
        border: 0 !important;
      }
      
      .rounded-circle {
        border-radius: 50% !important;
      }
      
      .d-none {
        display: none !important;
      }
      
      .d-flex {
        display: flex !important;
      }
      
      @media (min-width: 768px) {
      
        .d-md-flex {
          display: flex !important;
        }
      }
      
      @media (min-width: 992px) {
      
        .d-lg-inline-block {
          display: inline-block !important;
        }
      
        .d-lg-block {
          display: block !important;
        }
      }
      
      .justify-content-center {
        justify-content: center !important;
      }
      
      .justify-content-between {
        justify-content: space-between !important;
      }
      
      .align-items-center {
        align-items: center !important;
      }
      
      @media (min-width: 1200px) {
      
        .justify-content-xl-between {
          justify-content: space-between !important;
        }
      }
      
      .float-right {
        float: right !important;
      }
      
      .shadow,
      .card-profile-image img {
        box-shadow: 0 0 2rem 0 rgba(136, 152, 170, .15) !important;
      }
      
      .m-0 {
        margin: 0 !important;
      }
      
      .mt-0 {
        margin-top: 0 !important;
      }
      
      .mb-0 {
        margin-bottom: 0 !important;
      }
      
      .mr-2 {
        margin-right: .5rem !important;
      }
      
      .ml-2 {
        margin-left: .5rem !important;
      }
      
      .mr-3 {
        margin-right: 1rem !important;
      }
      
      .mt-4,
      .my-4 {
        margin-top: 1.5rem !important;
      }
      
      .mr-4 {
        margin-right: 1.5rem !important;
      }
      
      .mb-4,
      .my-4 {
        margin-bottom: 1.5rem !important;
      }
      
      .mb-5 {
        margin-bottom: 3rem !important;
      }
      
      .mt--7 {
        margin-top: -6rem !important;
      }
      
      .pt-0 {
        padding-top: 0 !important;
      }
      
      .pr-0 {
        padding-right: 0 !important;
      }
      
      .pb-0 {
        padding-bottom: 0 !important;
      }
      
      .pt-5 {
        padding-top: 3rem !important;
      }
      
      .pt-8 {
        padding-top: 8rem !important;
      }
      
      .pb-8 {
        padding-bottom: 8rem !important;
      }
      
      .m-auto {
        margin: auto !important;
      }
      
      @media (min-width: 768px) {
      
        .mt-md-5 {
          margin-top: 3rem !important;
        }
      
        .pt-md-4 {
          padding-top: 1.5rem !important;
        }
      
        .pb-md-4 {
          padding-bottom: 1.5rem !important;
        }
      }
      
      @media (min-width: 992px) {
      
        .pl-lg-4 {
          padding-left: 1.5rem !important;
        }
      
        .pt-lg-8 {
          padding-top: 8rem !important;
        }
      
        .ml-lg-auto {
          margin-left: auto !important;
        }
      }
      
      @media (min-width: 1200px) {
      
        .mb-xl-0 {
          margin-bottom: 0 !important;
        }
      }
      
      .text-right {
        text-align: right !important;
      }
      
      .text-center {
        text-align: center !important;
      }
      
      .text-uppercase {
        text-transform: uppercase !important;
      }
      
      .font-weight-light {
        font-weight: 300 !important;
      }
      
      .font-weight-bold {
        font-weight: 600 !important;
      }
      
      .text-white {
        color: #fff !important;
      }
      
      .text-white {
        color: #fff !important;
      }
      
      a.text-white:hover,
      a.text-white:focus {
        color: #e6e6e6 !important;
      }
      
      .text-muted {
        color: #8898aa !important;
      }
      
      @media print {
      
        *,
        *::before,
        *::after {
          box-shadow: none !important;
          text-shadow: none !important;
        }
      
       
      
        img {
          page-break-inside: avoid;
        }
      
        p,
        h3 {
          orphans: 3;
          widows: 3;
        }
      
        h3 {
          page-break-after: avoid;
        }
      
        @ page {
          size: a3;
        }
      
        body {
          min-width: 992px !important;
        }
      
        .container {
          min-width: 992px !important;
        }
      
        .navbar {
          display: none;
        }
      }
      
      figcaption,
      main {
        display: block;
      }
      
      main {
        overflow: hidden;
      }
      
      .bg-white {
        background-color: #fff !important;
      }
      
      a.bg-white:hover,
      a.bg-white:focus,
      button.bg-white:hover,
      button.bg-white:focus {
        background-color: #e6e6e6 !important;
      }
      
      .bg-gradient-default {
        background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
      }
      
      .bg-gradient-default {
        background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
      }
      
      @keyframes floating-lg {
        0% {
          transform: translateY(0px);
        }
      
        50% {
          transform: translateY(15px);
        }
      
        100% {
          transform: translateY(0px);
        }
      }
      
      @keyframes floating {
        0% {
          transform: translateY(0px);
        }
      
        50% {
          transform: translateY(10px);
        }
      
        100% {
          transform: translateY(0px);
        }
      }
      
      @keyframes floating-sm {
        0% {
          transform: translateY(0px);
        }
      
        50% {
          transform: translateY(5px);
        }
      
        100% {
          transform: translateY(0px);
        }
      }
      
      .opacity-8 {
        opacity: .8 !important;
      }
      
      .opacity-8 {
        opacity: .9 !important;
      }
      
      .center {
        left: 50%;
        transform: translateX(-50%);
      }
      
      [class*='shadow'] {
        transition: all .15s ease;
      }
      
      .font-weight-300 {
        font-weight: 300 !important;
      }
      
      .text-sm {
        font-size: .875rem !important;
      }
      
      .text-white {
        color: #fff !important;
      }
      
      a.text-white:hover,
      a.text-white:focus {
        color: #e6e6e6 !important;
      }
      
      .avatar {
        font-size: 1rem;
        display: inline-flex;
        width: 48px;
        height: 48px;
        color: #fff;
        border-radius: 50%;
        background-color: #adb5bd;
        align-items: center;
        justify-content: center;
      }
      
      .avatar img {
        width: 100%;
        border-radius: 50%;
      }
      
      .avatar-sm {
        font-size: .875rem;
        width: 36px;
        height: 36px;
      }
      
      
      
      
      .card-profile-image {
        position: relative;
      }
      
      .card-profile-image img {
        position: absolute;
        left: 50%;
        max-width: 180px;
        transition: all .15s ease;
        transform: translate(-50%, -30%);
        border-radius: .375rem;
      }
      
      .card-profile-image img:hover {
        transform: translate(-50%, -33%);
      }
      
      .card-profile-stats {
        padding: 1rem 0;
      }
      
      .card-profile-stats>div {
        margin-right: 1rem;
        padding: .875rem;
        text-align: center;
      }
      
      .card-profile-stats>div:last-child {
        margin-right: 0;
      }
      
      .card-profile-stats>div .heading {
        font-size: 1.1rem;
        font-weight: bold;
        display: block;
      }
      
      .card-profile-stats>div .description {
        font-size: .875rem;
        color: #adb5bd;
      }
      
      .main-content {
        position: relative;
      }
      
      .main-content .navbar-top {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        padding-right: 0 !important;
        padding-left: 0 !important;
        background-color: transparent;
      }
      
      @media (min-width: 768px) {
        .main-content .container-fluid {
          padding-right: 39px !important;
          padding-left: 39px !important;
        }
      }
      
     
      
    
      
      .footer {
        padding: 2.5rem 0;
        background: #f7fafc;
      }
      
      .footer .nav .nav-item .nav-link {
        color: #8898aa !important;
      }
      
      .footer .nav .nav-item .nav-link:hover {
        color: #525f7f !important;
      }
      
      .footer .copyright {
        font-size: .875rem;
      }
      
      .form-control-label {
        font-size: .875rem;
        font-weight: 600;
        color: #525f7f;
      }
      
      .form-control {
        font-size: .875rem;
      }
      
      .form-control:focus:-ms-input-placeholder {
        color: #adb5bd;
      }
      
      .form-control:focus::-ms-input-placeholder {
        color: #adb5bd;
      }
      
      .form-control:focus::placeholder {
        color: #adb5bd;
      }
      
     
      
      .form-control-alternative {
        transition: box-shadow .15s ease;
        border: 0;
        box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);
      }
      
      .form-control-alternative:focus {
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
      }
      
      .input-group {
        transition: all .15s ease;
        border-radius: .375rem;
        box-shadow: none;
      }
      
      .input-group .form-control {
        box-shadow: none;
      }
      
      .input-group .form-control:not(:first-child) {
        padding-left: 0;
        border-left: 0;
      }
      
      .input-group .form-control:not(:last-child) {
        padding-right: 0;
        border-right: 0;
      }
      
      .input-group .form-control:focus {
        box-shadow: none;
      }
      
      .input-group-text {
        transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);
      }
      
      .input-group-alternative {
        transition: box-shadow .15s ease;
        border: 0;
        box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);
      }
      
      .input-group-alternative .form-control,
      .input-group-alternative .input-group-text {
        border: 0;
        box-shadow: none;
      }
      
      
      
      
      .input-group {
        transition: all .15s ease;
        border-radius: .375rem;
        box-shadow: none;
      }
      
      .input-group .form-control {
        box-shadow: none;
      }
      
      .input-group .form-control:not(:first-child) {
        padding-left: 0;
        border-left: 0;
      }
      
      .input-group .form-control:not(:last-child) {
        padding-right: 0;
        border-right: 0;
      }
      
      .input-group .form-control:focus {
        box-shadow: none;
      }
      
      .input-group-text {
        transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);
      }
      
      .input-group-alternative {
        transition: box-shadow .15s ease;
        border: 0;
        box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);
      }
      
      .input-group-alternative .form-control,
      .input-group-alternative .input-group-text {
        border: 0;
        box-shadow: none;
      }
    
      p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.7;
      }
      
      .description {
        font-size: .875rem;
      }
      
      .heading {
        font-size: .95rem;
        font-weight: 600;
        letter-spacing: .025em;
        text-transform: uppercase;
      }
      
      .heading-small {
        font-size: .75rem;
        padding-top: .25rem;
        padding-bottom: .25rem;
        letter-spacing: .04em;
        text-transform: uppercase;
      }
      
      .display-2 span {
        font-weight: 300;
        display: block;
      }
      
      @media (max-width: 768px) {
        .btn {
          margin-bottom: 10px;
        }
      }
      .card-profile-image  label{
        
          display: inline-block;
          position:absolute;
          background-color: indigo;
          color: white;
          padding: 0.5rem;
          left:50%;
          transform:translateX(-50%);
          top:105px;
          border-radius: 0.3rem;
          cursor: pointer;
        
        
      }
     
      `}
      </style>
    </>
  );
}
