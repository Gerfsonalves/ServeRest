/// <reference types="cypress" />

/// 01 Deletar usuário cadastrado

describe('API - Deletar usuário', () => {
    it('Deve deletar os dados do usuário com sucesso', () => {
        cy.request({
            method: '',
            url: '',
            body: {}
        }).then((response) => {
            expect(response.status).to.eq()
            expect(response.body.message).to.eq('')
        })
    })
})