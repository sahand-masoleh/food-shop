import { useEffect, useRef, useState } from "react";
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
	const mainRef = useRef<HTMLDivElement>();

	useEffect(() => {
		const interval = setInterval(
			() => mainRef.current.scrollBy({ left: 5 }),
			25
		);

		return () => clearInterval(interval);
	}, []);

	return (
		<s.Div_Quote ref={mainRef} className="quote-carousel">
			<QuoteWrapper order="first" />
			<QuoteWrapper order="second" />
		</s.Div_Quote>
	);
}

interface QuoteWrapperable {
	order: "first" | "second";
}

function QuoteWrapper({ order }: QuoteWrapperable) {
	const [left, setLeft] = useState(0);
	const ref = useRef<HTMLDivElement>();
	const appearance = useRef(order === "first" ? 1 : 0);
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		observer.current = new IntersectionObserver(handleIntersection, {
			root: document.querySelector(".quote-carousel"),
		});
		observer.current?.observe(ref.current);

		return () => observer.current.disconnect();
	}, []);

	function handleIntersection(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];
		const element = entry.target as HTMLDivElement;

		if (!entry.isIntersecting) {
			setLeft(element.clientWidth * 2 * appearance.current);
			appearance.current++;
		}
	}

	const quote =
		"you should have fruits and vegetables if you want to have a fruitfull life you should have fruits and vegetables if you want to have a fruitfull life".split(
			" "
		);
	const foods = foodIcons();

	const quoteMap = quote.map((e, i) => (
		<div key={e + i}>
			{e} <Icon SVG={foods.next().value} />
		</div>
	));

	return (
		<div
			ref={ref}
			className="first"
			style={{ "--left": `${left}px` } as React.CSSProperties}
		>
			{quoteMap}
		</div>
	);
}
