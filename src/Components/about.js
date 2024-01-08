import React from 'react'
import AboutImage from '../Assets/Images/roll_anytime.png'

export default function About() {
  return (
    <>
    <div className='about-content'>
      <div className='first'>
      <img src={AboutImage} alt='abou' className="img2" loading="lazy"/>
      </div>
      <div className='second'>
        <h2>
        About <br/>
        Roll Anytime
        </h2>
        <h6>
        Convenient access to any item
        </h6>
        <p>
        Car Rental Experience was extraordinary going with this taxis administration rental. The rates were moderate, driver was acceptable.<br/>
        Car Rental Experience was extraordinary going with this taxis administration rental. The rates were moderate, driver was acceptable.
        </p>
      </div>
    </div>
    
    <style jsx >{`
  .about-content{
    // height:50%;
    width:100%;
    // background-color:red;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px
    padding: 20px 0px 20px 0px;

  }
  .first{
    width: 50%;
    display: flex;
    height: 90%;
    justify-content: center;
    align-items: center;
  }
  .second{
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
  .second h2{
    font-family: Inter;
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: left;
    justify-content:left;

  }
  .img2{
    height:90%;
    width:90%;
  }
  .second h6{
    font-family: Inter;
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;

  }
  .second p{
    font-family: Inter;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

  }
  @media screen and (max-width: 768px) {
    .about-content{
      display: flex;
      flex-direction: column-reverse;
      padding: 10px 45px 10px 45px;
      margin-top:20px;

    }
    .first{
      width: 100%;
      // height: 60%;
      justify-content: flex-start;
      padding-left:30px;
    }
    .second{
      width: 100%;
      // height: 40%;
      padding-left:32px;
    }
  }
  @media screen and (max-width: 425px) {
    .about-content{
      padding: 10px 10px 10px 10px;

    }
  }
    `}
    </style>
    </>
  )
}
