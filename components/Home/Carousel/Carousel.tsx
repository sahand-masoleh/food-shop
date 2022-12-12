import React from "react";
import useGrabScroll from "@/hooks/useGrabScroll";
import * as s from "./Carousel.styles";
import ImageContainer, { Hero } from "./ImageContainer";
import SVGDefs from "./SVGDefs";

interface Carousalable {
	heroes: Hero[];
}

function Carousel({ heroes }: Carousalable) {
	const { handleMouseMove, containerRef } = useGrabScroll();

	function handleIntersection(entry: IntersectionObserverEntry) {
		if (entry.isIntersecting) {
			const element = entry.target as HTMLDivElement;

			const { end } = element.dataset;

			const elementWidth = element.offsetWidth;
			const parentWidth = element.parentElement.offsetWidth;
			const containerWidth = containerRef.current.offsetWidth;

			// in case the windows is wide enough that two items
			// are being seen at the same time
			if (parentWidth - elementWidth * 2 < window.innerWidth) return;

			if (end === "left") {
				containerRef.current.scrollTo({
					left: parentWidth + elementWidth,
				});
			}
			if (end === "right") {
				containerRef.current.scrollTo({
					left: parentWidth - elementWidth - containerWidth,
				});
			}
		}
	}

	return (
		<s.Div_Carousel
			role="list"
			ref={containerRef}
			onDragStart={handleMouseMove}
			onDragOver={handleMouseMove}
			draggable={true}
		>
			<ImageContainer
				heroes={heroes}
				order="first"
				handleIntersection={handleIntersection}
			/>
			<ImageContainer
				heroes={heroes}
				order="second"
				handleIntersection={handleIntersection}
			/>
			<SVGDefs />
		</s.Div_Carousel>
	);
}

export default Carousel;
