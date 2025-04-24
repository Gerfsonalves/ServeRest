import { faker } from '@faker-js/faker';

/// <reference types="cypress" />

/// 01 Listar usuários cadastrados

describe('API - Editar usuário', () => {
    it('Deve editar os dados do usuário com sucesso', () => {
        cy.request({
            method: 'PUT',
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
            body: {
                "nome": faker.person.fullName(),
                "email": faker.internet.email(),
                "password": faker.internet.password(),
                "administrador": "true"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('Registro alterado com sucesso')
        })
    })
})
