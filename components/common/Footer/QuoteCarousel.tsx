import foodIcons, { Icon } from "@/components/common/FoodIcons";
import * as s from "./Footer.styles";

function QuoteCarousel() {
	return (
		<s.Div_Quote className="quote-carousel">
			<QuoteWrapper />
			<QuoteWrapper />
		</s.Div_Quote>
	);
}

export default QuoteCarousel;

function QuoteWrapper() {
	const quote =
		//prettier-ignore
		"you should have fruits and vegetables if you want to have a fruitful life you should have fruits and vegetables if you want to have a fruitful life"
		.split(" ");
	const foods = foodIcons();

	const quoteMap = quote.map((e, i) => (
		<div key={e + i}>
			{e} <Icon SVG={foods.next().value} />
		</div>
	));

	return <div>{quoteMap}</div>;
}
