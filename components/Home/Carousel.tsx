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
	const [firstLeft, setFirstLeft] = useState(0);
	const [secondLeft, setSecondLeft] = useState(0);

	function handleIntersection(entry: IntersectionObserverEntry) {
		if (entry.isIntersecting) {
			const element = entry.target as HTMLDivElement;

			const { offsetLeft, offsetWidth } = element.parentElement;
			const { id } = element.parentElement.dataset;
			const { end } = element.dataset;

			const newLeft = offsetLeft + offsetWidth * (end === "left" ? -1 : 1);
			if (id === "first") {
				setSecondLeft(newLeft - offsetWidth);
			} else if (id === "second") {
				setFirstLeft(newLeft);
			}
		}
	}

	return (
		<s.Div_Hero>
			<Hero
				id="first"
				left={firstLeft}
				handleIntersection={handleIntersection}
			/>
			<Hero
				id="second"
				left={secondLeft}
				handleIntersection={handleIntersection}
			/>
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
	id: "first" | "second";
	left: number;
	handleIntersection: (entry: IntersectionObserverEntry) => void;
}

function Hero({ id, left, handleIntersection }: Heroable) {
	const mainRef = useRef<HTMLDivElement>();
	const leftRef = useRef<HTMLDivElement>();
	const rightRef = useRef<HTMLDivElement>();
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		observer.current = new IntersectionObserver((e) =>
			handleIntersection(e[0])
		);
		observer.current.observe(leftRef.current);
		observer.current.observe(rightRef.current);

		id === "first" && mainRef.current.scrollIntoView({ inline: "center" });

		return () => observer.current.disconnect();
	}, []);

	const imagesMap = images.map((image, i) => {
		return (
			<s.Div_ClippedImage
				key={image[0]}
				ref={i === 0 ? leftRef : i === 7 ? rightRef : null}
				data-end={i === 0 ? "left" : i === 7 ? "right" : null}
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

	return (
		<div
			ref={mainRef}
			data-id={id}
			style={
				{
					"--left": `${left}px`,
				} as React.CSSProperties
			}
		>
			{imagesMap}
		</div>
	);
}
