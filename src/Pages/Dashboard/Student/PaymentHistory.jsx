import React from 'react';
import useEnrolledClass from '../../../Hooks/Student/useEnrolledClass';
import Spinner from '../../Shared/Spinner';

const PaymentHistory = () => {

    const [enrolledClasses, refetch, isEnrolledLoading] = useEnrolledClass();
    const pubDate = (givendate) => {
		const date = new Date(givendate);

		const day = date.getDate();
		const month = date.toLocaleString("default", { month: "long" });
		const year = date.getFullYear();

		const formattedTime = `${day} ${month} ${year}`;
		return formattedTime;
	};

    return (
        <div>
            <h1 className='text-2xl text-center font-semibold mb-5'>Payment History</h1>
            {isEnrolledLoading && <Spinner></Spinner>}
            <table className="border-collapse w-full">
				<thead>
					<tr>
						<th className="tableth">Class Name</th>
						<th className="tableth">price</th>
						<th className="tableth">Transaction Id</th>
						<th className="tableth">Date</th>
					</tr>
				</thead>
				<tbody>
					{enrolledClasses?.map((paidClass) => (
						<tr
							key={paidClass?._id}
							className="bg-white hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-5 lg:mb-0"
						>
							<td className="tabletd border-b-0 lg:border-b">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Class Name :{" "}
								</span>
								<span className="inline-flex gap-3 items-center">
									{paidClass?.classItem?.name}
								</span>
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Price :{" "}
								</span>
								{paidClass?.price}
							</td>

							<td className="tabletd border-b-0 lg:border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Transaction Id :{" "}
								</span>
								{paidClass?.transactionId}
							</td>
							<td className="tabletd border-b border-t-0 lg:border-t lg:text-center">
								<span className="lg:hidden px-2 py-1 font-bold ">
									Date :{" "}
								</span>
								{pubDate(paidClass?.createdAt)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
        </div>
    );
};

export default PaymentHistory;