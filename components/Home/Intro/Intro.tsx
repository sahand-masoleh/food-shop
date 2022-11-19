import { useState } from "react";
import Link from "next/link";
import * as s from "./Intro.styles";
import foodIcons, { Icon } from "@/components/common/FoodIcons";
// import Reforestation from "@/assets/shapes/reforestation.svg";
// import Hand from "@/assets/icons/hand.svg";
// import Hit from "@/assets/icons/hit.svg";
import Strawberry from "@/assets/shapes/strawberry.svg";

function Intro() {
	const foods = foodIcons();
	return (
		<s.Div_Intro>
			<div className="text-container">
				<span>Our</span>
				<Icon SVG={foods.next().value} />
				<span>collection</span>
				<Icon SVG={foods.next().value} />
				<span>of</span>
				<br />
				<span className="focus">fruits</span>
				<Icon SVG={foods.next().value} />
				<span>and</span>
				<Icon SVG={foods.next().value} />
				<span className="focus">vegetables</span>
				<Icon SVG={foods.next().value} />
				<span>for</span>
				<span>you</span>
				<Icon SVG={foods.next().value} />
				<span>and</span>
				<Icon SVG={foods.next().value} />
				<span>your</span>
				<Icon SVG={foods.next().value} />
				<span>family</span>
			</div>
			{/* TODO: overflow causes scroll on parent */}
			{/* <ForestationBadge /> */}
		</s.Div_Intro>
	);
}

export default Intro;

function ForestationBadge() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link href="about" passHref legacyBehavior>
			<s.A_ReforestationBadge
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* <Reforestation className="text" />
				<Hand className={`hand hand--1 ${isHovered ? "hover" : ""}`} />
				<Hand className={`hand hand--2 ${isHovered ? "hover" : ""}`} />
				<Hit className={`hit ${isHovered ? "hover" : ""}`} /> */}
			</s.A_ReforestationBadge>
		</Link>
	);
}
