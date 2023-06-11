import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../../Pages/Provider/AuthProvider';

const CheckoutForm = ({ price }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data, clientSecret);
                setClientSecret(res.data, clientSecret);
            })

    }, [])




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('paymentMethod', paymentMethod);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
       
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary my-5 w-20' type="submit" disabled={!stripe || !clientSecret}>

                    Pay
                </button>
            </form>

            {cardError && <p className='text-red-600 '>{cardError}</p>}

        </>
    );
};

export default CheckoutForm;