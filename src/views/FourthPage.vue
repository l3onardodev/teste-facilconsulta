<template>
  <!-- arrow-icon's container -->
    <div class="container-xl py-4">
        <router-link to="/">
            <img src="../assets/arrow.png" class="arrow-icon">
        </router-link>
    </div>

    <!-- page content section -->
    <div class="container-xl page__content py-5" style="height: 800px;">
        <div class="container-xl d-flex flex-column justify-content-center w-100 align-items-center">
            <span class="fs-1 page__title">Agradecemos o seu cadastro</span>

            <span class="fs-3 py-3 mx-5" style="font-weight: 600">Recebemos a sua solicitação, {{ userName }}!</span>

            <span class="fs-5 w-75 text-center">Em breve entraremos em contato para conversarmos. Somos gratos por sua confiança em nosso serviço!</span>

            <img src="../assets/desktop-pagina-3.png" class="img-fluid my-4">

            <Button class="w-75">Voltar</Button>
        </div>
    </div>
</template>

<script>

import Button from '../components/Button.vue'

export default {
    name: 'FourthPage',
    components: {
        Button
    },
    methods: {
        changeButtonText() {
            this.$refs.button.textContent = 'oi'
        }
    },
    computed: {
        userName() {
            return this.$store.state.userData.name.split(' ')[0];
        }
    }
}
</script>

<style>

</style>