import { createStore } from "vuex";

export default createStore({
    state: {
        userData: {
            name: "",
            cpf: "",
            phoneNumber: "",
            birthDate: "",
            state: "",
            city: "",
        },
    },
});
