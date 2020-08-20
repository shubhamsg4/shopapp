import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const Summary = props => {
    return (
      <Fragment>
        <div class="col-12 col-lg-4 topSticky">
          {" "}
          <a
            href="#"
            data-toggle="modal"
            data-target="#MobileSummaryPopup"
            class="MobileSummaryBtn"
          >
            <span>Summary</span>
            <span>₹ 800</span>
          </a>
          <div class="DesktopSummary">
            <div class="SummaryRight shadow-none">
              <div class="productPageBox px-3">
                <div class="d-flex py-3 justify-content-between align-items-center">
                  <h3 class="fs-16 fw-700 m-0">SUMMARY</h3>
                </div>
                <div class="repaeatBox">
                  <div class="row py-2 border-bottom border-top">
                    <div class="col-12 text-uppercase fw-700 pt-1 text-muted">
                      <div class="d-flex justify-content-between align-items-center">
                        {" "}
                        <span>VERO MODA</span>
                        <a href="#" class="text-muted fs-12">
                          <i class="fas fa-trash-alt m-0"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-8 py-1 fs-14">
                      ₹ 1000 <span class="text-success">(X 2)</span>
                    </div>
                    <div class="col-4 py-1 fs-14 text-right">₹ 2000</div>
                  </div>
                  <div class="row py-2 border-bottom border-dot">
                    <div class="col-8 fs-14">Cash Savigs (10%)</div>
                    <div class="col-4 fs-14 text-right">₹ 200</div>
                  </div>
                  <div class="row py-3 border-bottom border-dot">
                    <div class="col-8 fs-14 fw-700">Sub Total</div>
                    <div class="col-4 fs-14 text-right fw-700">₹ 1800</div>
                  </div>
                </div>
                <div class="repaeatBox">
                  <div class="row py-2 border-bottom border-top">
                    <div class="col-12 text-uppercase fw-700 pt-1 text-muted">
                      <div class="d-flex justify-content-between align-items-center">
                        {" "}
                        <span>BATA</span>
                        <a href="#" class="text-muted fs-12">
                          <i class="fas fa-trash-alt m-0"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-8 py-1 fs-14">
                      ₹ 1000 <span class="text-success">(X 2)</span>
                    </div>
                    <div class="col-4 py-1 fs-14 text-right">₹ 2000</div>
                  </div>
                  <div class="row py-2 border-bottom border-dot">
                    <div class="col-8 fs-14">Cash Savigs (10%)</div>
                    <div class="col-4 fs-14 text-right">₹ 200</div>
                  </div>
                  <div class="row py-3 border-bottom border-dot">
                    <div class="col-8 fs-14 fw-700">Sub Total</div>
                    <div class="col-4 fs-14 text-right fw-700">₹ 1800</div>
                  </div>
                </div>
                <div class="row m-0 py-2 bg-dark text-white rounded my-3">
                  <div class="col-7 fs-18 fw-500">Net Payable</div>
                  <div class="col-5 fs-18 fw-500 text-right text-nowrap">
                    ₹ 3600
                  </div>
                </div>
              </div>
              <div class="productPageBox px-3 mt-3 mt-md-4">
                <div class="pt-3">
                  <div class="custom-control custom-checkbox fs-14 py-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      checked="" />
                      <label class="custom-control-label" for="customCheck1">
                        I agree to the{" "}
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#tc"
                          class="text-danger"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <div class="py-2">
                    <button
                      type="button"
                      class="btn btn-danger btn-block mb-2 fs-14"
                      data-toggle="modal"
                      data-target="#tcConfirmation"
                    >
                      BUY NOW
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-block mb-2 fs-14"
                      data-toggle="modal"
                      data-target="#tcConfirmation"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <div class="pb-3 fs-12">
                    We accept Credit Card, Debit Card, Netbanking, EMIs, Wallets
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
}


export default Summary
