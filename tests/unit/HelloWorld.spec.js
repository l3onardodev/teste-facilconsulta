import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
    it('first h1 element has value "Hello, World"', () => {
        const wrapper = shallowMount(HelloWorld);
        const h1 = wrapper.find("h1");
        expect(h1.element.textContent).toBe("Hello, World");
    });
    it('p element contains value "Lorem ipsum..."', () => {
        const wrapper = shallowMount(HelloWorld);
        const p = wrapper.find("p");
        expect(p.text()).toContain("Lorem ipsum");
        expect(p.text()).not.toContain("Hello, World");
        expect(p.classes()).toContain("red-color");
        expect(p.classes()).not.toContain("yellow-color");
    });
});
