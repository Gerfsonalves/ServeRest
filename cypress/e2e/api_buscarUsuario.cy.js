/// <reference types="cypress" />

/// 01 Buscar usuário cadastrado

describe('API - Busca de usuário', () => {
    it('Deve buscar o usuário por ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios/1O5B43tAokPFGwe2',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('_id', '1O5B43tAokPFGwe2')
        })
    });
});