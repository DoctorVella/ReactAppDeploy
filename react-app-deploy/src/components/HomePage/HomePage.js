import React, { useState } from 'react';
import Card from '../Card/Card';
import './HomePage.css';
import ReadCard from '../ReadCard/ReadCard';
import CreateCard from '../CreateCard/CreateCard';

const HomePage = () => {
  const [defaultId, setDefaultId] = useState();

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
        <CreateCard setDefaultId={setDefaultId} />
      </div>
      <div className='col-md-6'>
        <ReadCard defaultId={defaultId}/>
      </div>
    </div>
    <div className='row m-5'>
      <div className='col-md-6'>
        <Card title="UPDATE">
          <div>CONTENT</div>
        </Card>
      </div>
      <div className='col-md-6'>
        <Card title="DELETE">
          <div>CONTENT</div>
        </Card>
      </div>
    </div>
  </div>
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
