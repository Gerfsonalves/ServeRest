import { faker } from '@faker-js/faker';

/// <reference types="cypress" />

/// 01 Cadastrar usuários

describe('API - Cadastro', () => {
    it('Deve realizar o cadastro com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": faker.person.fullName(),
                "email": faker.internet.email(),
                "password": faker.internet.password(),
                "administrador": "true"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
})