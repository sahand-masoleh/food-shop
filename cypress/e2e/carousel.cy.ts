describe("carousel", () => {
	it("can scroll the carousel", () => {
		cy.visit("localhost:3000");

		const carousel = cy.findByRole("listbox");
		carousel.then(($el) => expect(Cypress.dom.isScrollable($el)).to.be.true);
	});

	it("can scroll left indefinitely", () => {
		const firstCard = cy.findAllByRole("option");

		let clientWidth: number;
		firstCard.then((e) => {
			clientWidth = e[0].clientWidth;
			e[0].scrollIntoView({ behavior: "smooth" });
		});

		const carousel = cy.findByRole("listbox");
		carousel.then((e) =>
			expect(e[0].scrollLeft).to.be.greaterThan(clientWidth)
		);
	});

	it("can scroll right indefinitely", () => {
		const firstCard = cy.findAllByRole("option");

		let clientWidth: number;
		firstCard.then((e) => {
			clientWidth = e[0].clientWidth;
			e[e.length - 1].scrollIntoView({ behavior: "smooth" });
		});

		const carousel = cy.findByRole("listbox");
		carousel.then((e) => {
			expect(e[0].scrollWidth - e[0].scrollLeft).to.be.greaterThan(clientWidth);
		});
	});
});

export {};
