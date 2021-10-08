<template>
    <!-- home-icon's container -->
    <div class="container-xl py-4 d-flex justify-content-center">
        <router-link to="/">
            <img src="../assets/page1-home-icon.png" class="home-icon">
        </router-link>
    </div>

    <div class="container-xl page1__content py-5">
        <h1 class="fs-1 mx-5 page__title">Sobre o profissional</h1>
        <p class="fs-3 my-4 mx-5" style="font-weight: 600">Dados do profissional</p>
      <div class="d-flex">
        <div class="col px-5">
          <form>
            <div class="mb-2">
              <label for="nameInput" class="form-label">Nome completo*</label>
              <input type="text" class="form-control form-control-sm" id="nameInput" aria-describedby="emailHelp" placeholder="Digite o nome completo" v-bind:class="{correctInput: nameValidated}" v-model="$store.state.userData.name" @input="inputNameValidation">

              <div ref="nameError" class="form-text" v-bind:class="[showInputErrors ? {hidden: nameValidated} : {hidden: true}]">Seu nome deve conter mais que 3 caracteres.</div>
            </div>

            <div class="mb-2">
              <label for="cpfInput" class="form-label">CPF*</label>

              <input type="text" class="form-control form-control-sm w-75" id="cpfInput" aria-describedby="emailHelp" 
              placeholder="Digite um CPF." maxlength="11" v-model="$store.state.userData.cpf" v-bind:class="{ correctInput: cpfIsCorrect }" @keydown="acceptOnlyNumbersCpf($event)">
              <!-- used keydown event above because I will force the input accept only numbers based on ASCII key's numbers -->

              <div ref="cpfError" class="form-text" v-bind:class="[showInputErrors ? {hidden: cpfValidated} : {hidden: true}]">O cpf deve conter 11 números.</div>
            </div>
            
            <div class="row">
              <div class="mb-2 col">
                <label for="phoneNumberInput" class="form-label">Número de telefone*</label>

                <input type="text" class="form-control form-control-sm" id="phoneNumberInput" placeholder="(00) 0 0000-0000" v-model="$store.state.userData.phoneNumber" maxlength="11" v-bind:class="{ correctInput : phoneNumberValidation }" @keydown="acceptOnlyNumbersPhoneNumber($event)">

                <div ref="phoneNumberError" class="form-text" v-bind:class="[showInputErrors ? {hidden: phoneNumberValidated} : {hidden: true}]">error</div>
              </div>

              <div class="mb-2 col">
                <label for="birthDateInput" class="form-label">Data de nascimento*</label>
                <input type="text" class="form-control form-control-sm" placeholder="01/01/2003" maxlength="8" v-model="$store.state.userData.birthDate" ref="birthDateInput" v-bind:class="{ correctInput : birthDateValidation }" @keydown="acceptOnlyNumbersBirthDate($event)">

                <div ref="birthDateError" class="form-text" v-bind:class="[showInputErrors ? {hidden: birthDateValidation} : {hidden: true}]">teste</div>
              </div>
            </div>

            <!-- select input's section-->
            <div class="row">
              <div class="mb-2 col">
                <label for="phoneNumberInput" class="form-label">Estado*</label>

                <select class="form-select form-select-sm" v-model="$store.state.userData.state">
                  <option selected disabled>Selecione</option>
                  <option>Paraná</option>
                  <option>Rio Grande do Sul</option>
                  <option>Santa Catarina</option>
                </select>
                <div class="form-text text-danger">error</div>
              </div>

              <div class="mb-2 col">
                <label for="phoneNumberInput" class="form-label">Cidade*</label>

                <select class="form-select form-select-sm" aria-label="Default select example" v-bind="$store.state.userData.city">
                  <option selected disabled>Selecione</option>
                  <option v-for="city in showCities()" v-bind:key="city"> {{ city }}</option>
                </select>
                <div id="emailHelp" class="form-text">error</div>
              </div>
            </div>
          </form>
          <!-- -->
          <div class="d-flex flex-row align-items-center">
            <div class="w-75 page-status"> </div>
            <div class="d-flex w-25 justify-content-center">
              <span class="page-status__span">1 de 2</span>
            </div>
          </div>

          <!-- confirm button -->
          <router-link to="/pagina2"><Button></Button></router-link>
        </div>
        <div class="col">
          <img src="../assets/desktop-pagina-1.png" class="page__image-content" v-bind:title="rfefe">
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import GeneralStructure from '../components/GeneralStructure.vue';

import Button from '../components/Button.vue';

export default {
  name: 'FirstPage',
  components: {
    Button
  },
  data() {
    return {
      showInputErrors: false,
      nameValidated: false,
      cpfValidated: false,
      phoneNumberValidated: false,
      birthDateValidated: false,
    }
  },
  methods: {
    inputNameValidation(event) {
      if(event.target.value.length > 3 && event.target.value.length < 48) {
        console.log('true');
        this.nameValidated = true;
      } else {
        console.log('false');
        this.nameValidated = false;
      }
    },

    acceptOnlyNumbersCpf(event) {
      //the cpf input field ahs type "text", but I just wanna accept numbers, so I limited the ASCII characters ranger allowed.

      //if the the key's keycode is the value of a letter's keycode, returns false.
      if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
            if (event.keyCode === 17 && (event.keyCode == 65 || event.keyCode == 97)) return;

              setTimeout(() => {
                this.$store.state.userData.cpf = this.$store.state.userData.cpf.slice(0, -1);
              }, 50);

            return false;
      }
      //if its a number, returns true;
      return true;
    },

    acceptOnlyNumbersPhoneNumber(event) {
      //the cpf input field ahs type "text", but I just wanna accept numbers, so I limited the ASCII characters ranger allowed.

      //if the the key's keycode is the value of a letter's keycode, returns false.
      if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
            if (event.keyCode === 17 && (event.keyCode == 65 || event.keyCode == 97)) return;

              setTimeout(() => {
                this.$store.state.userData.phoneNumber = this.$store.state.userData.phoneNumber.slice(0, -1);
              }, 50);

            return false;
      }
      //if its a number, returns true;
      return true;
    },

    acceptOnlyNumbersBirthDate(event) {
      //the cpf input field ahs type "text", but I just wanna accept numbers, so I limited the ASCII characters ranger allowed.

      //if the the key's keycode is the value of a letter's keycode, returns false.
      if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
            if (event.keyCode === 17 && (event.keyCode == 65 || event.keyCode == 97)) return;

              setTimeout(() => {
                this.$store.state.userData.birthDate = this.$store.state.userData.birthDate.slice(0, -1);
              }, 50);

            return false;
      }
      //if its a number, returns true;
      return true;
    },

    showCities() {
      if (this.$store.state.userData.state === 'Paraná') {
        console.log('parana');
        return ['Londrina', 'Maringá'];
      } else if (this.$store.state.userData.state === 'Rio Grande do Sul') {
        return ['Pelotas', 'Porto Alegre'];
      } else if (this.$store.state.userData.state === 'Santa Catarina') {
        return ['Florianópolis', 'Joinville'];
      }
    },
  },
  computed: {
    phoneNumberValidation() {
      if (this.$store.state.userData.phoneNumber === 11) {
        return true;
      } else {
        return false;
      }
    },

    birthDateValidation() {
      if (this.$store.state.userData.birthDate === 11) {
        return true;
      } else {
        return false;
      }
    }
  }
}
  // computed: {
  //     //always verify when the "this.name" value changes, returning true or false depending of the conditions.
  //     nameInputIsCorrect() {
  //       if(this.name != '' && this.name.length >= 3 && this.name.length < 48) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     },

  //     cpfIsCorrect() {
  //       if (this.cpf.length === 11) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     },

  //     phoneNumberIsCorrect: function() {
  //       if (this.phoneNumber.length === 11) {
  //         console.log('true');
  //         return true
  //       } else {
  //         console.log('false');
  //         return false;
  //       }
  //     }
  // },
  //everytime an input gets correct, (i.e: return true), the input value is formatted
  // methods: {
  //   formValidation(e) {
  //       e.preventDefault();

  //       if(!this.nameInputIsCorrect) {
  //         this.inputErrors = true;
  //         console.log(this.inputErrors);
  //       }

  //       // if(this.nameInputIsCorrect) {
  //       //   if(this.errors.has(this.$refs.nameError.textContent = 'Seu nome deve conter entre 3 e 48 caracteres.')) {
  //       //     this.errors.delete(this.$refs.nameError.textContent = 'Seu nome deve conter entre 3 e 48 caracteres.');
  //       //   }
  //       // } else {
  //       //   this.errors.add(this.$refs.nameError.textContent = 'Seu nome deve conter entre 3 e 48 caracteres.');
  //       // }

  //       //validation of cpf input
  //       // if (this.cpf === 11) {
  //       //   console.log('numbers input correct');
  //       //   console.log(this.errors);
  //       //   console.log(this.errors.has(this.$refs.cpfError.textContent = 'O cpf deve conter 11 números.'))
  //       // } else {
  //       //   this.errors.add(this.$refs.cpfError.textContent = 'O cpf deve conter 11 números.');
  //       // }

  //       // if (this.errors.size > 0) {
  //       //   this.errors.forEach((element) => {
  //       //     console.log(element);
  //       //     return element;
  //       //   });
  //       // } else {
  //       //   console.log('proxima tela...')
  //       // }
  //     // }
  //   }
  // }
// }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }

    body {
      width: 100%;
      background: #FFE766;
      font-family: 'Open Sans', sans-serif;
    }

    .page1__content{
      background-color: #FFFFFF;
      border-radius: 25px;
      box-shadow: 2px 6px 10px rgb(0, 0, 0, 0.3);
      /* height: 600px; */
    }

    .page__title {
      font-weight: 600;
      color: #483698;
      font-family: 'Comfortaa', cursive;
    }

    .page__subtitle {
      font-weight: 500;
      color: #282828;
    }

    .page__image-content {
      max-width: 100%;
      transition: transform 1s ease;
      -o-transition: transform 1s ease;
    }

    .page__image-content:hover {
      transform: scale(1.025);
    }

    .form-control, .form-select{
      border: 1px solid #483698;
      padding: .5em 1em;
      color: #282828;
    }

    .page-status {
      height: 20px;
      width: 100%;
      background-color: #f9f9f9;
      border-radius: 5px;
    }

    .page-status::after {
      content: '';
      position: absolute;
      height: 20px;
      width: 200px;
      background-color: #483698;
      border-radius: 5px;
    }

    .page-status__span {
      color: #483698;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .form-text {
      color: #DC3545;
      font-weight: 600;
    }

    /* .form-control-sm {
      font-size: 0.75rem;
    } */

    .form-control-sm:focus, .form-control:focus, .form-select-sm:focus, .form-select:focus{
      outline: none;
      box-shadow: none;
      border: 1px solid #483698;
      box-shadow: 0px 0px 5px rgb(72, 54, 152, 0.5);
    }

    .hidden {
      display: none;
    }
    
    .correctInput {
      border: 1px solid #198754;
    }

    .home-icon {
      max-width: 50px;
    }

    @media screen and (min-width: 1400px) {
      .container-xl {
        width: 1140px;
      }
      .page1__content {
        width: 950px !important;
      }
    }
    @media screen and (min-width: 1200px) {
      .container-xl {
        width: 960px;
      }
      .page1__content {
        width: 950px !important;
      }
    }
</style>
