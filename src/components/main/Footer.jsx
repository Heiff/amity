import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import img from "../assets/img/gallery/cta-bg.png"
import dot from "../assets/img/gallery/dot-bg.png"
const Footer = () => {
  return (
    <div>
        <section className="bg-primary">

<div className="bg-holder bg-size" style={{backgroundImage:`url(${img})`,backgroundPosition:"center right",marginTop:"-6.125rem",backgroundSize:"200px 200px"}}>
        </div>


<div className="container">
          <div className="d">
            <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0"><Link className="text-decoration-none" href="#"><img src={logo} height="51" alt="" /></Link>
              <p className="text-light my-4">The world's most trusted <br />telehealth company.</p>
            </div>
            <div className="info">
              <span>Contact</span>
              <div>
              <i class="fa-solid fa-phone"></i>
              <p>+998 93 513 99 33</p>
              </div>
              <div>
              <i class="fa-solid fa-envelope"></i>
              <p>info@soglombola.uz</p>
              </div>
              <div>
              <i class="fa-solid fa-location-dot"></i>
              <p>Toshkent shahri, A.Temur ko`chasi 60A</p>
              </div>
            </div>
            
          </div>
        </div>

<section className="py-0 bg-primary">
<div className="bg-holder opacity-25" style={{backgroundImage:`url(${dot})`,backgroundPosition:"top left",marginTop:"-3.125rem",backgroundSize:"auto"}}></div>
<div className="container">
  <div className="row justify-content-md-between justify-content-evenly py-4">
    <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
      <p className="fs--1 my-2 fw-bold text-200">All rights Reserved &copy; Your Company, 2024</p>
    </div>
    <div className="col-12 col-sm-8 col-md-6">
    </div>
  </div>
</div>


</section>
</section>
    </div>
  )
}

export default Footer