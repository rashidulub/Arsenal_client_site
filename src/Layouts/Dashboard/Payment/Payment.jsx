import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Getway_pk);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            
            <h2 className="text-3xl">Stripe's integration choices for accepting online payments.</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={total}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;