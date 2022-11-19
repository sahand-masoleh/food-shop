import React, { useRef } from "react";
import * as s from "./Carousel.styles";
import ImageContainer, { Hero } from "./ImageContainer";
import SVGDefs from "./SVGDefs";

const EMPTY_IMAGE =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

interface Carousalable {
	heroes: Hero[];
}

function Carousel({ heroes }: Carousalable) {
	const containerRef = useRef<HTMLDivElement>();
	const dragRef = useRef<number>(0);

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
