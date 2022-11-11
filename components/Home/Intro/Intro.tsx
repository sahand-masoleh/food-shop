import * as s from "./Intro.styles";
import Burst from "@/assets/shapes/burst.svg";
import Comet from "@/assets/shapes/comet.svg";
import Dots from "@/assets/shapes/dots.svg";
import Hourglass from "@/assets/shapes/hourglass.svg";
import Snake from "@/assets/shapes/snake.svg";
import Sun from "@/assets/shapes/sun.svg";
import Tri from "@/assets/shapes/tri.svg";
import Zag from "@/assets/shapes/zag.svg";

function Intro() {
	return (
		<s.Div_Intro>
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
			<ForestationBadge />
		</s.Div_Intro>
	);
}

export default Intro;

function ForestationBadge() {
	return <s.Div_ForestationBadge></s.Div_ForestationBadge>;
}
