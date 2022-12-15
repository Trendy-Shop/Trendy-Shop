import React from 'react'
import { Router } from "next/router";
import axios from 'axios'
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/prod/prod")
  const data = await res.json()

  return {
    props: { products: data }
  }

}

const Products = ({ products }: any) => {
  console.log(products);

  return (
    <>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {products.map((e: any) => {
            return (<div key={e._id} className="card">
              <img src={e.ImageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.Product}</h5>
                <p className="card-text">{e.Description}</p>
                <p className="card-text"><small className="text-muted">{e.Price}</small></p>
              </div>
            </div>)
          })}
        </div></div>
    </>
  )
}

export default Products