import React, { MouseEventHandler, useEffect, useRef } from "react";
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

const EMPTY_IMAGE =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function Carousel() {
	const containerRef = useRef<HTMLDivElement>();
	const dragRef = useRef<number>(0);

	function handleIntersection(entry: IntersectionObserverEntry) {
		if (entry.isIntersecting) {
			const element = entry.target as HTMLDivElement;

			const { end } = element.dataset;

			const elementWidth = element.offsetWidth;
			const parentWidth = element.parentElement.offsetWidth;
			const containerWidth = containerRef.current.offsetWidth;

			if (end === "left") {
				containerRef.current.scrollTo(parentWidth + elementWidth, 0);
			}
			if (end === "right") {
				containerRef.current.scrollTo(
					parentWidth - elementWidth - containerWidth,
					0
				);
			}
		}
	}

	function handleMouseMove(event: React.DragEvent<HTMLDivElement>) {
		const { clientX, type } = event;
		const emptyImage = new Image(0, 0);
		emptyImage.src = EMPTY_IMAGE;

		event.dataTransfer.setDragImage(emptyImage, 0, 0);

		if (type === "dragstart") {
			dragRef.current = clientX;
		} else {
			const move = clientX - dragRef.current;
			containerRef.current.scrollBy({ left: move * -1 });
			dragRef.current = clientX;
		}
	}

	return (
		<s.Div_Carousel
			ref={containerRef}
			onDragStart={handleMouseMove}
			onDragOver={handleMouseMove}
			draggable={"true"}
		>
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
