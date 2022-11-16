import { useState } from "react";
import Link from "next/link";
import * as s from "./Intro.styles";
import Apple from "@/assets/shapes/apple.svg";
import Banana from "@/assets/shapes/banana.svg";
import Carrot from "@/assets/shapes/carrot.svg";
import Cherry from "@/assets/shapes/cherry.svg";
import Lemon from "@/assets/shapes/lemon.svg";
import Orange from "@/assets/shapes/orange.svg";
import Pear from "@/assets/shapes/pear.svg";
import Strawberry from "@/assets/shapes/strawberry.svg";
// import Reforestation from "@/assets/shapes/reforestation.svg";
// import Hand from "@/assets/icons/hand.svg";
// import Hit from "@/assets/icons/hit.svg";

function Intro() {
	return (
		<s.Div_Intro>
			<div className="text-container">
				<span>Our</span>
				<Apple />
				<span>collection</span>
				<Banana />
				<span>of</span>
				<br />
				<span className="focus">fruits</span>
				<Carrot className="focus" />
				<span>and</span>
				<Cherry className="focus" />
				<span className="focus">vegetables</span>
				<Lemon />
				<span>for</span>
				<span>you</span>
				<Orange />
				<span>and</span>
				<Pear />
				<span>your</span>
				<Strawberry />
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
