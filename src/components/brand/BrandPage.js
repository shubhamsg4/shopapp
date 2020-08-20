import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import HowToRedeem from './HowToRedeem';
import Voucher from './Voucher';
import BrandHeader from "./BrandHeader";
import Footer from '../common/Footer'
import TrendingBrands from '../common/TrendingBrands';
import Summary from './Summary';
import Navbar from '../common/Navbar';
import LeftNav from '../common/LeftNav';
import Header from '../common/Header'

const BrandPage = props => {
    return (
      <Fragment>
        <Header />
        <LeftNav />
        <Navbar />
        <Voucher />
        <HowToRedeem />
        <TrendingBrands />
        <Footer />
      </Fragment>
    );
}

export default BrandPage
