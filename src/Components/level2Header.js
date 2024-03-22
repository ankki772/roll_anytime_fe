import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { totalsumCartPrice } from '../helpers/helper';

const Level2Header = ({ title }) => {

    const userData = useSelector((state)=>state.addcart.data);
    // console.log("first",userData)
    const [totalCartPrice, setTotalCartPrice] = useState(totalsumCartPrice(userData))

    useEffect(() => {
      setTotalCartPrice(totalsumCartPrice(userData))
    }, [userData])

  return (
    <>
    <div className="level2-header">
      <h2>Total Price of the Cart : {totalCartPrice}<br/></h2>
    </div>
    <style jsx='true'>{`
    .level2-header {
        background-color: #7ea7d2; /* Example background color */
        color: #fff; /* Example text color */
        padding: 15px;
        position:fixed;
        top: 75px;
        width:100vw;
        z-index:1;
      }
    `}</style>
    </>
  );
};

export default Level2Header;