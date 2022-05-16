<template>
<div>
        <!-- arrow-icon's container -->
        <div class="container-xl py-4">
            <router-link to="/">
                <img src="../assets/arrow.png" class="arrow-icon">
            </router-link>
        </div>

        <!-- page content section -->
        <div class="container-xl page__content py-5">
            <div class="container-xl">
                <div class="page__title fs-1 mx-5">Sobre o atendimento</div>
            </div>
            <div class="container-xl d-flex">

            <!-- left side container -->
            <div class="d-flex flex-column w-100 content-mobile-container" style="margin-left: 3em;margin-right: 1em;">
                <span class="fs-3 my-4" style="font-weight: 600;">Detalhes do atendimento</span>

                <form>
                    <div class="mb-2 col">
                        <label for="phoneNumberInput" class="form-label form-label-second-page">Especialidade principal*</label>
                        <select class="form-select form-select-sm" v-model="$store.state.userData.mainExpertise" v-bind:class="{ correctInput : mainExpertiseValidation }">
                            <option selected disabled>Selecione</option>
                            <option v-for="especialidade in listagem.especialidades" :value="especialidade" :key="especialidade.id">{{ especialidade.nome }}</option>
                        </select>

                        <div class="form-text text-danger" v-bind:class="[showInputErrors ? {hidden: mainExpertiseValidation} : {hidden: true}]">Você deve escolher uma opção de especialidade principal.</div>
                    </div>

                    <div class="mb-2 col">
                        <label class="form-label form-label-second-page">Informe o preço da consulta*</label>

                        <div class="w-75 d-flex rounded" style="height: 34px;">
                            <div class="form-price-container">
                                <span class="fs-6" style="font-weight: 650;">R$</span>
                            </div>
                            <input type="text" class="form-control form-control-sm rounded-0" placeholder="Ex: 100" v-model="$store.state.userData.appointmentPrice" 
                            @keydown="acceptOnlyNumbers($event)" @focus="removeFormatationAppointmentPrice"
                            @blur="transformAppointmentPriceInput"
                            v-bind:class="{ correctInput : appointmentPriceValidation }">
                        </div>

                        <div class="form-text" v-bind:class="[showInputErrors ? {hidden: appointmentPriceValidation} : {hidden: true}]">O preço da consulta deve custar entre R$30 e R$200.</div>
                    </div>
                    <div class="mb-2 col">
                        <label class="form-label form-label-second-page">Formas de pagamento de consulta*</label>

                        <div class="form-check payment-option py-3">
                            <input class="form-check-input payment-option__input" type="checkbox" value="Em dinheiro" id="money-option-form" v-model="$store.state.userData.paymentOptions">
                            <label class="form-check-label payment-option__label" for="money-option-form">
                                Em dinheiro
                            </label>
                        </div>

                        <div class="form-check payment-option py-3">
                            <input class="form-check-input payment-option__input" type="checkbox" value="Pix" id="pix-option-form" v-model="$store.state.userData.paymentOptions">
                            <label class="form-check-label payment-option__label" for="pix-option-form">
                                Pix
                            </label>
                        </div>
                        <div class="form-check payment-option py-3">

                            <input class="form-check-input payment-option__input" type="checkbox" value="Cartao de Credito" id="credit-card-option-form"
                            v-model="$store.state.userData.paymentOptions">

                            <label class="form-check-label payment-option__label" for="credit-card-option-form">
                                Cartao de credito
                            </label>

                            <!-- second part of credit card's payment option -->
                            <div class="d-flex flex-column px-5" v-if="$store.state.userData.paymentOptions.find((element) => element === 'Cartao de Credito')">
                                <label class="form-label form-label-second-page">Parcelamento em</label>

                                <div class="form-check w-100 py-2" style="border: none; box-shadow: none;">
                                    <input class="form-check-input" type="radio" value="1x, sem juros" v-model="$store.state.userData.creditCardOptions">
                                    <label class="form-check-label">
                                        1x, sem juros
                                    </label>
                                </div>

                                <div class="form-check w-100 py-2" style="border: none; box-shadow: none;">
                                    <input class="form-check-input" type="radio" value="2x, sem juros" v-model="$store.state.userData.creditCardOptions">
                                    <label class="form-check-label">
                                        2x, sem juros
                                    </label>
                                </div>

                                <div class="form-check w-100 py-2" style="border: none; box-shadow: none;">
                                    <input class="form-check-input" type="radio" value="3x, sem juros" v-model="$store.state.userData.creditCardOptions">
                                    <label class="form-check-label">
                                        3x, sem juros
                                    </label>
                                </div>

                                <div class="form-text" v-bind:class="[showInputErrors ? {hidden: creditCardValidation} : {hidden: true}]">Você deve selecionar uma opção de parcelamento.</div>
                            </div>
                        </div>

                        <div class="form-text" v-bind:class="[showInputErrors ? {hidden: paymentOptionsValidation} : {hidden: true}]">Você deve escolher ao menos uma opção de pagamento.</div>
                    </div>
                </form>
                <!-- -->
                <div class="d-flex flex-row align-items-center">
                    <div class="w-75 page-status d-flex flex-column">
                    <div class="back-status"> </div>
                    <div class="front-status" style="width: 100%"> </div>
                    </div>
                    <div class="d-flex w-25 justify-content-center">
                    <span class="page-status__span">2 de 2</span>
                    </div>
                </div>

                <!-- confirm button -->
                <router-link to="/confirm-data"><Button v-on:click="checkInputs($event)" class="w-100" button-title="próximo"></Button></router-link>
            </div>
            <div class="image-container w-100 align-self-center page__image-container">
                <img src="../assets/desktop-pagina-2.png" class="img-fluid">
            </div>
        </div>
    </div>
</div>
    <!-- content's page container -->
</template>

<script>

import Button from '../components/Button.vue';

export default {
    name: 'SecondPage',
    components: {
        Button
    },
    data() {
        return {
            paymentSubdivision: false,
            showInputErrors: false,
            listagem: {
                especialidades: []
            }
        }
    },
    created () {
        this.fetchEspecialidades();
    },
    methods: {
        async fetchEspecialidades() {
            try {
                const res = await fetch('https://api-teste-front-end-fc.herokuapp.com/especialidades');

                if (res.status === 200) {
                    this.listagem.especialidades = await res.json();
                }
            } catch (err) {
                return console.error(err);
            }
        },
        //transforma o preço que o usuário coloca. (ex: usuário digita 30, isso transforma para: 30,00);
        transformAppointmentPriceInput() {
            if (this.$store.state.userData.appointmentPrice.includes(',') || this.$store.state.userData.appointmentPrice === '') return

            //sinceramente: isso foi gambiarra. Simulei floating points, que possuem vírgulas, adicionando zeros à uma string.
            this.$store.state.userData.appointmentPrice = this.$store.state.userData.appointmentPrice + ',' + '00';
        },

        //checa se os inputs estão corretos para poder ir à próxima página.
        checkInputs(e) {
            if (this.mainExpertiseValidation && this.appointmentPriceValidation &&  this.creditCardValidation && this.paymentOptionsValidation) {
                this.transformAppointmentPriceInput();
            } else {
                this.showInputErrors = true;
                e.preventDefault();
            }
        },
        
        //remove a "gambiarra", isto é: remove os zeros da string e retorna somente os números que o usuário, de fato, digitou.
        removeFormatationAppointmentPrice() {
            if(this.$store.state.userData.appointmentPrice.includes(',')) {
                this.$store.state.userData.appointmentPrice = this.$store.state.userData.appointmentPrice.slice(0, this.$store.state.userData.appointmentPrice.indexOf(','));
            }
        },

        acceptOnlyNumbers(e) {
            const charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
            const charStr = String.fromCharCode(charCode);

            if (!charStr.match(/^(0|[1-9][0-9]*|[a-i]|[`]|[\b])|[\t]$/))
            e.preventDefault();
        },
    },
    computed: {
        //computed properties que indicam se os inputs estão corretos ou não.
        mainExpertiseValidation() {
            if (this.$store.state.userData.mainExpertise != '') {
                return true;
            } else {
                return false;
            }
        },
        paymentOptionsValidation() {
            if (this.$store.state.userData.paymentOptions.length != 0) {
                return true;
            } else {
                return false;
            }
        },

        appointmentPriceValidation() {
            const a = Number(this.$store.state.userData.appointmentPrice) || this.$store.state.userData.appointmentPrice.slice(0, this.$store.state.userData.appointmentPrice.indexOf(','));

            if(a >= 30 && a <= 350) {
                return true;
            } else {
                return false;
            }
        },

        creditCardValidation() {
            if(this.$store.state.userData.paymentOptions.find((element) => element === "Cartao de Credito")) {
                if (this.$store.state.userData.creditCardOptions.length > 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    }
}
</script>

<style>
    .form-label-second-page {
        margin: 0.7em 0;
    }
    
    .arrow-icon {
        max-width: 30px;
    }

    .page__title {
        font-family: 'Comfortaa', cursive;
        font-weight: 600;
        color: #483698;
    }

    .page__content {
        background-color: #FFFFFF;
        margin-bottom: 3em; 
        border-radius: 20px;
        box-shadow: 2px 6px 10px rgb(0, 0, 0, 0.3);
    }

    .form-price-container {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #483698;
        color: #F9F9F9;
    }

    .payment-option {
        border-radius: 6px;
        box-shadow: 0px 2px 4px rgb(0, 0, 0, 0.3);
        background-color: #f9f9f9;
        padding: .65em 4em;
        margin: 1em 0;
    }

    .payment-option__input {
        margin-right: 3.5em;
    }

    .payment-option__label {
        font-weight: 600;
    }

    .page-status::after {
      /* 22% it's the same as 100% of .page-status parent element. Using 22%, the width becomes responsive to screen's size. (I don't think this is the best way, though) */
      width: 320px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: height 5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        height: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        .container-xl {
            width: 850px;
        }
    }

    @media screen and (max-width: 576px) {
        .content-mobile-container {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }
</style>