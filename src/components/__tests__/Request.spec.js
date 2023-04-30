import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Welcome from '@/components/WelcomeItem.vue'

describe('Should get users', () => {
  it('Should mount component', () => {
    const wrapper = mount(Welcome)

    expect(wrapper.vm.$el).toBeTruthy()
  })

  it('Should return request users', () => {
    const mock = new MockAdapter(axios)

    mock.onGet('/users').reply(200, {
      users: [ 
        { id: 1, name: 'Marcos'},
        { id: 2, name: 'Buddy'}
      ]
    })

    axios.get('/users').then((response) => {
      expect(response.data.users).toEqual([
        { id: 1, name: 'Marcos'},
        { id: 2, name: 'Buddy'}
      ])
    })
  })
})
