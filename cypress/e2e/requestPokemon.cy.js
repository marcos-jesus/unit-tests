describe('Should request api pokemon return datas', () => {
  it('Should request in api pokemon', () => {
    const clientHttp = 'https://pokeapi.co/api/v2/pokemon/ditto'
    cy.request('GET',clientHttp).then((response) => {
      if(response.status === 200) {
        expect(response.status).to.eq(200)
        expect(response.body.height).to.eq(3)
        expect(response.body.name).to.eq('ditto')
      }
    })
  })
})

describe('Should request Google', () => {
  it('Should open google', () => {
    const clientHttp = 'https://google.com.br'
    cy.visit(clientHttp)
  })
})
