import { useEffect, useState } from "react";
import QuoteCarousel from "./QuoteCarousel";
import Badge from "./Badge";
import * as s from "./Footer.styles";
import randomColors, { Color } from "./randomColors";

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
		</s.Div_Info>
	);
}
