import React, { useState } from 'react';
import './HomePage.css';
import ReadCard from '../ReadCard/ReadCard';
import CreateCard from '../CreateCard/CreateCard';
import DeleteCard from '../DeleteCard/DeleteCard';
import UpdateCard from '../UpdateCard/UpdateCard';

const HomePage = () => {
  const [defaultId, setDefaultId] = useState();
  const [docValues, setDocValues] = useState();

  return <div className='container-fluid HomePage'>
    <h1 className='h1'>
      <span>This is a </span>
      <span className='mongodbColor'>M.</span>
      <span className='expressColor'>E.</span>
      <span className='reactColor'>R.</span>
      <span className='nodeColor'>N.</span>
      <span> proof of concept</span>
    </h1>
    <div className='row m-5'>
      <div className='col-md-6'>
        <CreateCard setDefaultId={setDefaultId} setDocValues={setDocValues} />
      </div>
      <div className='col-md-6'>
        <ReadCard defaultId={defaultId} />
      </div>
    </div>
    <div className='row m-5'>
      <div className='col-md-6'>
        <UpdateCard defaultId={defaultId} docValues={docValues} setDocValues={setDocValues} />
      </div>
      <div className='col-md-6'>
        <DeleteCard defaultId={defaultId} setDefaultId={setDefaultId} setDocValues={setDocValues} />
      </div>
    </div>
  </div>
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
