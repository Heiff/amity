import React from 'react'
import img from "./assets/img/gallery/hero.png"
import img2 from "./assets/img/icons/neurology.png"
import img3 from "./assets/img/icons/eye-care.png"
import img4 from "./assets/img/icons/cardiac.png"
import img5 from "./assets/img/icons/heart.png"
import img6 from "./assets/img/icons/osteoporosis.png"
import img7 from "./assets/img/icons/ent.png"
import img8 from "./assets/img/gallery/eye-care.png"
import img9 from "./assets/img/gallery/health-care.png"
import img10 from "./assets/img/gallery/anita.png"
import img11 from "./assets/img/gallery/jane.png"
import img12 from "./assets/img/gallery/people-who-loves.png"
import img13 from "./assets/img/gallery/appointment.png"
import img14 from "./assets/img/gallery/covid-19.png"
import img15 from "./assets/img/gallery/laboratories.png"
import img16 from "./assets/img/gallery/nicotine.png"
import img17 from "./assets/img/gallery/treatment.png"
import hero from "./assets/img/gallery/hero-bg.png"
import dep from "./assets/img/gallery/bg-departments.png"
import bgs from "./assets/img/gallery/bg-eye-care.png"
import about from "./assets/img/gallery/about-us.png"
import about_bg from "./assets/img/gallery/about-bg.png"
import our_doctors from "./assets/img/gallery/doctors-us.png"
import our_people from "./assets/img/gallery/people.png"
import people_bg from "./assets/img/gallery/people-bg-1.png"
import bg from "./assets/img/gallery/blog-post.png"
import dot from "./assets/img/gallery/dot-bg.png"
import { Link } from 'react-router-dom'
import Navbar from './main/Navbar'
import Footer from './main/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
         <section className="py-xxl-10 pb-0" id="home">
         <div className="bg-holder bg-size" style={{backgroundImage:`url(${hero})`,backgroundPosition:"top center",backgroundSize:"cover"}}></div>
        <div className="container">
          <div className="min-vh-xl-100 min-vh-xxl-25" style={{display:"flex",justifyContent:"space-between",flexDirection:"row-reverse",alignItems:"center",marginTop:"100px"}}>
            <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100" src={img} alt="hero-header" /></div>
            <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-6">
              <h1 className="fw-light font-base fs-6 fs-xxl-7">We're <strong>determined </strong>for<br />your&nbsp;<strong>better life.</strong></h1>
              <p className="fs-1 mb-5">You can get the care you need 24/7 – be it online or in <br />person. You will be treated by caring specialist doctors. </p><Link className="btn btn-lg btn-primary rounded-pill" href="#!" role="button">Make an Appointment</Link>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5" id="departments">

<div className="container">
  <div className="row">
    <div className="col-12 py-3" style={{textAlign:"center",margin:"0 auto"}}>
    <div className="bg-holder bg-size" style={{backgroundImage:`url(${dep})`,backgroundPosition:"top center",backgroundSize:"contain"}}></div>
    <h1 className="text-center">OUR DEPARTMENTS</h1>  
    </div>
  </div>
</div>


</section>


<section>

<div className="container">
  <div className="icons"> 
    <div className="icon">
      <div >
      <img className="mb-3 deparment-icon" src={img2} alt="..." />
            <p>Neurology</p>
         
      </div>
    </div>
    <div className="icon">
      <div >
      <img className="mb-3 deparment-icon" src={img2} alt="..." />
            <p>Neurology</p>
         
      </div>
    </div>
    <div className="icon">
      <div >
      <img className="mb-3 deparment-icon" src={img2} alt="..." />
            <p>Neurology</p>
         
      </div>
    </div>
    <div className="icon">
      <div >
      <img className="mb-3 deparment-icon" src={img2} alt="..." />
            <p>Neurology</p>
         
      </div>
    </div>
    <div className="icon">
      <div >
      <img className="mb-3 deparment-icon" src={img2} alt="..." />
            <p>Neurology</p>
         
      </div>
    </div>
    <div className="icon">
      <div >
      <img className="mb-3 deparment-icon" src={img2} alt="..." />
            <p>Neurology</p>
         
      </div>
    </div>
  </div>
</div>

</section>



<section className="bg-secondary">
<div className="bg-holder" style={{backgroundImage:`url(${bgs})`,backgroundPosition:"center",backgroundSize:"contain",backgroundColor:"#0077b5"}}></div>
        <div className="container">
          <div className="align-items-center" style={{display:"flex",justifyContent:"space-around"}}>
            <div className=""><img className="img-fluid" src={img8} alt="..." /></div>
            <div className=" text-center text-md-start" style={{display:"grid"}}>
              <h2 className="fw-bold text-light mb-4 mt-4 mt-lg-0">Eye Care with Top Professionals<br className="d-none d-sm-block" />and In Budget.</h2>
              <p className="text-light">We've built a healthcare system that puts your needs first.<br className="d-none d-sm-block" />For us, there is nothing more important than the health of <br className="d-none d-sm-block" />you and your loved ones. </p>
              <div className="py-3"><Link className="btn btn-lg btn-light rounded-pill" href="#!" role="button">Learn more </Link></div>
            </div>
          </div>
        </div>
      </section>



      <section className="pb-0" id="about">

<div className="container">
  <div className="row">
    <div className="col-12 py-3" style={{margin:"0 auto"}}> 
    <div className="bg-holder" style={{backgroundImage:`url(${about})`,backgroundPosition:"center",backgroundSize:"contain"}}></div>
      <h1 className="text-center">ABOUT US</h1>
    </div>
  </div>
</div>

</section>

<section className="py-5">
<div className="bg-holder" style={{backgroundImage:`url(${about_bg})`,backgroundPosition:"top center",backgroundSize:"contain"}}></div>
     

        <div className="container">
          <div className="align-items-center" style={{display:"flex",justifyContent:"center"}}>
            <div className="col-md-6 order-lg-1 mb-5 mb-lg-0"><img className="fit-cover rounded-circle w-100" src={img9} alt="..." /></div>
            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold mb-4">We are developing a healthcare <br className="d-none d-sm-block" />system around you</h2>
              <p>We think that everyone should have easy access to excellent <br className="d-none d-sm-block" />healthcare. Our aim is to make the procedure as simple as <br className="d-none d-sm-block" />possible for our patients and to offer treatment no matter<br className="d-none d-sm-block" />where they are — in person or at their convenience. </p>
              <div className="py-3">
                <button className="btn btn-lg btn-outline-primary rounded-pill" type="submit">Learn more </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pb-0">

<div className="container">
  <div className="row">
    <div className="col-12 py-3" style={{margin:"0 auto"}}>
    <div className="bg-holder" style={{backgroundImage:`url(${our_doctors})`,backgroundPosition:"center",backgroundSize:"contain"}}></div>
      <h1 className="text-center">OUR DOCTORS</h1>
    </div>
  </div>
</div>


</section>


<section className="py-5">
        <div className="bg-holder bg-size" >
        </div>
        

        <div className="container">
          <div className="row flex-center">
            <div className="col-xl-10 px-0">
              <div className="carousel slide" id="carouselExampleDark" data-bs-ride="carousel">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000" style={{display:"flex",justifyContent:"center"}}>
                    <div className="h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7" style={{display:"flex",gap:"20px",width:"80%",margin:"0 auto",justifyContent:"center"}}>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img10} width="128" alt="..." />
                            <h5 className="mt-3">Anita Deshai</h5>
                            <p className="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
                            <p className="text-600 mb-0">Florida, United States</p>
                            <p className="text-600 mb-4">10 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img11} width="128" alt="..." />
                            <h5 className="mt-3">Jane Flakis</h5>
                            <p className="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
                            <p className="text-600 mb-0">Melbourne, Australia</p>
                            <p className="text-600 mb-4">12 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img11} width="128" alt="..." />
                            <h5 className="mt-3">Leo Mario</h5>
                            <p className="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
                            <p className="text-600 mb-0">London, England</p>
                            <p className="text-600 mb-4">25 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7" style={{display:"flex",gap:"20px",width:"80%",margin:"0 auto",justifyContent:"center"}}>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img10} width="128" alt="..." />
                            <h5 className="mt-3">Anita Deshai</h5>
                            <p className="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
                            <p className="text-600 mb-0">Florida, United States</p>
                            <p className="text-600 mb-4">10 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img10} width="128" alt="..." />
                            <h5 className="mt-3">Jane Flakis</h5>
                            <p className="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
                            <p className="text-600 mb-0">Melbourne, Australia</p>
                            <p className="text-600 mb-4">12 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img11} width="128" alt="..." />
                            <h5 className="mt-3">Leo Mario</h5>
                            <p className="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
                            <p className="text-600 mb-0">London, England</p>
                            <p className="text-600 mb-4">25 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7" style={{display:"flex",gap:"20px",width:"80%",margin:"0 auto",justifyContent:"center"}}>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img10}  width="128" alt="..." />
                            <h5 className="mt-3">Anita Deshai</h5>
                            <p className="mb-0 fs-xxl-1">Pediatrics, Gochi Medicine</p>
                            <p className="text-600 mb-0">Florida, United States</p>
                            <p className="text-600 mb-4">10 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img11} width="128" alt="..." />
                            <h5 className="mt-3">Jane Flakis</h5>
                            <p className="mb-0 fs-xxl-1">Gynaecology, Abenka Care</p>
                            <p className="text-600 mb-0">Melbourne, Australia</p>
                            <p className="text-600 mb-4">12 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-outline-secondary rounded-pill" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-8 mb-md-0">
                        <div className="card card-span h-100 shadow">
                          <div className="card-body d-flex flex-column flex-center py-5"><img src={img10} width="128" alt="..." />
                            <h5 className="mt-3">Leo Mario</h5>
                            <p className="mb-0 fs-xxl-1">Physiotherapy, FitCare</p>
                            <p className="text-600 mb-0">London, England</p>
                            <p className="text-600 mb-4">25 years experience</p>
                            <div className="text-center">
                              <button className="btn btn-secondary hover-top rounded-pill border-0" type="submit">View Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-5">

<div className="container">
  <div className="row">
    <div className="col-12 py-3" style={{margin:"0 auto"}}>
    <div className="bg-holder" style={{backgroundImage:`url(${our_people})`,backgroundPosition:"center",backgroundSize:"contain"}}></div>
      <h1 className="text-center">PEOPLE WHO LOVE US</h1>
    </div>
  </div>
</div>


</section>


<section className="py-8">
<div className="bg-holder" style={{backgroundImage:`url(${people_bg})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
        
        <div className="container">
          <div className="row align-items-center offset-sm-1">
            <div className="carousel slide" id="carouselPeople" data-bs-ride="carousel">
              <div className="carousel-inner" style={{paddingTop:"20px"}}>
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="h-100" style={{display:"flex",alignItems:"center"}}>
                    <div className="col-sm-3 text-center"><img src={img12} width="100" alt="" />
                      <h5 className="mt-3 fw-medium text-secondary">Edward Newgate</h5>
                      <p className="fw-normal mb-0">Founder Circle</p>
                    </div>
                    <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div className="my-2"><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star-half-alt me-2"></i><i className="far fa-star"></i></div>
                      <p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <div className="h-100" style={{display:"flex"}}>
                    <div className="col-sm-3 text-center"><img src={img12} width="100" alt="" />
                      <h5 className="mt-3 fw-medium text-secondary">Jhon Doe</h5>
                      <p className="fw-normal mb-0">UI/UX Designer</p>
                    </div>
                    <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div className="my-2"><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star-half-alt me-2"></i><i className="far fa-star"></i></div>
                      <p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="h-100" style={{display:"flex"}}>
                    <div className="col-sm-3 text-center"><img src={img12} width="100" alt="" />
                      <h5 className="mt-3 fw-medium text-secondary">Jeny Doe</h5>
                      <p className="fw-normal mb-0">Web Designer</p>
                    </div>
                    <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div className="my-2"><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star me-2"></i><i className="fas fa-star-half-alt me-2"></i><i className="far fa-star"></i></div>
                      <p>This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. A mobile app and a website are available via which you can easily schedule appointments, get online consultations, and see physicians, who will assist you through the whole procedure. And all of the prescriptions, medications, and other services they offer are 100% genuine, medically verified, and proved. I believe that the Livedoc staff is doing an outstanding job. Highly recommended their health care services.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="position-relative z-index-2 mt-5">
                  <ol className="carousel-indicators">
                    <li className="active" data-bs-target="#carouselPeople" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carouselPeople" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselPeople" data-bs-slide-to="2" > </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-5">


      <div className="container">
  <div className="row">
    <div className="col-12 py-3" style={{margin:"0 auto"}}>
    <div className="bg-holder" style={{backgroundImage:`url(${our_people})`,backgroundPosition:"center",backgroundSize:"contain"}}></div>
      <h1 className="text-center">APPOINTMENT</h1>
    </div>
  </div>
</div>


</section>

<section className="py-8">
        <div className="container">
          <div className="row">
            <div className="bg-holder bg-size" >
            </div>
            <div className="col-lg-6 z-index-2 mb-5"><img className="w-100" src={img13} alt="..." /></div>
            <div className="col-lg-6 z-index-2">
              <form className="gr g-3">
                <div className="col-md-6 tt" >
                  <label className="visually-hidden" htmlFor="inputName">Name</label>
                  <input className="form-control form-livedoc-control" id="inputName" type="text" placeholder="Name" />
                </div>
                <div className="col-md-6 tt">
                  <label className="visually-hidden" htmlFor="inputPhone">Phone</label>
                  <input className="form-control form-livedoc-control" id="inputPhone" type="text" placeholder="Phone" />
                </div>
                <div className="col-md-6 tt">
                  <label className="form-label visually-hidden" htmlFor="inputCategory">Category</label>
                  <select className="form-select" id="inputCategory">
                    <option >Category</option>
                    <option> Category One</option>
                    <option> Category Two</option>
                    <option> Category Three</option>
                  </select>
                </div>
                <div className="col-md-6 tt">
                  <label className="form-label visually-hidden" htmlFor="inputEmail">Email</label>
                  <input className="form-control form-livedoc-control" id="inputEmail" type="email" placeholder="Email" />
                </div>
                <div className="col-md-12">
                  <label className="form-label visually-hidden" htmlFor="validationTextarea">Message</label>
                  <textarea className="form-control form-livedoc-control" id="validationTextarea" placeholder="Message" style={{height:"250px"}} required="required"></textarea>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary rounded-pill" type="submit">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>



      <section className="py-5">

<div className="container">
  <div className="row">
    <div className="col-12 py-3" style={{margin:"0 auto"}}>
    <div className="bg-holder" style={{backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundSize:"contain"}}></div>
      <h1 className="text-center">RECENT BLOGPOSTS</h1>
    </div>
  </div>
</div>


</section>



    <Footer/>
    </div>
  )
}

export default Home