describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
})

describe('Second Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})

describe('Should get request in axios', () => {
  it('Should request in api pokemon', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
      if(response.status === 200) {
        expect(response.status).to.eq(200)
        expect(response.body.height).to.eq(3)
        expect(response.body.name).to.eq('ditto')
      }
    })
  })
})

describe('Should get open google', () => {
  it('open google', () => {
    cy.visit('https://google.com.br')
  })
})
