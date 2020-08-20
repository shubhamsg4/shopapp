import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import TrendingBrands from "../common/TrendingBrands";
import DiscountOffer from "./DiscountOffer";
import TrendingCategory from "./TrendingCategory";
import BestSellingBrands from "./BestSellingBrands";
import DealsOfferDiscount from "./DealsOfferDiscount";
import CarouselHome from "./CarouselHome";
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";

function HomePage() {
  return (
      <Fragment>
        <Header />
        <LeftNav />
        <Navbar />
        <CarouselHome />
        <DealsOfferDiscount />
        <BestSellingBrands />
        <TrendingCategory />
        <DiscountOffer />
        <TrendingBrands />
        <Footer />
      </Fragment>
  );
}

export default HomePage;
