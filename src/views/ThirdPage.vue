<template>
    <!-- arrow-icon's container -->
    <div class="container-xl py-4">
        <router-link to="/">
            <img src="../assets/arrow.png" class="arrow-icon">
        </router-link>
    </div>

    <!-- page content section -->
    <div class="container-xl page__content py-4">
        <div class="container-xl">
            <div class="page__title fs-1 mx-5">Sobre o atendimento</div>
        </div>
        <div class="container-xl d-flex">
            <!-- left side container -->

            <div class="d-flex flex-column w-100" style="margin-left: 3em;margin-right: 1em;">
                <div class="d-flex flex-column">
                    <span style="font-weight: 600;">Nome completo</span>
                    <span>{{ $store.state.userData.name }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;">CPF</span>
                    <span>{{ $store.state.userData.cpf }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;">Número de celular ou telefone</span>
                    <span>{{ $store.state.userData.phoneNumber }}</span>
                </div>

                <div class="d-flex flex-column">
                    <span style="font-weight: 600;">Estado/Cidade</span>
                    <span>{{ $store.state.userData.state }}</span>
                    <span> {{ $store.state.userData.city }} </span>
                </div>
                <!-- confirm button -->
                <router-link to="/thank-you"><Button style="background-color: #FBDE40"></Button></router-link>
            </div>
            <div class="image-container w-100 align-self-center">
                <img src="../assets/desktop-pagina-3.png" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- content's page container -->
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
    },
    // computed: {
    //     userDataUpdated() {
    //         return this.$store.state.userData;
    //     }
    // }
}
</script>

<style>
</style>