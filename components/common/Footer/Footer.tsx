import { AnimationEventHandler, useEffect, useRef, useState } from "react";
import foodIcons, { Icon } from "@/components/common/FoodIcons";
import * as s from "./Footer.styles";

const colors = ["green", "blue", "red", "yellow"];

function Footer() {
	const [color, setColor] = useState<"green" | "blue" | "red" | "yellow">(
		"yellow"
	);
	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * colors.length);
		const randomColor = colors[randomIndex];
		setColor(randomColor as "green" | "blue" | "red" | "yellow");
	}, []);

	return (
		<s.Div_Footer
			style={{ "--color": `var(--${color})` } as React.CSSProperties}
		>
			<div></div>
			<QuoteCarousel />
		</s.Div_Footer>
	);
}

export default Footer;

function QuoteCarousel() {
	return (
		<s.Div_Quote className="quote-carousel">
			<QuoteWrapper />
			<QuoteWrapper />
		</s.Div_Quote>
	);
}

function QuoteWrapper() {
	const quote =
		//prettier-ignore
		"you should have fruits and vegetables if you want to have a fruitful life you should have fruits and vegetables if you want to have a fruitfull life"
		.split(" ");
	const foods = foodIcons();

	const quoteMap = quote.map((e, i) => (
		<div key={e + i}>
			{e} <Icon SVG={foods.next().value} />
		</div>
	));

	return <div>{quoteMap}</div>;
}
