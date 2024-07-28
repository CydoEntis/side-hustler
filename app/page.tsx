"use client";

import { Clock2, Link, Milestone, PartyPopper, Smile } from "lucide-react";
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
					<section className="py-32">
						<div className="text-center max-w-screen-md mx-auto p-4">
							<h6 className="uppercase font-bold text-[#6164fa] text-xl pb-4">
								Why Side Hustler
							</h6>
							<h3 className="text-6xl font-black text-secondary">
								The Future Of Freelance Project Management
							</h3>
						</div>
						<div className="grid grid-cols-3 py-32 gap-16">
							<div className="flex flex-col gap-4 text-center justify-center items-center">
								<Smile className="w-10 h-10 text-[#6164fa]" />
								<h3 className="font-black text-3xl text-secondary">
									Satisfyingly Simple
								</h3>
								<p className="text-lg">
									We make it simple, your clients don't have to register for
									anything
								</p>
							</div>

							<div className="flex flex-col gap-4 text-center justify-center items-center">
								<Link className="w-10 h-10 text-[#6164fa]" />
								<h3 className="font-black text-3xl text-secondary">
									Generate Magic Links
								</h3>
								<p className="text-lg">
									Create a magic link for your client, allow them to view their
									project progress with ease.
								</p>
							</div>

							<div className="flex flex-col gap-4 text-center justify-center items-center">
								<Milestone className="w-10 h-10 text-[#6164fa]" />
								<h3 className="font-black text-3xl text-secondary">
									Track Progress
								</h3>
								<p className="text-lg">
									Setup milestones within the project so you and your client
									keep on track and know what to expect
								</p>
							</div>

							<div className="flex flex-col gap-4 text-center justify-center items-center">
								<Milestone className="w-10 h-10 text-[#6164fa]" />
								<h3 className="font-black text-3xl text-secondary">
									No More Email Tennis
								</h3>
								<p className="text-lg">
									Skip the headaches and hassle that come with emailing, keep
									track and manage your entire project in one central location{" "}
								</p>
							</div>

							<div className="flex flex-col gap-4 text-center justify-center items-center">
								<Clock2 className="w-10 h-10 text-[#6164fa]" />
								<h3 className="font-black text-3xl text-secondary">
									Take On More Projects
								</h3>
								<p className="text-lg">
									With less time spent managing your projects, bring on more
									clients, get more work done and relieve some of that stress
								</p>
							</div>
							<div className="flex flex-col gap-4 text-center justify-center items-center">
								<PartyPopper  className="w-10 h-10 text-[#6164fa]" />
								<h3 className="font-black text-3xl text-secondary">
									Get Back Your Life
								</h3>
								<p className="text-lg">
									Projects managed, time regained, stress lifted, finally regain your life and enjoy yourself.
								</p>
							</div>
						</div>
					</section>
					<section>
						<div className="w-full h-[300px] absolute -rotate-1 bg-[#6164FA] rounded-lg"></div>
						<div className="w-full h-[300px]  rotate-1 bg-[#1B2733] rounded-lg p-16 flex justify-center items-center">
							<div className="px-8">
								<h3 className="text-white font-bold text-5xl pb-4">
									Simplify your process!
								</h3>
								<p className="font-medium text-xl text-[#b6b5bf]">
									Take the leap and regain your life, manage projects with ease
									and gain back valuable time.
								</p>
							</div>
							<div className="px-8">
								<button className="btn btn-accent btn-wide btn-lg text-secondary">
									Subscribe Now
								</button>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
