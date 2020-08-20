import React,{useEffect, Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { navValues } from "../../action/shopdata";

const Navbar = ({ navValues, shopdata: { navData, loading } }) => {
  useEffect(() => {
    navValues();
  }, [navValues]);
  navData=navData.map((data) => ({
    name: data.name,
    slug:data.slug,
    icon_url:data.icon_url,
    brands_name: data.brands_name.split(","),
    brands_slug: data.brands_slug.split(",")
  })); 
  return (
    <Fragment>
      <nav className="desktopNav row border-bottom bg-white">
        <div className="container">
          <ul>
            {loading === false &&
              navData.map((data) => (
                <li className="dropdown spriteMenu">
                  <a
                    href={`https://www.gyftr.com/hdfcsmartbuy/category/${data.slug}`}
                    className="dropdown-toggle"
                    id="apparel-accessories-Dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <figure>
                      <img
                        src={data.icon_url}
                        alt="Apparel &amp; Accessories"
                      />
                      <figcaption>{data.name}</figcaption>
                    </figure>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="apparel-accessories-Dropdown"
                  >
                    {data.brands_name.map((name, index) => (
                      <a
                        className="dropdown-item"
                        href={`https://www.gyftr.com/hdfcsmartbuy/category/${data.brands_slug[index]}`}
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  shopdata: state.shopdata,
});

Navbar.propTypes = {
  navValues: PropTypes.func.isRequired,
  navData: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { navValues })(Navbar);
