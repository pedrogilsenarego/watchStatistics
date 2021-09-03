import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./styles.scss";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import { CountryDropdown } from "react-country-region-selector";
import { apiInstance } from "../../Utils";
import {
	selectCartTotal,
	selectCartItemsCount,
	selectCartItems
} from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { saveOrderHistory } from "../../redux/Orders/orders.actions";
import { useHistory } from "react-router";

const initialAddressState = {
	line1: "",
	line2: "",
	city: "",
	state: "",
	country: "",
	postal_code: ""
};

const mapState = createStructuredSelector({
	total: selectCartTotal,
	itemCount: selectCartItemsCount,
	cartItems: selectCartItems
});

const PaymentDetails = () => {
	const history = useHistory();
	const stripe = useStripe();
	const elements = useElements();
	const { total, itemCount, cartItems } = useSelector(mapState);
	const dispatch = useDispatch();
	const [billingAddress, setBillingAddress] = useState({
		...initialAddressState
	});
	const [shippingAddress, setShippingAddress] = useState({
		...initialAddressState
	});
	const [recipientName, setRecepientName] = useState("");
	const [nameOnCard, setNameOnCard] = useState("");

	useEffect(
		() => {
			if (itemCount < 1) {
				history.push("/dashboard");
			}
		},
		// eslint-disable-next-line
		[itemCount]
	);

	const handleShipping = (evt) => {
		const { name, value } = evt.target;
		setShippingAddress({
			...shippingAddress,
			[name]: value
		});
	};

	const handleBilling = (evt) => {
		const { name, value } = evt.target;
		setBillingAddress({
			...billingAddress,
			[name]: value
		});
	};

	const handleFormSubmit = async (evt) => {
		evt.preventDefault();
		const cardElement = elements.getElement("card");
		if (
			!shippingAddress.line1 ||
			!shippingAddress.city ||
			!shippingAddress.state ||
			!shippingAddress.postal_code ||
			!shippingAddress.country ||
			!billingAddress.line1 ||
			!billingAddress.city ||
			!billingAddress.state ||
			!billingAddress.postal_code ||
			!billingAddress.country ||
			!recipientName ||
			!nameOnCard
		) {
			return;
		}

		apiInstance
			.post("/payments/create", {
				amount: total * 100,
				shipping: {
					name: recipientName,
					address: {
						...shippingAddress
					}
				}
			})
			.then(({ data: clientSecret }) => {
				stripe
					.createPaymentMethod({
						type: "card",
						card: cardElement,
						billing_details: {
							name: nameOnCard,
							address: {
								...billingAddress
							}
						}
					})
					.then(({ paymentMethod }) => {
						stripe
							.confirmCardPayment(clientSecret, {
								payment_method: paymentMethod.id
							})
							.then(({ paymentIntent }) => {
								const configOrder = {
									orderTotal: total,
									orderItems: cartItems.map((item) => {
										const {
											documentID,
											productThumbnail,
											productName,
											productPrice,
											quantity
										} = item;
										return {
											documentID,
											productThumbnail,
											productName,
											productPrice,
											quantity
										};
									})
								};
								dispatch(saveOrderHistory(configOrder));
							});
					});
			});
	};

	const configCardElement = {
		iconStyle: "solid",
		style: {
			base: {
				fontSize: "16px"
			}
		},
		hidePostalCode: true
	};

	return (
		<div className="paymentDetails">
			<form onSubmit={handleFormSubmit}>
				<div className="group">
					<h2>Shipping Address</h2>
				</div>

				<FormInput
					required
					type="text"
					value={recipientName}
					name="recipientName"
					handleChange={(evt) => setRecepientName(evt.target.value)}
					placeHolder="Recepient Name"
				/>

				<FormInput
					required
					type="text"
					name="line1"
					handleChange={(evt) => handleShipping(evt)}
					value={shippingAddress.line1}
					placeHolder="Line 1"
				/>

				<FormInput
					type="text"
					name="line2"
					handleChange={(evt) => handleShipping(evt)}
					value={shippingAddress.line2}
					placeHolder="Line 2"
				/>

				<FormInput
					required
					type="text"
					name="city"
					handleChange={(evt) => handleShipping(evt)}
					value={shippingAddress.city}
					placeHolder="City"
				/>

				<FormInput
					required
					type="text"
					name="state"
					handleChange={(evt) => handleShipping(evt)}
					value={shippingAddress.state}
					placeHolder="State"
				/>

				<FormInput
					required
					type="text"
					name="postal_code"
					handleChange={(evt) => handleShipping(evt)}
					value={shippingAddress.postal_code}
					placeHolder="Postal Code"
				/>
				<div className="formRow checkoutInput">
					<CountryDropdown
						required
						onChange={(val) =>
							handleShipping({
								target: {
									name: "country",
									value: val
								}
							})
						}
						value={shippingAddress.country}
						valueType="short"
					/>
				</div>
				<div className="group">
					<h2>Billing Address</h2>

					<FormInput
						required
						type="text"
						name="nameOnCard"
						handleChange={(evt) => setNameOnCard(evt.target.value)}
						value={nameOnCard}
						placeHolder="Name on Card"
					/>

					<FormInput
						required
						type="text"
						name="line1"
						handleChange={(evt) => handleBilling(evt)}
						value={billingAddress.line1}
						placeHolder="Line 1"
					/>

					<FormInput
						type="text"
						name="line2"
						handleChange={(evt) => handleBilling(evt)}
						value={billingAddress.line2}
						placeHolder="Line 2"
					/>

					<FormInput
						required
						type="text"
						name="city"
						handleChange={(evt) => handleBilling(evt)}
						value={billingAddress.city}
						placeHolder="City"
					/>

					<FormInput
						required
						type="text"
						name="state"
						handleChange={(evt) => handleBilling(evt)}
						value={billingAddress.state}
						placeHolder="State"
					/>

					<FormInput
						required
						type="text"
						name="postal_code"
						handleChange={(evt) => handleBilling(evt)}
						value={billingAddress.postal_code}
						placeHolder="Postal Code"
					/>
				</div>

				<div className="formRow checkoutInput">
					<CountryDropdown
						required
						onChange={(val) =>
							handleBilling({
								target: {
									name: "country",
									value: val
								}
							})
						}
						value={billingAddress.country}
						valueType="short"
					/>
				</div>

				<div className="group">
					<h2>Card Details</h2>

					<CardElement options={configCardElement} />
				</div>

				<Button type="submit">Pay Now</Button>
			</form>
		</div>
	);
};

export default PaymentDetails;
