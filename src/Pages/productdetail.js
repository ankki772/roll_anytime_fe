import React from 'react'
import { useParams } from 'react-router-dom'
export default function Productdetail() {
  const {product_id} = useParams();
  console.log("product id " , product_id)
  return (
    <div>Productdetail</div>
  )
}
