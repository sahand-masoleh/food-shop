import Apple from "@/assets/shapes/apple.svg";
import Banana from "@/assets/shapes/banana.svg";
import Carrot from "@/assets/shapes/carrot.svg";
import Cherry from "@/assets/shapes/cherry.svg";
import Lemon from "@/assets/shapes/lemon.svg";
import Orange from "@/assets/shapes/orange.svg";
import Pear from "@/assets/shapes/pear.svg";
import Strawberry from "@/assets/shapes/strawberry.svg";

function foodIcons() {
	let pointer = 0;
	const foods: React.FC<React.SVGProps<SVGSVGElement>>[] = [
		Apple,
		Banana,
		Carrot,
		Cherry,
		Lemon,
		Orange,
		Pear,
		Strawberry,
	];
	return {
		next() {
			return { value: foods[pointer++ % foods.length] };
		},
	};
}

export default foodIcons;

interface Iconable {
	SVG: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function Icon({ SVG }: Iconable) {
	return <SVG />;
}
