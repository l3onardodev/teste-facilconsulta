import { shallowMount } from "@vue/test-utils";
import FirstPage from "@/views/FirstPage.vue";
import Button from "@/components/Button.vue";

describe("FirstPage", () => {
    const $store = {
        state: {
            userData: {
                name: "",
                cpf: "",
                phoneNumber: "",
                birthDate: "",
                state: "",
                city: "",
                mainExpertise: "",
                appointmentPrice: "",
                paymentOptions: [],
                creditCardOptions: []
            }
        }
    };
    const wrapper = shallowMount(FirstPage, {
        global: {
            mocks: {
                $store
            }
        }
    });
    test("check name input validation", async () => {
        const inputName = wrapper.find('[name="name-input"]');

        await inputName.setValue("sofiaespanha");
        expect(inputName.element.value.length).toBeGreaterThan(7);
        expect(inputName.element.value.length).not.toBeGreaterThan(14);
    });

    test("test inputErrors variable visibility", () => {
        wrapper.setData({ showInputErrors: false });
        const button = wrapper.findComponent(Button);
        button.trigger("click");
        expect(wrapper.vm.showInputErrors).toBe(true);
    });

    test("find image on page", () => {
        const image = wrapper.find("img");
        expect(image).toBeTruthy();
    });
});
