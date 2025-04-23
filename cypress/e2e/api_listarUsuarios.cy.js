/// <reference types="cypress" />

/// 01 Listar usuários cadastrados

describe('API - Lista de usuários', () => {
    it('Deve listar todos usuários cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('usuarios').that.is.an('array')
            expect(response.body).to.have.property('quantidade').that.is.a('number')
        })
    })
})
