import { mount } from '@vue/test-utils'
import ThirdPage from '../../src/views/ThirdPage.vue'

describe('ThirdPage', () => {
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
            creditCardOptions: [],
        },
    },
  }
  const wrapper = mount(ThirdPage, {
      global: {
        mocks: {
          $store,
        }
      }
  })

  test ('pages title is equals to: Leonardo kkkkkkkk', () => {
    const page_title = wrapper.find('#teste')

    expect(page_title.text()).not.toBe('Sobre o atendimento')
    expect(page_title.text()).toBe('Leonardo kkkkkkkk')
  });

  test ('page has image on right side', () => {
    const image = wrapper.find('.page__image')
    expect(image.exists()).toBeTruthy()
  })

  test ('button registerProfessional takes to thank-you page', async () => {
    const button = wrapper.find('#register_professional')
    await button.trigger('click')
    expect(window.location.href).toBe('http://localhost/')
  })
})