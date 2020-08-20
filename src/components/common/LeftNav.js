import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const LeftNav = props => {
    return (
       <Fragment>
<a href="#" className="cartBtn"><span>1</span><img src="assets/images/cart.png" /></a>
<div className="off-canvas-nav">
  <div className="left-nav-toplink">
    <div className="left-nav">
      <ul className="list-unstyled m-0">
        <li><a href="index.html">Home</a></li>
        <li><a href="#">New Arrivals</a></li>
        <li className="show-mobile parent"><a href="#" data-related="title_1">Categories</a></li>
        <li><a href="#">Discounts</a></li>
        <li><a href="#">Bogo</a></li>
        <li><a href="#">Check My Voucher Status</a></li>
        <li><a href="#">Resend My Voucher</a></li>
        <li><a href="#">My Transactions</a></li>
        <li><a href="#">Customer Care</a></li>
      </ul>
      <div className="subMenu" id="categories">
        <div className="text-right nav-back"><span>Categories</span></div>
        <ul className="list-unstyled m-0">
          <li><a href="category.html">Apparel & Accessories</a></li>
          <li><a href="category.html">Food & Beverage</a></li>
          <li><a href="category.html">Grocery & Home Needs</a></li>
          <li><a href="category.html">Mobile & Electronics</a></li>
          <li><a href="category.html">Health & Wellness</a></li>
          <li><a href="category.html">e-Com & Online</a></li>
          <li><a href="category.html">Entertainment & Magazines</a></li>
          <li><a href="category.html">Cabs & Travel</a></li>
          <li><a href="category.html">All Brands</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

       </Fragment>
    )
}

export default LeftNav
