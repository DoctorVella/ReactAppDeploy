import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const HomePage = () => (
  <div>
    HomePage Component <Link to="Fede">TEST</Link>
  </div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
