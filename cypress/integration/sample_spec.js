describe("my first test", () => {
    it("visit my page", () => {
        cy.visit("http://localhost:8080/");
    });

    it("page has button with text próximo", () => {
        cy.contains("próximo");
    });

    it("sei la", () => {
        cy.contains("próximo").click();
    });
});
