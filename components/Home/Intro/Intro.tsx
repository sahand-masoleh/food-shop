import { useState } from "react";
import Link from "next/link";
import * as s from "./Intro.styles";
import Burst from "@/assets/shapes/burst.svg";
import Comet from "@/assets/shapes/comet.svg";
import Dots from "@/assets/shapes/dots.svg";
import Hourglass from "@/assets/shapes/hourglass.svg";
import Snake from "@/assets/shapes/snake.svg";
import Sun from "@/assets/shapes/sun.svg";
import Tri from "@/assets/shapes/tri.svg";
import Zag from "@/assets/shapes/zag.svg";
import Reforestation from "@/assets/shapes/reforestation.svg";
import Hand from "@/assets/icons/hand.svg";
import Hit from "@/assets/icons/hit.svg";

function Intro() {
	return (
		<s.Div_Intro>
			<div className="text-container">
				<span>figma's</span>
				<Burst />
				<span>collection</span>
				<Hourglass />
				<span>of</span>
				<br />
				<span className="focus">layers</span>
				<Zag className="focus" />
				<span>and</span>
				<Dots className="focus" />
				<span className="focus">components</span>
				<Sun />
				<span>for</span>
				<span>you</span>
				<Comet />
				<span>and</span>
				<Snake />
				<span>your</span>
				<Tri />
				<span>friends</span>
			</div>
			<ForestationBadge />
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
				<Reforestation className="text" />
				<Hand className={`hand hand--1 ${isHovered ? "hover" : ""}`} />
				<Hand className={`hand hand--2 ${isHovered ? "hover" : ""}`} />
				<Hit className={`hit ${isHovered ? "hover" : ""}`} />
			</s.A_ReforestationBadge>
		</Link>
	);
}
