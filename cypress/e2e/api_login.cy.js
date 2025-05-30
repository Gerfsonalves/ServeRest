/// <reference types="cypress" />

/// 01 Login com usuário válido - 02 Login com credenciais inválidas

/// OBSERVAÇÃO SOBRE O LOGIN DE USUÁRIO

///POST
/// /login
///Realizar login
///A duração do token retornado em authorization é de 600 segundos (10 minutos). Caso esteja expirado irá receber status code 401 (Unauthorized).

describe('API - Teste funcional de login', () => {
  ///  it('Deve realizar o login com sucesso', () => {
  ///    cy.request({
  ///      method: 'POST',
  ///      url: 'https://serverest.dev/login',
  ///      body: {
  ///        "email": "fulano@qa.com",
  ///        "password": "teste"
  ///      },
  ///      failOnStatusCode: false
  ///    }).then((response) => {
  ///      expect(response.status).to.equal(200)
  ///      expect(response.body.message).to.equal('Login realizado com sucesso')
  ///    })
  /// })

  it('Login com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        "email": "fulano@qa.com",
        "password": "teste1"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(401)
      expect(response.body.message).to.equal('Email e/ou senha inválidos')
    })
  });
})