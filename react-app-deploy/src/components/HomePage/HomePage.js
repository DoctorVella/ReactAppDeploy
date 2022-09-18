import React, { useState } from 'react';
import './HomePage.css';
import ReadCard from '../ReadCard/ReadCard';
import CreateCard from '../CreateCard/CreateCard';
import DeleteCard from '../DeleteCard/DeleteCard';
import UpdateCard from '../UpdateCard/UpdateCard';

const HomePage = () => {
  const [defObj, setDefObj] = useState({})

  return <div className='container-fluid HomePage'>
    <h1 className='h1'>
      <span>This is a </span>
      <span className='mongodbColor'>M.</span>
      <span className='expressColor'>E.</span>
      <span className='reactColor'>R.</span>
      <span className='nodeColor'>N.</span>
      <span> proof of concept</span>
    </h1>
    <div className='row'>
      <div className='col-md-3'>
        <div className="card text-white bgMongodbColor m-5">
          <div className="card-header">CREATE</div>
          <div className="card-body">
            <h5 className="card-title">Create a new record</h5>
            <CreateCard setDefObj={setDefObj} />
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className="card text-white bgExpressColor m-5">
          <div className="card-header">READ</div>
          <div className="card-body">
            <h5 className="card-title">Read a saved record</h5>
            <ReadCard defObj={defObj} setDefObj={setDefObj} />
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className="card text-white bgReactColor m-5">
          <div className="card-header">UPDATE</div>
          <div className="card-body">
            <h5 className="card-title">Update a saved record</h5>
            <UpdateCard defObj={defObj} setDefObj={setDefObj} />
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div className="card text-white bgNodeColor m-5">
          <div className="card-header">DELETE</div>
          <div className="card-body">
            <h5 className="card-title">Delete a saved record</h5>
            <DeleteCard defObj={defObj} setDefObj={setDefObj} />
          </div>
        </div>
      </div>
    </div>
  </div>
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
