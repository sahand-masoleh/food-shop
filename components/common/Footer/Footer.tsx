import { useEffect, useState } from "react";
import Link from "next/link";
import QuoteCarousel from "./QuoteCarousel";
import Badge from "./Badge";
import * as s from "./Footer.styles";
import randomColors, { Color } from "./randomColors";
import Up from "@/assets/icons/up.svg";

function Footer() {
	const [colors, setColor] = useState<Color[]>(["yellow", "red"]);
	useEffect(() => {
		setColor(randomColors(2));
	}, []);

	return (
		<s.Div_Footer
			style={{ "--color": `var(--${colors[0]})` } as React.CSSProperties}
		>
			<Info badgeColor={colors[1]} />
			<QuoteCarousel />
		</s.Div_Footer>
	);
}

export default Footer;

interface Infoable {
	badgeColor: Color;
}

function Info({ badgeColor }: Infoable) {
	return (
		<s.Div_Info>
			<Badge color={badgeColor} />
			<button
				onClick={() => {
					document.querySelector("body").scrollIntoView({ behavior: "smooth" });
				}}
			>
				<Up />
			</button>
			<h3>
				healthy
				<br />
				and delicious
			</h3>
			<div className="legal">
				<Link href="/attribution">attribution</Link>
				<Link href="/disclaimer">disclaimer</Link>
			</div>
			<Socials />
		</s.Div_Info>
	);
}

function Socials() {
	return (
		<div className="socials">
			<Link
				href="https://github.com/sahand-masoleh/food-shop-frontend"
				target="_blank"
			>
				github
			</Link>
			<Link href="https://sahand-masoleh.github.io" target="_blank">
				portfolio
			</Link>
			<Link href="https://twitter.com/SahandMasoleh" target="_blank">
				twitter
			</Link>
			<Link href="https://www.linkedin.com/in/sahand-masoleh/" target="_blank">
				linkedin
			</Link>
		</div>
	);
}
