import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const HowToRedeem = props => {
    return (
        <Fragment>
           <section className="row howTo pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h4 text-uppercase fw-700 text-muted"><span>How to Redeem</span></h3>
            </div>
            <div className="col-12">
              <div className="how-to-Redeem-carousel owl-carousel stepsBox fs-12">
                <div className="item m-1">
                  <figure>
                    <img src="assets/images/step_1.png"></img>
                    <figcaption>
                      <p>Use the outlet locator to locate the nearest outlet that accepts this Gift Voucher.</p>
                    </figcaption>
                  </figure>
                </div>
                <div className="item m-1">
                  <figure>
                    <img src="assets/images/step_2.png" />
                    <figcaption>
                      <p>Select your choice of product.</p>
                    </figcaption>
                  </figure>
                </div>
                <div className="item m-1">
                  <figure>
                    <img src="assets/images/step_3.png"/>
                    <figcaption>
                      <p>Share your Gift Voucher with the cashier at the time of billing & pay the remaining amount by cash or card if required.</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div> 
        </section> 
        </Fragment>
    )
}


export default HowToRedeem
