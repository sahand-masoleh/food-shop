/*
	The Carousel
	Each set of images are repeated twice, each set has an intersection observer;
	The first set on the first image, and the second set on the last image.
	Upon intersection of the images, the carousel will scroll to the same image in the middle.
*/

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { clipIterator } from "./SVGDefs";
import * as s from "./Carousel.styles";
import { DBProductable } from "@/types/Product";

/* 
	EACH SET OF HERO IMAGES
*/

export type Hero = Pick<DBProductable, "id" | "name"> & { hero: string };

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
	/* detect which end of the line the observee is */
	function detectEnd(i: number) {
		if (i === 0 && order === "first") return "left";
		if (i === heroes.length - 1 && order === "second") return "right";
	}

	/* an iterator that spits out SVG clippers in order */
	const frames = clipIterator();

	/* map of hero images */
	const heroesMap = heroes.map((hero, i) => {
		const end = detectEnd(i);
		const frame = frames.next().value;
		return (
			<ImageWrapper
				key={hero.id}
				/* only put in the ref if in desired position */
				end={end}
				handleIntersection={end ? handleIntersection : null}
				frame={frame}
				name={hero.name}
				hero={hero.hero}
			/>
		);
	});

	return <div data-order={order}>{heroesMap}</div>;
}

export default ImageContainer;

/*
	EACH Clipped IMAGE
*/

interface ImageWrapperable {
	end: "left" | "right";
	frame: string;
	name: string;
	hero: string;
	handleIntersection?: (entry: IntersectionObserverEntry) => void;
}

function ImageWrapper({
	end,
	frame,
	name,
	hero,
	handleIntersection,
}: ImageWrapperable) {
	/* intersection observer is stored in a ref*/
	const observer = useRef<IntersectionObserver>();
	/* the ref holding the observee */
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		/* on first mount, instantiate the observer */
		/* observe the object in the ref only if it is at the end */
		if (end) {
			observer.current = new IntersectionObserver((e) =>
				handleIntersection(e[0])
			);
			observer.current.observe(ref.current);
		}

		/* clean up before unmounting */
		return () => end && observer.current.disconnect();
	}, []);

	/* detect the hover state to show the title */
	const [isHovered, setIsHoeverd] = useState(false);
	function handleHover(bool: boolean) {
		setIsHoeverd(bool);
	}

	return (
		<s.Div_ClippedImage
			className={isHovered ? "hovered" : null}
			onMouseEnter={() => handleHover(true)}
			onMouseLeave={() => handleHover(false)}
			ref={end && ref}
			/* the intersection callback looks at data-end to decide where to scroll to */
			data-end={end}
			style={
				{
					"--clip": `url(#${frame}-clip)`,
				} as React.CSSProperties
			}
		>
			<Link href={`/products/${name}`}>
				<Image src={hero} alt={name} width={640} height={640} />
			</Link>
			<svg viewBox="0 0 1 1">
				<use href={`#${frame}`} />
			</svg>
			<span>{name}</span>
		</s.Div_ClippedImage>
	);
}
