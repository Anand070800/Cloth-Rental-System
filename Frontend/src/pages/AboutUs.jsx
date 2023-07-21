import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../components/navbar/Navbar";

const AboutUs=()=>{
    return (<>
    <NavigationBar/>
    <div ClassName="bg-light">
  <div ClassName="container py-5">
    <div ClassName="row h-100 align-items-center py-5">
      <div ClassName="col-lg-6">
        <h1 ClassName="display-4">About us page</h1>
        <p ClassName="lead text-muted mb-0">Create a minimal about us page using Bootstrap 4.</p>
        <p ClassName="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" ClassName="text-muted"> 
                    <u>Bootstrapious</u></a>
        </p>
      </div>
      <div ClassName="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" ClassName="img-fluid"/></div>
    </div>
  </div>
</div>

<div ClassName="bg-white py-5">
  <div ClassName="container py-5">
    <div ClassName="row align-items-center mb-5">
      <div ClassName="col-lg-6 order-2 order-lg-1"><i ClassName="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 ClassName="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p ClassName="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" ClassName="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div ClassName="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" ClassName="img-fluid mb-4 mb-lg-0"/></div>
    </div>
    <div ClassName="row align-items-center">
      <div ClassName="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" ClassName="img-fluid mb-4 mb-lg-0"/></div>
      <div ClassName="col-lg-6"><i ClassName="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 ClassName="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p ClassName="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" ClassName="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>

<div ClassName="bg-light py-5">
  <div ClassName="container py-5">
    <div ClassName="row mb-4">
      <div ClassName="col-lg-5">
        <h2 ClassName="display-4 font-weight-light">Our team</h2>
        <p ClassName="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>

    <div ClassName="row text-center">
      
      <div ClassName="col-xl-3 col-sm-6 mb-5">
        <div ClassName="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" ClassName="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 ClassName="mb-0">Manuella Nevoresky</h5><span ClassName="small text-uppercase text-muted">CEO - Founder</span>
          <ul ClassName="social mb-0 list-inline mt-3">
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-facebook-f"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-twitter"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-instagram"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
     

      
      <div ClassName="col-xl-3 col-sm-6 mb-5">
        <div ClassName="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" ClassName="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 ClassName="mb-0">Samuel Hardy</h5><span ClassName="small text-uppercase text-muted">CEO - Founder</span>
          <ul ClassName="social mb-0 list-inline mt-3">
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-facebook-f"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-twitter"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-instagram"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      {/* End */}

      {/* Team item */}
      <div ClassName="col-xl-3 col-sm-6 mb-5">
        <div ClassName="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" ClassName="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 ClassName="mb-0">Tom Sunderland</h5><span ClassName="small text-uppercase text-muted">CEO - Founder</span>
          <ul ClassName="social mb-0 list-inline mt-3">
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-facebook-f"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-twitter"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-instagram"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


      <div ClassName="col-xl-3 col-sm-6 mb-5">
        <div ClassName="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" ClassName="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 ClassName="mb-0">John Tarly</h5><span ClassName="small text-uppercase text-muted">CEO - Founder</span>
          <ul ClassName="social mb-0 list-inline mt-3">
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-facebook-f"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-twitter"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-instagram"></i></a></li>
            <li ClassName="list-inline-item"><a href="#" ClassName={styles.socialLink}><i ClassName="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      {/* End */}

    </div>
  </div>
</div>
    </>)
}
export default AboutUs;