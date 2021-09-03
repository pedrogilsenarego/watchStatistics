import React from "react";
import PaymentDetails from "../../components/PyamentDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { publishableKey } from "../../stripe/config";

const stripePromiss = loadStripe(publishableKey);

const Payment = () => {
	return (
		<Elements stripe={stripePromiss}>
			<PaymentDetails />
		</Elements>
	);
};

export default Payment;
