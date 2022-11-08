import Image from "next/image";
import * as s from "@/styles/Home/Home.styles";
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
	const imagesMap = [];
	images.forEach((image, i) => {
		imagesMap.push(
			<s.Div_ClippedImage
				key={image[0]}
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
		<>
			<s.Div_Hero>{imagesMap}</s.Div_Hero>
			<SVGDefs />
		</>
	);
}

export default Carousel;
