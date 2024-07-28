import React from "react";

interface CardProps {
	index: number;
	isVisible: boolean;
}

const Card: React.FC<CardProps> = ({ index, isVisible }) => {
	return (
		<div
			className={`card ${isVisible ? "visible" : ""}`}
			style={{ zIndex: index }}
		>
			<div className="content">
				<h2>Card {index + 1}</h2>
				<p>This is the content of the card.</p>
			</div>
		</div>
	);
};

export default Card;
