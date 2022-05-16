<template>
<div>
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

              <!-- name input tags -->
              <label for="nameInput" class="form-label">Nome completo*</label>
              <input name="name-input" type="text" class="form-control form-control-sm" placeholder="Digite o nome completo" v-bind:class="{correctInput: nameInputValidation}" v-model="$store.state.userData.name" @input="inputNameValidation">

              <!-- pt-br: showInputErrors se torna true quando o usuário clica em próximo. Dessa forma, os spans de erros não aparecem logo de cara. -->
              <div ref="nameError" class="form-text" v-bind:class="[showInputErrors ? {hidden: nameInputValidation} : {hidden: true}]">Seu nome deve conter entre 3 e 48 caracteres.</div>
            </div>

            <!-- cpf input tags -->
            <div class="mb-2">
              <label for="cpfInput" class="form-label">CPF*</label>

              <input type="text" class="form-control form-control-sm w-75"
              placeholder="Digite um CPF." maxlength="11" v-model="$store.state.userData.cpf" v-bind:class="{ correctInput: cpfInputValidation && cpfAPIValid }" @keydown="acceptOnlyNumbers($event)" @focus="removeFormatationCpf" @blur="transformCpfData">
              <!-- used keydown event above because I will force the input accept only numbers based on ASCII key's numbers -->

              <!-- Essa logica se perdura por boa parte dos inputs -->
              <div ref="cpfError" class="form-text" v-bind:class="[showInputErrors ? {hidden: cpfInputValidation && cpfAPIValid} : {hidden: true}]">
                  <p v-text="invalidMessage.cpf" />
              </div>
            </div>
            
            <!-- tag container que contém os inputs do phoneNumber e birthDate. Os criei para ajudar no mediaqueries. -->
            <div class="row phoneNumber-birthDate-inputs">
              
              <!-- phoneNumber input tags -->
              <div class="mb-2 col">
                <label for="phoneNumberInput" class="form-label">Número de telefone*</label>

                <input type="text" class="form-control form-control-sm" id="phoneNumberInput" placeholder="Ex: 14995435522" v-model="$store.state.userData.phoneNumber" maxlength="11" v-bind:class="{ correctInput : phoneNumberValidation }" @keydown="acceptOnlyNumbers($event)" @focus="removeFormatationPhoneNumber" @blur="transformPhoneNumberData">

                <div ref="phoneNumberError" class="form-text" v-bind:class="[showInputErrors ? {hidden: phoneNumberValidation} : {hidden: true}]">Seu número deve incluir 11 dígitos.</div>
              </div>

              <!-- birthDate input tags -->
              <div class="mb-2 col">
                <label for="birthDateInput" class="form-label">Data de nascimento*</label>
                <input type="text" class="form-control form-control-sm" placeholder="Ex: 01012003" maxlength="8" v-model="$store.state.userData.birthDate" ref="birthDateInput" v-bind:class="{ correctInput : birthDateValidation }" @keydown="acceptOnlyNumbers($event)" @focus="removeFormatationBirthDate" @blur="transformBirthDate">

                <div ref="birthDateError" class="form-text" v-bind:class="[showInputErrors ? {hidden: birthDateValidation} : {hidden: true}]">Sua data de nascimento deve conter 8 números.</div>
              </div>
            </div>

            <!-- state and city's inputs container-->
            <div class="row">

              <!-- state input tags -->
              <div class="mb-2 col">
                <label for="stateInput" class="form-label">Estado*</label>

                <select class="form-select form-select-sm" v-model="$store.state.userData.state" id="stateInput" v-bind:class="{ correctInput : stateInputValidation }">
                  <option v-for="estado in listagem.estados" :key="estado.id" :value="estado">{{ estado.nome }}</option>
                </select>

                <div class="form-text text-danger" v-bind:class="[showInputErrors ? {hidden: stateInputValidation} : {hidden: true}]">Você deve escolhar uma opção de estado.</div>
              </div>

              <!-- city input tags -->
              <div class="mb-2 col">
                <label for="citiesInput" class="form-label">Cidade*</label>

                <select class="form-select form-select-sm" v-model="$store.state.userData.city" id="citiesInput" v-bind:class="{ correctInput : cityInputValidation }">
                  <option v-for="city in listagem.cidades" :key="city.id"> {{ city.nome }}</option>
                </select>

                <div class="form-text" v-bind:class="[showInputErrors ? {hidden: cityInputValidation} : {hidden: true}]">Você deve escolher uma opção de cidade.</div>
              </div>
            </div>
          </form>

          <!-- page's status bar-->
          <div class="d-flex flex-row align-items-center">
            <div class="w-75 page-status d-flex flex-column">
              <!-- duas classes que se sobrepoem, sendo uma contendo a cor que indica o "status" da pagina (1/2 ou 2/2) e uma quase branca, servindo de background. -->
              <div class="back-status"> </div>
              <div class="front-status"> </div>
            </div>
            <div class="d-flex w-25 justify-content-center">
              <span class="page-status__span">1 de 2</span>
            </div>
          </div>

          <!-- confirm button -->
          <Button class="w-100" @click="checkInputs" button-title="leonardo"></Button>
        </div>
        <div class="col page__image-container">
          <img src="../assets/desktop-pagina-1.png" class="page__image-content">
        </div>
      </div>
    </div>
</div>
</template>

<script>

import Button from '../components/Button.vue';

export default {
  name: 'FirstPage',
  components: {
    Button
  },
  data() {
    return {
      showInputErrors: false,
      cpfAPIValid: true,
      invalidMessage: {
        cpf: 'O cpf deve conter 11 dígitos.'
      },
      listagem: {
          estados: [],
          cidades: [],
      }
    }
  },
  async created() {
    try {
        const res = await fetch('https://api-teste-front-end-fc.herokuapp.com/estados?_embed=cidades');
        
        if (res.status === 200) {
            this.listagem.estados = await res.json();
            console.log(this.listagem.estados)
        }
    } catch (err) {
        return console.error(err);
    }
  },
  methods: {
    //métodos para formatar os inputs do usuário.
    transformNameData() {
      const name = this.$store.state.userData.name.split(' ').map((element) => {
        const firstLetter = element.slice(0, 1).toUpperCase();

        return firstLetter + element.slice(1);
      }).join(' ')

      this.$store.state.userData.name = name
    },

    transformCpfData() {
      //if there is already some holdover of modification in input, just returns.
      if(this.$store.state.userData.cpf.includes('.')) return

      const cpf = [...this.$store.state.userData.cpf].map((letter, index) => {
        if(index === 2) {
          return letter = letter + '.'
        } else if (index === 5) {
          return letter = letter + '.'
        } else if (index === 8) {
          return letter = letter + '-'
        } else {
          return letter;
        }
      }).join('')
        this.$store.state.userData.cpf = cpf
    },

    transformPhoneNumberData() {
      if(this.$store.state.userData.phoneNumber.includes('(')) return

      const phoneNumber = [...this.$store.state.userData.phoneNumber].map((element, index) => {
        if (index === 0) {
          return element = '(' + element;
        } else if (index === 1) {
          return element = element + ')';
        } else if(index === 2) {
          return element = ' ' + element + ' '
        } else if (index === 6) {
          return element = element + '-'
        } else {
          return element;
        }
      }).join('')

      this.$store.state.userData.phoneNumber = phoneNumber
    },

    transformBirthDate() {
      if(this.$store.state.userData.birthDate.includes('/')) return

      const birthDateFormatted = [...this.$store.state.userData.birthDate].map((element, index) => {
        if (index === 1 || index === 3){
          return element = element + '/'
        } else {
          return element;
        }
      }).join('')
      this.$store.state.userData.birthDate = birthDateFormatted;
    },

    //método para mostrar cidades de acordo ao estado escolhido.
    showCities() {
      if (this.$store.state.userData.state === 'Paraná') {
        return ['Londrina', 'Maringá'];
      } else if (this.$store.state.userData.state === 'Rio Grande do Sul') {
        return ['Pelotas', 'Porto Alegre'];
      } else if (this.$store.state.userData.state === 'Santa Catarina') {
        return ['Florianópolis', 'Joinville'];
      }
    },
    
    //check when button "next" is clicked. This verify if all fields are correctly filled.
    checkInputs() {
      if(this.nameInputValidation && this.cpfInputValidation && this.phoneNumberValidation && this.birthDateValidation && this.stateInputValidation && this.cityInputValidation) {

        this.$router.push({ name: 'SecondPage' });
      } else {
        this.showInputErrors = true;
      }
    },

    //inputs para remover formatação dos dados. (fiz isso para que quando os usuários fossem editar os dados, não surgisse muitos bugs. Além de manter um padrão semelhante ao de quando eles escreveram os dados pela primeira vez.)

    //again: criei um método para cada input. (generalizar isso seria incrívellll)

    removeFormatationCpf() {
      if (this.$store.state.userData.cpf.includes('.')) {
        this.$store.state.userData.cpf = this.$store.state.userData.cpf.replaceAll('.', '');
      }
      if (this.$store.state.userData.cpf.includes('-')) {
        this.$store.state.userData.cpf = this.$store.state.userData.cpf.replaceAll('-', '');
      }

      return;
    },

    removeFormatationPhoneNumber() {
      if (this.$store.state.userData.phoneNumber.includes('(')) {
        this.$store.state.userData.phoneNumber = this.$store.state.userData.phoneNumber.replaceAll('(', '');
      }
      if (this.$store.state.userData.phoneNumber.includes(')')) {
        this.$store.state.userData.phoneNumber = this.$store.state.userData.phoneNumber.replaceAll(')', '');
      }
      if (this.$store.state.userData.phoneNumber.includes(' ')) {
        this.$store.state.userData.phoneNumber = this.$store.state.userData.phoneNumber.replaceAll(' ', '');
      }
      if (this.$store.state.userData.phoneNumber.includes('-')) {
        this.$store.state.userData.phoneNumber = this.$store.state.userData.phoneNumber.replaceAll('-', '');
      }

      return;
    },

    removeFormatationBirthDate() {
      if (this.$store.state.userData.birthDate.includes('/')) {
        this.$store.state.userData.birthDate = this.$store.state.userData.birthDate.replaceAll('/', '');
      }

      return;
    },
    acceptOnlyNumbers(e) {
        const charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
        const charStr = String.fromCharCode(charCode);

        if (!charStr.match(/^(0|[1-9][0-9]*|[a-i]|[`]|[\b]|[\t])$/))
         e.preventDefault();
    },
  },
  computed: {
    //computed properties que indicam se os inputs estão válidos ou não. E são nessas propriedades que as classes, que indicam se um input está correto ou não, se baseiam.

    nameInputValidation() {
      if (this.$store.state.userData.name.length >= 3 && this.$store.state.userData.name.length <= 48) {
        return true;
      } else {
        return false;
      }
    },

    cpfInputValidation() {
      if (this.$store.state.userData.cpf.length === 11 || (this.$store.state.userData.cpf.length === 14 && this.$store.state.userData.cpf.includes('.'))) {
        return true;
      } else {
        return false;
      }
    },

    phoneNumberValidation() {
      if (this.$store.state.userData.phoneNumber.length === 11 || (this.$store.state.userData.phoneNumber.length === 16 && this.$store.state.userData.phoneNumber.includes('('))){
        return true;
      } else {
        return false;
      }
    },

    birthDateValidation() {
      if (this.$store.state.userData.birthDate.length === 8 || (this.$store.state.userData.birthDate.length === 10 && this.$store.state.userData.birthDate.includes('/'))) {
        return true;
      } else {
        return false;
      }
    },

    stateInputValidation() {
      if (this.$store.state.userData.state != '') {
        return true;
      } else {
        return false;
      }
    },

    cityInputValidation() {
      if (this.$store.state.userData.city != '') {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    "$store.state.userData.state": async function(estado) {
        if (!estado) return;

        try {
            const res = await fetch(`https://api-teste-front-end-fc.herokuapp.com/cidades?estadoId=${estado.id}`);
            
            if (res.status === 200) {
                this.listagem.cidades = await res.json();
            }
        } catch (err) {
            console.error(err)
        }
    },
    "$store.state.userData.cpf": async function(newValue) {
        if (!newValue) return;
        const cpf = String(newValue);

        if (cpf.length === 11) {
            try {
                const res = await(await fetch(`https://api-teste-front-end-fc.herokuapp.com/profissionais?cpf=${this.$store.state.userData.cpf}`)).json();

                if (res?.length > 0) {
                    this.invalidMessage.cpf = "Esse CPF já está cadastrado em nossa base de dados."
                    return this.cpfAPIValid = false;
                }
                this.invalidMessage.cpf = "O cpf deve conter 11 dígitos."
                return this.cpfAPIValid = true;
            } catch (err) {
                return console.error(err);
            }
        }
    }
  }
}
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

    .back-status {
      margin: 1.5em 0;
      height: 20px;
      width: 100%;
      transform: translateY(12px);
      background-color: #f9f9f9;
      border-radius: 5px;
    }

    .front-status {
      content: '';
      position: relative;
      height: 20px;
      transform: translateY(-32px);
      width: 50%;
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

    @media screen and (max-width: 576px) {
      .container-xl {
        padding: 0 1em;
      }

      .page__image-container {
        display: none;
      }
      .mx-5 {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .px-5 {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .phoneNumber-birthDate-inputs {
        display: flex;
        flex-direction: column;
      }

      .payment-option__input {
        margin-right: 1.5em !important;
      }
    }

    @media screen and (min-width: 1400px) {
      .container-xl {
        width: 900px;
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
