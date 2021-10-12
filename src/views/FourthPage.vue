<template>
<div>
  <!-- arrow-icon's container -->
    <div class="container-xl py-4">
        <router-link to="/confirm-data">
            <img src="../assets/arrow.png" class="arrow-icon">
        </router-link>
    </div>

    <!-- page content section -->
    <div class="container-xl page__content page4__content py-5">
        <div class="container-xl d-flex flex-column justify-content-center w-100 align-items-center">
            <span class="fs-1 page__title">Agradecemos o seu cadastro</span>

            <span class="fs-3 py-3 mx-5" style="font-weight: 600">Recebemos a sua solicitação, {{ userName }}!</span>

            <span class="fs-5 w-75 text-center text-fourth-page">Em breve entraremos em contato para conversarmos. Somos gratos por sua confiança em nosso serviço!</span>

            <img src="../assets/desktop-pagina-3.png" class="img-fluid my-4">

            <a href="https://facilconsulta.com.br/" class="w-75 button-fourth-page"><Button class="w-100" button-title="acesse nosso website">Voltar</Button></a>
        </div>
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
    computed: {
        //retorna só o primeiro nome do usuário. (achei legal isso!)
        userName() {
            return this.$store.state.userData.name.split(' ')[0];
        }
    }
}
</script>

<style>
    .page4__content {
        height: 800;
    }

    @media screen and (max-width: 576px) {
        .text-fourth-page {
            width: 100% !important;
            text-align: left !important;
        }
        .page4__content {
            height: 550;
        }
        .button-fourth-page {
            width: 100% !important;
        }
    }
</style>