<template>
    <!-- arrow-icon's container -->
    <div class="container-xl py-4">
        <router-link to="/appointment-details">
            <img src="../assets/arrow.png" class="arrow-icon">
        </router-link>
    </div>

    <!-- page content section -->
    <div class="container-xl page__content page__content-mobile py-5">
        <div class="container-xl">
            <div class="page__title fs-1 mx-5">Sobre o atendimento</div>
        </div>
        <div class="container-xl d-flex">

            <!-- left side container -->
            <div class="d-flex flex-column w-100 content-mobile-container" style="margin-left: 3em;margin-right: 1em;">
                <div class="d-flex flex-column">
                    <span style="font-weight: 600;" class="py-2">Nome completo</span>
                    <span style="margin-bottom: .5em">{{ $store.state.userData.name }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;" class="py-2">CPF</span>
                    <span style="margin-bottom: .5em">{{ $store.state.userData.cpf }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;" class="py-2">Número de celular ou telefone</span>
                    <span style="margin-bottom: .5em">{{ $store.state.userData.phoneNumber }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;" class="py-2">Estado/Cidade</span>
                    <span style="margin-bottom: .5em">{{ $store.state.userData.state }} - {{ $store.state.userData.city }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;" class="py-2">Especialidade principal</span>
                    <span style="margin-bottom: .5em">{{ $store.state.userData.mainExpertise }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;" class="py-2">Preço da consulta</span>
                    <span style="margin-bottom: .5em">R$ {{ $store.state.userData.appointmentPrice }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;" class="py-2">Formas de pagamento da consulta</span>

                    <span v-for="paymentOption in $store.state.userData.paymentOptions" :key="paymentOption"> {{ paymentOption }}</span>

                    <span style="font-weight: 600;" class="py-2">Números de parcelas aceitas no cartão de crédito:</span>

                    <span>{{ $store.state.userData.creditCardOptions }}</span>
                </div>

                <!-- confirm button -->
                <router-link to="/thank-you"><Button style="background-color: #FBDE40" class="w-100 fs-5" button-title="cadastrar profissional"></Button></router-link>

                <router-link to="/" class="w-100 text-center" style="text-decoration: none; color:#483698; text-weight: 700;">Editar cadastro</router-link>
            </div>
            <div class="image-container w-100 align-self-center page__image-container">
                <img src="../assets/desktop-pagina-3.png" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>

import Button from '../components/Button.vue';

export default {
    name: 'ThirdPage',
    components: {
        Button
    },
    data() {
        return {
            paymentSubdivision: false,
        }
    }
}
</script>

<style>
    @media screen and (max-width: 576px) {
        .page__content-mobile {
            width: 100% !important;
        }
    }
</style>