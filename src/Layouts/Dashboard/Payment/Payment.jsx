import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_payment_Getway_pk)

const Payment = () => {

    const [cart] = useCart()
    console.log('caaart',cart);
    const total = cart.reduce((sum,item)=>sum+item.price,0)
    const price = parseFloat(total.toFixed(2))
    console.log(price);
    
    return (
        <div className='w-1/2 m-16 p-14'>
            <h1>takaaaaa</h1>
            
            <Elements stripe={stripePromise}>
            <CheckoutForm price={price}></CheckoutForm>
            </Elements>
           
        </div>
    );
};

export default Payment;