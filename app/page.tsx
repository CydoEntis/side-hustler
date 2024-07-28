"use client";

import { useEffect, useRef, useState } from "react";

import ContentSection from "./components/content-section";

export default function Home() {
	

	return (
		<>
			<section className="hero bg-white min-h-[75vh] text-black">
				<div className="hero-content text-center">
					<div className="max-w-screen-2xl">
						<h1 className="text-8xl font-bold archivo-black-regular">
							Your Stress-Free Freelancing Solution
						</h1>
						<p className="py-6 text-2xl roboto-regular">
							Simplify your freelancing experience and reclaim your peace of
							mind.
						</p>
						<div className="flex gap-4 justify-center">
							<button className="btn btn-accent btn-wide btn-lg text-secondary">
								Subscribe Now
							</button>
							<button className="btn btn-secondary btn-wide btn-lg text-primary">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-secondary h-[60vh] relative">
				<div className="absolute -top-[200px] left-1/2 -translate-x-1/2 ">
					<div className="w-[1400px] h-[800px] absolute -rotate-2 bg-[#6164FA] rounded-lg"></div>
					<div className="w-[1400px] h-[800px]  rotate-2 bg-[#1B2733] rounded-lg">
						<div className="w-full h-12 bg-[#2F3E51] rounded-t-lg flex gap-2 items-center px-4">
							<div className="rounded-full h-4 w-4 bg-red-500"></div>
							<div className="rounded-full h-4 w-4 bg-yellow-500"></div>
							<div className="rounded-full h-4 w-4 bg-green-500"></div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-secondary">
				<div className="max-w-screen-xl mx-auto">
					<ContentSection textSide="left" />
					<ContentSection textSide="right" />
					<ContentSection textSide="left" />
				</div>
			</section>
			<section className="bg-white py-32">
				<div className="max-w-screen-xl mx-auto relative">
					<div className="w-full h-[300px] absolute -rotate-1 bg-[#6164FA] rounded-lg"></div>
					<div className="w-full h-[300px]  rotate-1 bg-[#1B2733] rounded-lg">
						<div>
							<h3>Simplify your process!</h3>
							<p>Take the leap and regain your life, manage projects with ease and gain back valuable time.</p>
						</div>
						<div>

						</div>
					</div>
				</div>
			</section>
		</>
	);
}
