

  
import express from "express";
import fs from "fs";
import path from "path";
 import { Provider } from "react-redux";
import { StaticRouter as Router, matchPath } from "react-router-dom";
import React from "react";
import { renderToString } from "react-dom/server";
import store from "../src/store";
import routes from "../src/routes";

import App from "../src/App";

const app = express();
const PORT = 8000;

// app.use(cors());
app.use(express.static("public"));



app.get("*", (req, res) => {  
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <Router location={req.url} context={context}>
            <App />
          </Router>
        </Provider>
      );

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>React App</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
            <link rel="stylesheet" href="assets/css/styles.css">
             <link rel="stylesheet" href="assets/css/footer-style.css">
             <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
            <script src="/bundle.js" defer></script>
           
          </head>
          <body>
          <script src="/js/custom.js" defer></script>
            <script src="/js/owl.carousel.js" defer></script>
            <div id="root">${markup}</div>
             
          </body>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<script src="assets/js/owl.carousel.js"></script>
<script src="assets/js/custom.js"></script>
<script>
var owl = $('.TrendingBrands-owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 6
        },
        992: {
            items: 6
        },
        1200: {
            items: 6
        }
    }
});

var owll = $('.Discounts-owl-carousel');
owll.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout:1000,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});

var owll = $('.Offers-owl-carousel');
owll.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout:800,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});

var owll = $('.Recent-owl-carousel');
owll.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 15,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout:500,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 3,
        },
        600: {
            items: 3
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});
 var owl = $('.how-to-Redeem-carousel');
    owl.owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        margin: 20,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
</script>
        </html>
      `);
    })

 app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
 });

