import React, { useContext, useState } from "react";
import { signInFiels } from "../helpers/signInFiels";
import Input from "../Components/input";
import { signInUser } from "../Api/Services/user";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/userContext";
import { setCookies } from "../helpers/cookiehelper";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../Redux/action";

export default function SignIn() {
  const navigate = useNavigate()
  let dispatch = useDispatch();
  const {setAuth} = useContext(UserContext);
  const [values, setValues] = useState({
    emailphone: "",
    password: "",
  });

function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str)
  }

  const onChange = (e)=>{
      setValues({...values,[e.target.name]:e.target.value});
  }
  const onSubmit= async (e)=>{

    let countryCode = "+91";

    if(validatePhoneNumber(values.emailphone)){
      values.emailphone = `${countryCode}${values.emailphone}`
    }
    e.preventDefault();
    let response = await signInUser(values);
    console.log("response from login",response,response?.status == 200)
    if(response?.token){
      setAuth(true)
      console.log("naviagteion")
      dispatch(fetchCartData())
      navigate('/');
    }
    else{
      setAuth(false)
    }
    
  }
  return (
    <>
      <div className="center">
        <h1>SIGN IN</h1>
        <form onSubmit={onSubmit}>
          {signInFiels.map((input) => (
            <div className="txt_field" key={input.id}>
              <Input key={input.id} {...input} value={values[input.name]} onChange={onChange} editable={true}/>
            </div>            
          ))}
          <div className="pass">Forgot password?</div>
          <button type="submit">Sign in</button>
          <div className="signup_link">
            Not a member ? <Link to="/signup"> sign up</Link>
          </div>
        </form>
      </div>

      <style jsx="true">
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: verdana;
            background: linear-gradient(120deg, #2980b9, #8e44ad);
            height: 100vh;
            overflow: hidden;
          }

          .center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 350px;
            background: white;
            border-radius: 10px;
          }

          .center H1 {
            text-align: center;
            padding: 0 0 20px 0;
            border-bottom: 1px solid silver;
          }

          .center form {
            padding: 0 40px;
            box-sizing: border-box;
          }

          form .txt_field {
            position: relative;
            border-bottom: 2px solid #adadad;
            margin: 30px 0;
          }

          .txt_field input {
            width: 100%;
            padding: 0.5px;
            height: 40px;
            font-size: 16px;
            border: none;
            backgroung: none;
            outline: none;
          }

          .txt_field label {
            position: absolute;
            top: 50%;
            left: 5px;
            color: #adadad;
            transform: translateY(-50%);
            font-size: 16px;
            pointer-events: none;
            transition: 0.5s;
          }

          .txt_field span::before {
            content: "";
            position: absolute;
            top: 40px;
            left: 0;
            width: 0%;
            height: 2px;
            background: #2691d9;
            transition: 0.5s;
          }

          .txt_field input:focus ~ label,
          .txt_field input:valid ~ label {
            top: -5px;
            color: #2691d9;
          }

          .txt_field input:focus ~ span::before,
          .txt_field input:valid ~ span::before {
            width: 100%;
          }

          .pass {
            margin: 2px 0 20px 5px;
            color: #a6a6a6;
            cursor: pointer;
            transition: 0.5s;
          }

          .pass:hover {
            text-decoration: underline;
            color: #2691d9;
            transition: 0.5s;
          }

          button {
            width: 100%;
            height: 50px;
            border: 1px solid;
            background: #2691d9;
            border-radius: 25px;
            font-size: 18px;
            color: #e9f4fb;
            font-weight: 700;
            cursor: pointer;
            outline: none;
            transition: 0.5s;
          }

          input[type="submit"]:hover {
            border: solid 10px #2691d9;
            transition: 0.5s;
          }

          .signup_link {
            margin: 30px 0;
            text-align: center;
            font-size: 16px;
            color: #666666;
          }

          .signup_link a {
            color: #2691d9;
            text-decoration: none;
            transition: 0.5s;
          }

          .signup_link a:hover {
            text-decoration: underline;
            transition: 0.5s;
            color: #666666;
          }
          small {
            display: none;
            position:absolute;
            top:42px;
            color:red
          }
          input:invalid[focused="true"] ~ small {
            display: block;
          }
        
        `}
      </style>
    </>
  );
}
