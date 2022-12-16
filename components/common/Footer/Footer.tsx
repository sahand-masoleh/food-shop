import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import QuoteCarousel from "./QuoteCarousel";
import Badge from "./Badge";
import * as s from "./Footer.styles";
import randomColors, { Color } from "./randomColors";
import Up from "@/assets/icons/up.svg";
import { fadeIn_items } from "@/styles/animations";

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
		<s.M_Div_Info>
			<Badge color={badgeColor} />
			<s.M_H3>
				healthy
				<br />
				and delicious
			</s.M_H3>
			<s.M_Div className="legal">
				<Link href="/attribution">attribution</Link>
				<Link href="/disclaimer">disclaimer</Link>
			</s.M_Div>
			<Socials />
			<s.M_Button
				onClick={() => {
					document.querySelector("body").scrollIntoView({ behavior: "smooth" });
				}}
			>
				<Up />
			</s.M_Button>
		</s.M_Div_Info>
	);
}

function Socials() {
	return (
		<s.M_Div className="socials">
			<Link href="https://github.com/sahand-masoleh/food-shop" target="_blank">
				github
			</Link>
			<Link href="https://sahandmasoleh.com" target="_blank">
				portfolio
			</Link>
			<Link href="https://twitter.com/SahandMasoleh" target="_blank">
				twitter
			</Link>
			<Link href="https://www.linkedin.com/in/sahand-masoleh/" target="_blank">
				linkedin
			</Link>
		</s.M_Div>
	);
}
