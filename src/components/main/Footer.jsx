import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/gallery/footer-logo.png"
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
            <div className='d_d'>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
              <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">Departments</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><Link className="footer-link" href="#!">Eye care</Link></li>
                <li className="lh-lg"><Link className="footer-link" href="#!">Cardiac are</Link></li>
                <li className="lh-lg"><Link className="footer-link" href="#!">Heart care</Link></li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">Membership</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><Link className="footer-link" href="#!">Free trial</Link></li>
                <li className="lh-lg"><Link className="footer-link" href="#!">Silver</Link></li>
                <li className="lh-lg"><Link className="footer-link" href="#!">Premium</Link></li>
              </ul>
            </div>
            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
              <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"> Customer Care</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><Link className="footer-link" href="#!">About Us</Link></li>
                <li className="lh-lg"><Link className="footer-link" href="#!">Contact US</Link></li>
                <li className="lh-lg"><Link className="footer-link" href="#!">Get Update</Link></li>
              </ul>
            </div>
            </div>
          </div>
        </div>

<section className="py-0 bg-primary">
<div className="bg-holder opacity-25" style={{backgroundImage:`url(${dot})`,backgroundPosition:"top left",marginTop:"-3.125rem",backgroundSize:"auto"}}></div>
<div className="container">
  <div className="row justify-content-md-between justify-content-evenly py-4">
    <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
      <p className="fs--1 my-2 fw-bold text-200">All rights Reserved &copy; Your Company, 2021</p>
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