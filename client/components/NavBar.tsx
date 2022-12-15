import React from 'react'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <img src="http://res.cloudinary.com/dqz0n291c/image/upload/c_scale,h_70,w_100/v1671042018/trendy_cairap.png" alt="" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav"  >
          <a style={{ marginLeft: '30%' }} className="nav-item nav-link " href="/" ><h4>Home</h4> </a>
          <a style={{ marginLeft: '30%' }} className="nav-item nav-link" href="/products"><h4>Products</h4></a>
          <a style={{ marginLeft: '30%' }} className="nav-item nav-link" href="/cart"><h4>Cart</h4></a>

        </div>
      </div>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <div className="navbar-nav" style={{ height: "60%", width: "20%", marginLeft: "10%" }} >
        <a className="nav-item nav-link " href="/login" ><h4>Login</h4> </a>
        <a className="nav-item nav-link " href="/login" ><h4>Signup</h4> </a>
        <a className="nav-item nav-link " href="/login" ><h4>Logout</h4> </a>
      </div>
    </nav>
  )
}

export default NavBar