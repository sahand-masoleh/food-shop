describe("cart", () => {
	it("has an empty cart", () => {
		cy.clearLocalStorage();
		cy.visit("/products/apple");
		cy.findByRole("link", { name: /cart 0/i });
	});

	let price: number;
	it("can increase quantity", () => {
		cy.findByLabelText("current quantity").should("have.text", "1 kg");

		cy.findByRole("button", { name: /add .+ \d+/i }).then(
			(e) => (price = parseInt(e.text().match(/\d+/gi)[0]))
		);
		cy.findByRole("button", { name: "one kilo more" }).click();
		cy.findByLabelText("current quantity").should("have.text", "2 kg");
	});

	it("shows correct price", () => {
		const regex = new RegExp(`add .+ ${price * 2}`, "i");
		cy.findByRole("button", { name: regex });
	});

	it("can decrease quantity", () => {
		cy.findByRole("button", { name: "one kilo less" }).click();
		cy.findByLabelText("current quantity").should("have.text", "1 kg");
	});

	it("shows correct price", () => {
		const regex = new RegExp(`add .+ ${price}`, "i");
		cy.findByRole("button", { name: regex });
	});

	it("can add item and navigates to cart", () => {
		cy.findByRole("button", { name: /add .+ \d+/i }).click();
		cy.intercept("*/cart*").as("cart");
		cy.wait("@cart");
		cy.location().its("pathname").should("equal", "/cart");
	});

	it("shows correct quantity in cart", () => {
		cy.findByRole("link", { name: /cart 1/i });
		cy.findByRole("heading", { name: /1 item in cart/i });
	});

	it("can change quantity in cart", () => {
		cy.findByLabelText("current quantity").should("have.text", "1 kg");
		cy.findByRole("button", { name: /one kilo more/i }).click();
		cy.findByLabelText("current quantity").should("have.text", "2 kg");
	});

	it("shows correct total", () => {
		const regex = new RegExp(`.+${price * 2}`);
		cy.findByTestId("total").then((e) => expect(e.text()).to.match(regex));
	});

	it("can decrease quantity in cart", () => {
		cy.findByRole("button", { name: /one kilo less/i }).click();
		cy.findByLabelText("current quantity");
	});

	it("shows correct total", () => {
		const regex = new RegExp(`.+${price}`);
		cy.findByTestId("total").then((e) => expect(e.text()).to.match(regex));
	});

	it("can delete item", () => {
		cy.findByRole("button", { name: "delete" }).click();
		cy.findByRole("heading", { name: /oh no! cart is empty\.\.\./i }).should(
			"exist"
		);
		cy.findByRole("link", { name: /see all products/i }).click();
		cy.intercept("*shop*").as("shop");
		cy.wait("@shop");
		cy.location().then((loc) => {
			expect(loc.pathname).to.be.equal("/");
			expect(loc.hash).to.be.equal("#shop");
		});
	});
});
export {};
