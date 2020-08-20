import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { movieValues} from "../../action/moviedata";
import { connect } from "react-redux";
export const MovieData = ({
  movieValues,
  moviedata: {movieProfiles, loading }
}) => {
  useEffect(() => {
    movieValues();
  }, [movieValues]);

  return (
    <Fragment>
      <h1>Dashboard</h1>

      {/* {loading === false && movieProfiles.map((movieprofile) => (
                  <Fragment>
                  <h1>Dashboard</h1>
                  <ul>
                  <li key={movieprofile.movieId}>{movieprofile.title}</li>
                  </ul>
                  </Fragment>
                ))} */}

      {/* <Fragment classname="">
        {loading === false &&
          movieProfiles.map((movieprofiles) => (
            <Card key={movieprofiles._id} movieProfiles={movieprofiles} />
          ))}
      </Fragment> */}
    </Fragment>
  );
};
const mapStateToProps = state => ({
  moviedata: state.moviedata
});

MovieData.propTypes = {
  movieValues: PropTypes.func.isRequired,
  movieProfiles: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { movieValues})(MovieData);
