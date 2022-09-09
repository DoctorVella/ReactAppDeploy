import React, { useContext,useEffect,useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Card from '../Card/Card';
import './HomePage.css';

const HomePage = () => {
  const {axiosInstance} = useContext(AppContext);
  const [getResponse,setGetResponse] = useState();
  const [postResponse, setPostResponse] = useState();

  const searchRecord = async () => {
    try{
      const res = await axiosInstance({
        method: 'GET',
        url: '/search/631191422396cf7c4e9b6f60',
        params: {
          db: 'sample_analytics',
          collection: 'accounts'
        }
      })
      setGetResponse(res?.data)
    }catch(e){
      console.error(e);
    }
  }

  const postRecord = async () => {
    try{
      const res = await axiosInstance({
        method: 'POST',
        url: '/insert',
        params: {
          db: 'sample_analytics',
          collection: 'accounts'
        },
        data: {
          "account_id": 10,
          "limit": 10,
          "products": [
            "string"
          ]
        }
      })
      setPostResponse(res?.data)
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    searchRecord();
    postRecord();
  },[])

  return <div className='container-fluid'>
    <div className='HomePage'>
      <h1 className='h1'>
        <span>This is a </span> 
        <span className='mongodbColor'>M.</span>
        <span className='expressColor'>E.</span>
        <span className='reactColor'>R.</span>
        <span className='nodeColor'>N.</span>
        <span> proof of concept</span>
      </h1>
      <div className='row'>
        <div className='col-md-6'>
          <Card title="CREATE">
            {JSON.stringify(postResponse)}
          </Card>
        </div>
        <div className='col-md-6'>
          <Card title="READ">
            <div>{JSON.stringify(getResponse)}</div>
          </Card>
        </div>
      </div>
      <div className='row'>
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
  </div>
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
