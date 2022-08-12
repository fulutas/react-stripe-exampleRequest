import React, { useState, useEffect }  from "react";
import { useNavigate } from 'react-router-dom'
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const KEY = process.env.REACT_APP_STRIPE_PUBLISH_KEY;

const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null)
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token)
  } 

  useEffect(() => {
    const makeRequest = async () => {
        try {
           const res = await axios.post('http://localhost:3000/api/checkout/payment', {
            tokenId : stripeToken.id,
            amount : 2000,
           })
           console.log(res.data);
           history('/success')
        } catch (error) {
            console.log(error)
        }
    }

    stripeToken && makeRequest()

  }, [stripeToken, history])

  return (

    <div className="center">
        <div> {stripeToken ? (<span>Processing, please wait </span>) :( 

      
    <StripeCheckout
      name="Furkan Shop"
      image="https://avatars.githubusercontent.com/u/37690550?v=4"
      billingAddress
      shippingAddress
      description=" Your total is $20"
      amount={2000}
      token={onToken}
      stripeKey= {KEY}
    >
      <button>Pay Now</button>
    </StripeCheckout>
  )}</div>
    </div>
  );
};

export default Pay;
