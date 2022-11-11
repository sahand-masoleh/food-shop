import React, { useRef } from "react";
import * as s from "./Carousel.styles";
import ImageContainer from "./ImageContainer";
import SVGDefs from "./SVGDefs";

const images = [
	["Figma logo pin", "/Home/Carousel/01.webp", "octagon"],
	["Rainbow logo tree", "/Home/Carousel/02.webp", "hourglass"],
	["Bezier water bottle", "/Home/Carousel/03.webp", "circle"],
	["Figma embroided hoodie", "/Home/Carousel/04.webp", "zigzag"],
	["Figma wordmark tee", "/Home/Carousel/05.webp", "octagon"],
	["Light gre coment icon socks", "/Home/Carousel/06.webp", "hourglass"],
	["Throw blanket", "/Home/Carousel/07.webp", "rectangle"],
	["Blue figma hat", "/Home/Carousel/08.webp", "zigzag"],
];

function Carousel() {
	const ref = useRef<HTMLDivElement>();

	function handleIntersection(entry: IntersectionObserverEntry) {
		if (entry.isIntersecting) {
			const element = entry.target as HTMLDivElement;

			const { end } = element.dataset;

			const elementWidth = element.offsetWidth;
			const parentWidth = element.parentElement.offsetWidth;
			const containerWidth = ref.current.offsetWidth;

			if (end === "left") {
				ref.current.scrollTo(parentWidth + elementWidth, 0);
			}
			if (end === "right") {
				ref.current.scrollTo(parentWidth - elementWidth - containerWidth, 0);
			}
		}
	}

	return (
		<s.Div_Carousel ref={ref}>
			<ImageContainer
				images={images}
				order="first"
				handleIntersection={handleIntersection}
			/>
			<ImageContainer
				images={images}
				order="second"
				handleIntersection={handleIntersection}
			/>
			<SVGDefs />
		</s.Div_Carousel>
	);
}

export default Carousel;
