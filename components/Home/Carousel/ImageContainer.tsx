import Image from "next/image";
import { useEffect, useRef } from "react";
import * as s from "./Carousel.styles";

interface ImageContainerable {
	images: string[][];
	order: "first" | "second";
	handleIntersection: (entry: IntersectionObserverEntry) => void;
}

function ImageContainer({
	images,
	order,
	handleIntersection,
}: ImageContainerable) {
	const ref = useRef<HTMLDivElement>();
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		observer.current = new IntersectionObserver((e) =>
			handleIntersection(e[0])
		);
		observer.current.observe(ref.current);

		return () => observer.current.disconnect();
	}, []);

	function detectEnd(i: number) {
		if (i === 0 && order === "first") return "left";
		if (i === images.length - 1 && order === "second") return "right";
	}

	const imagesMap = images.map((image, i) => {
		const end = detectEnd(i);
		return (
			<s.Div_ClippedImage
				key={image[0]}
				ref={end ? ref : null}
				data-end={end}
				style={
					{
						"--clip": `url(#${image[2]}-clip)`,
					} as React.CSSProperties
				}
			>
				<Image src={image[1]} alt={image[0]} fill />
				<svg viewBox="0 0 1 1">
					<use href={`#${image[2]}`} />
				</svg>
			</s.Div_ClippedImage>
		);
	});

	return <div data-order={order}>{imagesMap}</div>;
}

export default ImageContainer;
