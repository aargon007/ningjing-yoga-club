import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClass from "../../../Hooks/Student/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
	const params = useParams();
	const [selectedClasses, refetch, isSelectedClasses] = useSelectedClass();
	const classItem = selectedClasses.filter(
		(item) => item?._id === params.id
	)[0];
	// console.log(classItem);
	const price = classItem?.price;

	return (
		<>
			<div>
                <h1 className="text-2xl font-semibold text-center mb-5">Checkout</h1>
				<div className="flex flex-col lg:flex-row">
					<div className="flex w-full lg:w-3/12">
						<div className="px-4 text-xl space-y-4">
							<h1>{classItem?.name}</h1>
							<p>${classItem?.price}</p>
						</div>
					</div>

					<div className="w-full">
						<Elements stripe={stripePromise}>
							<CheckoutForm price={price} classItem={classItem} refetch={refetch}></CheckoutForm>
						</Elements>
					</div>
				</div>
			</div>
		</>
	);
};

export default Payment;
