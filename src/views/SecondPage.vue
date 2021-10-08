<template>
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
            <div class="d-flex flex-column w-100" style="margin-left: 3em;margin-right: 1em;">
                <span class="fs-3 my-4" style="font-weight: 600;">Detalhes do atendimento</span>

                <form>
                    <div class="mb-2 col">
                        <label for="phoneNumberInput" class="form-label">Especialidade principal*</label>
                        <select class="form-select form-select-sm">
                        <option selected disabled>Selecione</option>
                        <option value="cardiologia">Cardiologia</option>
                        <option value="dermatologia">Dermatologia</option>
                        <option value="neurologia">Neurologia</option>
                        <option value="oftalmologia">Oftalmologia</option>
                        <option value="psiquiatria">Psiquiatria</option>
                        <option value="urologia">Urologia</option>
                        </select>
                        <div class="form-text text-danger">error</div>
                    </div>

                    <div class="mb-2 col">
                        <label class="form-label">Informe o preço da consulta*</label>
                        <div class="w-75 d-flex rounded" style="height: 34px;">
                            <div class="form-price-container">
                                <span class="fs-6" style="font-weight: 650;">R$</span>
                            </div>
                            <input type="text" class="form-control form-control-sm rounded-0" placeholder="Valor">
                        </div>
                        <div ref="birthDateError" class="form-text">teste</div>
                    </div>
                    <div class="mb-2 col">
                        <label class="form-label">Formas de pagamento de consulta*</label>

                        <div class="form-check payment-option py-3">
                            <input class="form-check-input payment-option__input" type="checkbox" value="" id="money-option-form">
                            <label class="form-check-label payment-option__label" for="money-option-form">
                                Em dinheiro
                            </label>
                        </div>

                        <div class="form-check payment-option py-3">
                            <input class="form-check-input payment-option__input" type="checkbox" value="" id="pix-option-form">
                            <label class="form-check-label payment-option__label" for="pix-option-form">
                                Pix
                            </label>
                        </div>
                        <div class="form-check payment-option py-3">
                            <input class="form-check-input payment-option__input" type="checkbox" value="" id="credit-card-option-form"
                            v-on:click="changePaymentSubdivisionState"
                            >

                            <label class="form-check-label payment-option__label" for="credit-card-option-form">
                                Cartao de credito
                            </label>

                            <!-- second part of credit card's payment option -->
                            <div class="d-flex flex-column px-5" v-if="paymentSubdivision">
                                <label class="form-label">Parcelamento em</label>

                                <div class="form-check w-100 py-2" style="border: none; box-shadow: none;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        1x, sem juros
                                    </label>
                                </div>

                                <div class="form-check w-100 py-2" style="border: none; box-shadow: none;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        2x, sem juros
                                    </label>
                                </div>

                                <div class="form-check w-100 py-2" style="border: none; box-shadow: none;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        3x, sem juros
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- -->
                <div class="d-flex flex-row align-items-center">
                    <div class="w-75 page-status"> </div>
                    <div class="d-flex w-25 justify-content-center">
                    <span class="page-status__span">2 de 2</span>
                    </div>
                </div>

                <!-- confirm button -->
                <router-link to="/confirm-data"><Button v-on:click="formValidation"></Button></router-link>
            </div>
            <div class="image-container w-100 align-self-center">
                <img src="../assets/desktop-pagina-2.png" class="img-fluid">
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
            paymentSubdivision: false
        }
    },
    methods: {
        changePaymentSubdivisionState() {
            //if paymentSubdivision it's true, return false. Otherwise, return true. (perhaps using ternary makes the code more complex than it really is)
            return this.paymentSubdivision === true ? this.paymentSubdivision = false : this.paymentSubdivision = true; 
        }
    }
}
</script>

<style>
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

    .page-status::before {
      /* 22% it's the same as 100% of .page-status parent element. Using 22%, the width becomes responsive to screen's size. (I don't think this is the best way, though) */
      width: 22%;
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
</style>