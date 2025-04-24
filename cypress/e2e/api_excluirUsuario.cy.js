/// <reference types="cypress" />

/// 01 Excluir usuário cadastrado

describe('API - Excluir usuário', () => {
    it('Deve excluir os dados do usuário com sucesso', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://serverest.dev/usuarios/zMg9ATRBuJOLseHB',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('Nenhum registro excluído')
        })
    })
})