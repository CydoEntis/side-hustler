import { CircleCheck } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";

type ContentSectionProps = {
	textSide: "left" | "right";
};

const ContentSection = ({ textSide }: ContentSectionProps) => {
	return (
		<div className="grid grid-cols-2 py-24 px-16">
			{textSide === "left" ? (
				<>
					<div className="w-full text-white flex flex-col justify-center pl-8">
						<h4 className="font-semibold uppercase tracking-widest text-accent">
							Simplicity Focused
						</h4>
						<h3 className="text-6xl font-bold py-4">Hassle Free for Clients</h3>
						<p className="text-lg">
							Get your customers on the platform quickly and easily
						</p>
						<ul className="flex flex-col gap-2 py-8 text-lg">
							<li className="flex gap-4 py-2">
								<CircleCheck className="text-accent" />
								Create a limited access token
							</li>
							<li className="flex gap-4 py-2">
								<CircleCheck className="text-accent" />
								Send it to your client
							</li>
							<li className="flex gap-4 py-2">
								<CircleCheck className="text-accent" />
								Thats it your clients in
							</li>
						</ul>
						<button className="btn btn-accent btn-wide btn-lg text-secondary">
							Subscribe Now
						</button>
					</div>
					<div>
						<div className="bg-[#6164FA] w-full h-[500px] rounded-xl"></div>
					</div>
				</>
			) : (
				<>
					<div>
						<div className="bg-[#6164FA] w-full h-[500px] rounded-xl"></div>
					</div>
					<div className="w-full text-white flex flex-col justify-center pl-16">
						<h4 className="font-semibold uppercase tracking-widest text-accent">
							Simplicity Focused
						</h4>
						<h3 className="text-6xl font-bold py-4">Hassle Free for Clients</h3>
						<p className="text-lg">
							Get your customers on the platform quickly and easily
						</p>
						<ul className="flex flex-col gap-2 py-8 text-lg">
							<li className="flex gap-4 py-2">
								<CircleCheck className="text-accent" />
								Create a limited access token
							</li>
							<li className="flex gap-4 py-2">
								<CircleCheck className="text-accent" />
								Send it to your client
							</li>
							<li className="flex gap-4 py-2">
								<CircleCheck className="text-accent" />
								Thats it your clients in
							</li>
						</ul>
						<button className="btn btn-accent btn-wide btn-lg text-secondary">
							Subscribe Now
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default ContentSection;
