describe("carousel", () => {
	it("can scroll the carousel", () => {
		cy.visit("");

		const carousel = cy.findByRole("list");
		carousel.then(($el) => expect(Cypress.dom.isScrollable($el)).to.be.true);
	});

	it("can scroll left indefinitely", () => {
		const cards = cy.findAllByRole("listitem");

		let clientWidth: number;
		cards.then((e) => {
			clientWidth = e[0].clientWidth;
			e[0].scrollIntoView({ behavior: "smooth" });
		});

		const carousel = cy.findByRole("list");
		carousel.then((e) =>
			expect(e[0].scrollLeft).to.be.greaterThan(clientWidth)
		);
	});

	it("can scroll right indefinitely", () => {
		const cards = cy.findAllByRole("listitem");

		let clientWidth: number;
		cards.then((e) => {
			clientWidth = e[0].clientWidth;
			e[e.length - 1].scrollIntoView({ behavior: "smooth" });
		});

		const carousel = cy.findByRole("list");
		carousel.then((e) => {
			expect(e[0].scrollWidth - e[0].scrollLeft).to.be.greaterThan(clientWidth);
		});
	});

	it("can click on card and navigate", () => {
		const cards = cy.findAllByRole("listitem");
		let title: string;
		cards
			.then((e) => {
				title = e[0].title;
				return e[0];
			})
			.click()
			.then(() => {
				const regex = new RegExp(`${title}`, "ig");
				expect(cy.findByRole("heading", { name: regex }));
			});
	});
});

export {};
