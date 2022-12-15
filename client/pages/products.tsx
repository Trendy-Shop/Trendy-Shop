import React from 'react'
import { Router } from "next/router";
import axios from 'axios'
export const getStaticProps=async()=>{
  const res=await fetch("http://localhost:5000/prod/prod")
  const data = await res.json()

return {
  props:{products:data}
}

}

const Products = ({products}:any) => {
 console.log(products);
 
  return (

<div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
 
</div>
  )
}

export default Products