import Image from "next/image";
import * as s from "@/styles/Home/Home.styles";
import SVGDefs from "./SVGDefs";
import React, { useEffect, useRef, useState } from "react";

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
		<s.Div_Hero ref={ref}>
			<Hero order="first" handleIntersection={handleIntersection} />
			<Hero order="second" handleIntersection={handleIntersection} />
			<SVGDefs />
		</s.Div_Hero>
	);
}

export default Carousel;

/**
 *
 *
 *
 */

interface Heroable {
	order: "first" | "second";
	handleIntersection: (entry: IntersectionObserverEntry) => void;
}

function Hero({ order, handleIntersection }: Heroable) {
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
