import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';
import { totalsumCartPrice } from '../helpers/helper';
import { Link } from 'react-router-dom';

const BubbleComponent = () => {
    const userData = useSelector((state)=>state.addcart.data);
    // console.log("first",userData)
    const [totalCartPrice, setTotalCartPrice] = useState(totalsumCartPrice(userData))

    useEffect(() => {
      setTotalCartPrice(totalsumCartPrice(userData))
    }, [userData])
    

  return (
    <>
    <Draggable>
      <div className="draggable-bubble">
      Total Price of the Cart : {totalCartPrice}<br/>
      <Link to='/cart'>View Cart</Link>
      </div>
    </Draggable>
    <style jsx='true'>{`
    .draggable-bubble {
        background-color: #7ea7d2; /* Example background color */
        color: #fff; /* Example text color */
        padding: 15px;
        border-radius: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: move;
        position: absolute;
        z-index: 111;
        top: 80px;
        right: 30px;
      }
      .draggable-bubble a {
        margin-left: 140px;
        color:#f6e0e0;
      }
    `}</style>
    </>
  );
};

export default BubbleComponent;
