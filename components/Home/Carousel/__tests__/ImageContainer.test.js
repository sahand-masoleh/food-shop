import { getByText, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ImageContainer, { ImageWrapper } from "../ImageContainer";

const HEROES = [
	{
		id: 1,
		name: "apple",
		hero: "http://media-server.sahandmasoleh.com/media/food-shop/images/apple/01.jpg",
	},
	{
		id: 4,
		name: "grape",
		hero: "http://media-server.sahandmasoleh.com/media/food-shop/images/grape/01.jpg",
	},
	{
		id: 5,
		name: "kiwi",
		hero: "http://media-server.sahandmasoleh.com/media/food-shop/images/kiwi/01.jpg",
	},
	{
		id: 6,
		name: "orange",
		hero: "http://media-server.sahandmasoleh.com/media/food-shop/images/orange/01.jpg",
	},
	{
		id: 7,
		name: "pineapple",
		hero: "http://media-server.sahandmasoleh.com/media/food-shop/images/pineapple/01.jpg",
	},
	{
		id: 8,
		name: "strawberry",
		hero: "http://media-server.sahandmasoleh.com/media/food-shop/images/strawberry/01.jpg",
	},
	{
		id: 9,
		name: "watermelon",
		hero: "http://media-server.sahandmasoleh.com/media/food-shop/images/watermelon/01.jpg",
	},
];

const ORDER = "first";

const HANDLE_INTERSECTION = jest.fn(() => undefined);

window.IntersectionObserver = jest.fn(() => ({
	observe: () => undefined,
	disconnect: () => undefined,
}));

describe("image container", () => {
	render(
		<ImageContainer
			heroes={HEROES}
			order={ORDER}
			handleIntersection={HANDLE_INTERSECTION}
		/>
	);
	const imageContainer = screen.getByTestId("image-container");

	test("if image container is displayed", () => {
		expect(imageContainer).toBeInTheDocument();
	});

	const heroCount = HEROES.reduce((a, b) => (b.hero ? a + 1 : a), 0);
	test("if image container shows all heroes", () => {
		expect(imageContainer.children).toHaveLength(heroCount);
	});

	test("if cards in carousel can be hovered and clicked", async () => {
		render(
			<ImageWrapper
				end="left"
				frame=""
				name={HEROES[0].name}
				hero={HEROES[0].hero}
				handleIntersection={HANDLE_INTERSECTION}
			/>
		);

		const imageWrapper = screen.getByRole("option");
		await userEvent.hover(imageWrapper);
		const link = screen.getByRole("link", { name: HEROES[0].name });
		expect(link).toBeInTheDocument();
	});
});
