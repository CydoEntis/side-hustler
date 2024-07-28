import Image from "next/image";

export default function Home() {
	return (
		<div className="hero bg-white min-h-[75vh] text-black">
			<div className="hero-content text-center">
				<div className="max-w-screen-2xl">
					<h1 className="text-8xl font-bold">
						Your Stress-Free Freelancing Solution
					</h1>
					<p className="py-6 text-2xl">
						Simplify your freelancing experience and reclaim your peace of mind.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
}
