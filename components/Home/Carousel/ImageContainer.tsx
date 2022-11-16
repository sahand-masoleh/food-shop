import Image from "next/image";
import { useEffect, useRef } from "react";
import * as s from "./Carousel.styles";

export type Hero = {
	id: number;
	name: string;
	hero: string;
};

interface ImageContainerable {
	heroes: Hero[];
	order: "first" | "second";
	handleIntersection: (entry: IntersectionObserverEntry) => void;
}

function ImageContainer({
	heroes,
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
		if (i === heroes.length - 1 && order === "second") return "right";
	}

	const heroesMap = heroes.map((hero, i) => {
		const end = detectEnd(i);
		return (
			<s.Div_ClippedImage
				key={hero.id}
				ref={end ? ref : null}
				data-end={end}
				style={
					{
						"--clip": `url(#${hero.name}-clip)`,
					} as React.CSSProperties
				}
			>
				<Image src={hero.hero} alt={hero.name} fill />
				<svg viewBox="0 0 1 1">
					<use href={`#${hero.name}`} />
				</svg>
			</s.Div_ClippedImage>
		);
	});

	return <div data-order={order}>{heroesMap}</div>;
}

export default ImageContainer;
