import React from "react";

const Apps = () => {
	return (
		<div className="flex flex-col md:flex-row gap-5 items-center">
			<div className="w-full">
				<img
					className="rounded"
					src="https://www.doyogawithme.com/themes/custom/lotus/assets/img/sfc/instructor-beach.jpg"
				/>
			</div>

			<div className="w-full">
				<section>
					<h2 className="font-medium text-[30px] md:text-[2.45rem] bg-clip-text bg-gradient-to-r from-[#f7972f] to-blue-700 text-transparent">
						<span className="">For every space,</span> <br />
						<span className="">at any pace</span>
					</h2>

					<div className="mt-[20px]">
						<p className="text-xl text-gray-500 max-w-[70%]">
							Now access all your favorite classes on your favorite Smart TV
							&amp; Mobile Apps.
						</p>
						<div className="flex flex-col mt-5 gap-5">
							<div className="flex items-center gap-5">
								<img
									className="h-[48px] w-[120px]"
									src="https://www.doyogawithme.com/sites/default/files/media/image/field_media_image/2022/05/images.png"
								/>

								<img
									className="h-[48px] w-[120px]"
									src="https://www.doyogawithme.com/sites/default/files/media/image/field_media_image/2022/05/download%20%2812%29.png"
								/>
							</div>
							<div className="flex items-center gap-5">
								<img
									className="h-[48px] w-[120px]"
									src="https://www.doyogawithme.com/sites/default/files/media/image/field_media_image/2022/05/download%20%2814%29.png"
								/>

								<img
									className="h-[48px] w-[120px]"
									src="https://www.doyogawithme.com/sites/default/files/media/image/field_media_image/2022/05/roku-logo.png"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Apps;
