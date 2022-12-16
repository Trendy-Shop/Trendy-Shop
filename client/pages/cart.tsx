import React from 'react'
import { Router } from "next/router";
import {useState} from 'react'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
export const getStaticProps=async()=>{
    const res=await axios.get("http://localhost:5000/cart/cart")
    const data = await res.data
  
  return {
    props:{data:data}
  }
  
  }
  

const cart=({data}:any)=> {
    console.log(data);
    
    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                <div className="col align-self-center text-right text-muted">3 items</div>
                            </div>
                        </div>

                    {data.map((e:any)=>{
                        return(    
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src={e.ImageUrl} /></div>
                                <div className="col">
                                    <div className="row text-muted">{e.Category}</div>
                                    <div className="row">{e.Product}</div>
                                </div>
                                <div className="col">
                                    
                                </div>
                                <div className="col">{e.Price}$<span className="close">{" "}<button onClick={()=>{axios.delete(`http://localhost:5000/cart/${e._id}`); window.location.reload()}}>delete</button></span></div>
                            </div>
                        </div>)})}
                          <div className="back-to-shop"><a href="#"></a><span className="text-muted">⬅️ Back to shop</span></div>
                    </div>
                    <div className="col-md-4 summary ">
                        <div><h5><b>Summary</b></h5></div>
                     
                        <div className="row">
                            <div className="col" style={{paddingLeft:"0"}}>ITEMS 3</div>
                            <div className="col text-right">&euro; 132.00</div>
                        </div>
                        <form>
                            <p>SHIPPING</p>
                            <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                            <p>GIVE CODE</p>
                            <input id="code" placeholder="Enter your code" />
                        </form>
                        <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">&euro; 137.00</div>
                        </div>
                        <button className="btn">CHECKOUT</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default cart