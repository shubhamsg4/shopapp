import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <Fragment>
  <header class="row border-bottom">
    <div class="col-12 px-0 top-gry">
      <div class="container">
        <div class="row">
          <div class="text-right col-12">
            <ul class="list-inline top-links">
              <li class="list-inline-item"><a href="#" data-toggle="modal" data-target="#login">Login/Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 px-0 bg-white py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-5 col-md-4">
            <ul class="list-inline m-0">
             <li class="list-inline-item">
                <div class="hamburger-icon" id="desktop-hamburger">
                  <div class="top"></div>
                  <div class="middle"></div>
                  <div class="bottom"></div>
                </div>
             </li>
             <li class="list-inline-item call nowrap">
              <span><a href="tel:18001033314"><img src="assets/images/call.png" alt="logo" /></a></span>
              <span class="pl-l fw-700 d-none d-md-inline-block">1800-103-3314</span>
             </li>
            </ul>
          </div>
          <div class="col-md-4 d-none d-md-block">
            <div class="classSearch">
              <input type="text" name="" class="form-control" placeholder="Search by Brand / Product" />
            </div>
          </div>
          <div class="col-7 col-md-4 text-right center-logo">
            <a href="index.html"><img src="assets/images/logo.png" class="img-fluid" /></a>
          </div>
        </div>
      </div>
    </div>
  </header>

        </Fragment>

    )
}


export default Header
