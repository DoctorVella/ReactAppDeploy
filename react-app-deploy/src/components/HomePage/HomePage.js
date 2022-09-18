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
        <div class="card text-white bgMongodbColor m-5">
          <div class="card-header">CREATE</div>
          <div class="card-body">
            <h5 class="card-title">Create a new record</h5>
            <CreateCard setDefObj={setDefObj} />
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div class="card text-white bgExpressColor m-5">
          <div class="card-header">READ</div>
          <div class="card-body">
            <h5 class="card-title">Read a saved record</h5>
            <ReadCard defObj={defObj} setDefObj={setDefObj} />
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div class="card text-white bgReactColor m-5">
          <div class="card-header">UPDATE</div>
          <div class="card-body">
            <h5 class="card-title">Update a saved record</h5>
            <UpdateCard defObj={defObj} setDefObj={setDefObj} />
          </div>
        </div>
      </div>
      <div className='col-md-3'>
        <div class="card text-white bgNodeColor m-5">
          <div class="card-header">DELETE</div>
          <div class="card-body">
            <h5 class="card-title">Delete a saved record</h5>
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
