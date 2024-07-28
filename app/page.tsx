import Image from "next/image";

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
			<section className="bg-secondary h-[100vh]"></section>
		</>
	);
}
