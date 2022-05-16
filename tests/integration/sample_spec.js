import { mount } from "@cypress/vue";
import FirstPage from "../../views/FirstPage.vue";

describe("hi", () => {
    it("I don't know", () => {
        mount(FirstPage);

        cy.visit("http://localhost:8080/");
        cy.contains("próximo");
    });
});
