import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const DealsOfferDiscount = props => {
    return (
       <Fragment>
           <section class="row py-2">
      <div class="col-12 p-0">
        <div class="container">
          <div class="row">

            <div class="col-12 col-md-3 p-3 pr-md-0">
              <div class="p-3 shadow-sm border rounded">
                <div>
                   <h3 class="h4 fw-700 text-uppercase m-0">Deal of the day</h3>
                   <p class="fs-12 mb-2">Amazing Deals from choicest brands!</p>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="assets/images/deals.jpg" alt="deals" class="w-100" />
                  </a>
                </div>
                <div class="text-right">
                  <a href="#" class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-3">
              <div class="p-3 shadow-sm border rounded">
                <div>
                   <h3 class="h4 fw-700 text-uppercase m-0">Offers</h3>
                   <p class="fs-14 mb-2">Top discounts & deals on leading brands!</p>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="assets/images/offers-1.jpg" alt="offers-1" class="w-100" />
                  </a>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="assets/images/offers-2.jpg" alt="offers-1" class="w-100" />
                  </a>
                </div>
                <div class="text-right">
                  <a href="#" class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">VIEW MORE</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3 p-3 pl-md-0">
              <div class="p-3 shadow-sm border rounded">
                <div>
                   <h3 class="h4 fw-700 text-uppercase m-0">discounts</h3>
                   <p class="fs-12 mb-2">Buy fast moving brands just for you</p>
                </div>
                <div class="shadow-sm mb-3">
                  <a href="#">
                    <img src="assets/images/discount.jpg" alt="dicount" class="w-100" />
                  </a>
                </div>
                <div class="text-right">
                  <a href="#" class="btn btn-sm btn-danger btn-block rounded-0 fs-14 pb-1">View More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
       </Fragment>
    )
}

export default DealsOfferDiscount
