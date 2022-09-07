import React, { useContext,useEffect,useState } from 'react';
import { AppContext } from '../../contexts/AppContext';


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

  return <div>
    GET result: {JSON.stringify(getResponse)}<br/>
    POST result: {JSON.stringify(postResponse)}
  </div>
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
