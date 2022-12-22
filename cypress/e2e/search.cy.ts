describe("search", () => {
	it("can not see a text box yet", () => {
		cy.visit("/");
		cy.findByRole("textbox").should("not.exist");
	});

	it("can open the search bar", () => {
		cy.findByRole("button", { name: /search/i }).click();
	});

	it("can see the search bar now", () => {
		cy.findByRole("textbox").should("exist");
	});

	it("can show results for search", () => {
		cy.findByRole("textbox").type("apple{enter}");

		cy.intercept("*/search*").as("search");
		cy.wait("@search");

		cy.location().then((loc) => {
			expect(loc.pathname).to.be.equal("/search");
			expect(loc.search).to.be.equal("?keyword=apple");
		});
	});
});

export {};
