import Image from "next/image";
import * as s from "@/styles/Home/Home.styles";

const images = [
	[
		"Figma logo pin",
		"/Home/Carousel/01.webp",
		"/Home/Carousel/shapes/octagon.svg",
	],
	[
		"Rainbow logo tree",
		"/Home/Carousel/02.webp",
		"/Home/Carousel/shapes/hourglass.svg",
	],
	[
		"Bezier water bottle",
		"/Home/Carousel/03.webp",
		"/Home/Carousel/shapes/circle.svg",
	],
	[
		"Figma embroided hoodie",
		"/Home/Carousel/04.webp",
		"/Home/Carousel/shapes/zigzag.svg",
	],
	[
		"Figma wordmark tee",
		"/Home/Carousel/05.webp",
		"/Home/Carousel/shapes/octagon.svg",
	],
	[
		"Light gre coment icon socks",
		"/Home/Carousel/06.webp",
		"/Home/Carousel/shapes/hourglass.svg",
	],
	[
		"Throw blanket",
		"/Home/Carousel/07.webp",
		"/Home/Carousel/shapes/rectangle.svg",
	],
	[
		"Blue figma hat",
		"/Home/Carousel/08.webp",
		"/Home/Carousel/shapes/zigzag.svg",
	],
];

function Carousel() {
	const imagesMap = [];
	images.forEach((image, i) => {
		imagesMap.push(
			<s.Div_ClippedImage
				style={{ "--mask-image": `url(${image[2]})` } as React.CSSProperties}
			>
				<Image src={image[1]} alt={image[0]} fill />
			</s.Div_ClippedImage>
		);
	});

	return (
		<>
			<s.Div_Hero>{imagesMap}</s.Div_Hero>
		</>
	);
}

export default Carousel;
