import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"
import Login from '@/components/Login.vue'
import App from '@/components/WelcomeItem.vue'

describe('Verify mount component', () => {
  it('Should Mount Login', () => {
    const wrapper = mount(Login)
    expect(wrapper.vm.$el).toBeTruthy()
  })
})

describe('Should handle click in button Loged', () => {
  it('should call button login', () => {
    const loginSpy = vi.fn(Login.setup, 'login')
  
    const wrapper = mount(Login)
    const button = wrapper.find('button')
    button.trigger('click')
    loginSpy()

    expect(loginSpy).toHaveBeenCalled()
    loginSpy.mockRestore()

  })
})

describe('Should verify props', () => {
  it('Should compare props value', () => {
    const propValue = 'Marcos Jesus'
    const wrapper = mount(Login, {
      props: {
        name: 'Marcos Jesus'
      }
    })
    const text = wrapper.find('h3')
    const value = text.text()
    expect(value).toEqual(propValue)

  })

  it('Should render with dynamic prop value', () => {
    const myPropValue = "dynamic value"
    const wrapper = mount(Login, {
      props: {
        name: myPropValue
      }
    })

    expect(wrapper.props("name")).toBe(myPropValue)
  })

})

describe('Should Parent', () => {
  it('Should if component WelcomeItem it is render ', () => {
    const wrapperParent = mount(App)
    
    if(wrapperParent.exists) {
      expect(wrapperParent.vm.$el).toBeTruthy()
    } else {
      return false
    }

  })

  it('Verify see component have ul', () => {
    const wrapperParent = mount(App)

    if(wrapperParent.classes === 'ul') {
      const ul = wrapperParent.find('ul')
      
      expect(ul).toBeTruthy()
    }
  })

  it('Verify see component have slots', () => {
    const wrapperParent = mount(App)

    if(wrapperParent.classes('slot')) {
      const slot = wrapperParent.find('slot')

      expect(slot.exists).toBe(true)
    }
  })

})
