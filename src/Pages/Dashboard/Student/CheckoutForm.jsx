import React, { useEffect, useState } from "react";
import {
	CardCvcElement,
	CardElement,
	CardExpiryElement,
	CardNumberElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import useAuth from "../../../Hooks/useAuth";
import useAxiosGlobal from "../../../Hooks/useAxiosGlobal";
import useSelectedClass from "../../../Hooks/Student/useSelectedClass";
import "./CheckoutForm.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ELEMENT_OPTIONS = {
	style: {
		base: {
			fontSize: "20px",
			color: "#424770",
			letterSpacing: "0.025em",
			"::placeholder": {
				color: "#aab7c4",
			},
		},
		invalid: {
			color: "#9e2146",
		},
	},
};

const CheckoutForm = ({ price, classItem, refetch }) => {
	// const [refetch] = useSelectedClass();
	const stripe = useStripe();
	const elements = useElements();
	const { user } = useAuth();
	const [axiosSecure] = useAxiosGlobal();
    const navigate = useNavigate()

	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");

	const [name, setName] = useState("");
	const [postal, setPostal] = useState("");
	const [paymentMethod, setPaymentMethod] = useState(null);

	useEffect(() => {
		if (price > 0) {
			axiosSecure
				.post("/create-payment-intent", { price: price })
				.then((res) => {
					// console.log(res.data.clientSecret);
					setClientSecret(res.data.clientSecret);
				});
		}
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardNumberElement);

		if (card === null) {
			return;
		}

		const payload = await stripe.createPaymentMethod({
			type: "card",
			card,
			billing_details: {
				name,
				address: {
					postal_code: postal,
				},
			},
		});

		if (payload.error) {
			console.log("[error]", payload.error);
			setCardError(payload.error.message);
			setPaymentMethod(null);
		} else {
			console.log("[PaymentMethod]", payload.paymentMethod);
			setPaymentMethod(payload.paymentMethod);
			setCardError("");
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || "unknown",
						name: user?.displayName || "anonymous",
					},
				},
			});

		if (confirmError) {
			console.log(confirmError);
		}
		// console.log("payment intent", paymentIntent);

		setProcessing(false);

		if (paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);
			// save payment information to the server
			// console.log(transactionId);
			const payment = {
				email: user?.email,
				transactionId: paymentIntent.id,
				selectedId: classItem?._id,
				classId: classItem?.classId,
				price,
				classItem,
			};
			axiosSecure.post("/payments", payment).then((res) => {
				// console.log(res.data);
				if (
					res.data.deleteResult.deletedCount > 0 ||
					res.data.insertResult.insertedId
				) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment success.",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    refetch();
                    navigate('/dashboard/selected-classes')
				}
			});
		}
	};

	return (
		<>
        <div className="w-full">
            <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
				<div className="col-span-2 sm:col-span-1">
					<label
						htmlFor="cardNumber"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						Card Number
					</label>
					<CardNumberElement id="cardNumber" options={ELEMENT_OPTIONS} />
				</div>

				<div className="col-span-2 sm:col-span-1">
					<label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">Card Expiration</label>
					<CardExpiryElement id="expiry" options={ELEMENT_OPTIONS} />
				</div>

				<div className="col-span-2 sm:col-span-1">
					<label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
					<CardCvcElement id="cvc" options={ELEMENT_OPTIONS} />
				</div>
				<div className="col-span-2 sm:col-span-1 mb-4">
					<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
					<input
						id="name"
						required
						className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
						placeholder="Jenny Rosen"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>

				<div className="col-span-2 sm:col-span-1">
					<label htmlFor="postal" className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
					<input
						id="postal"
						required
						placeholder="12345"
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
						value={postal}
						onChange={(e) => {
							setPostal(e.target.value);
						}}
					/>
				</div>

				<button type="submit" disabled={!stripe} className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
					Pay
				</button>
			</form>
        </div>
        </div>
        
			
			{cardError && <p className="text-red-600 mt-5 text-xl">{cardError}</p>}
			{/* {paymentMethod  && <p className="text-red-600 ml-8">{paymentMethod.id}</p>} */}
			{transactionId && (
				<p className="text-green-500 mt-5 text-xl">
					Transaction complete with transaction ID : {transactionId}
				</p>
			)}
		</>
	);
};

export default CheckoutForm;
