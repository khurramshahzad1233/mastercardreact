import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';

const Success=()=>{
  const [orderid,setOrderid]=useState(null)
  
  const location = useLocation();

  useEffect(()=>{
  const queryParams = new URLSearchParams(location.search);


  const orderId = queryParams.get('orderid');
  setOrderid(orderId)

  },[location.search])
  

  return (
    <div>
      <h1>Order Success Page</h1>
      <p>Order ID: {orderid}</p>
    </div>
  );
}

export default Success;
