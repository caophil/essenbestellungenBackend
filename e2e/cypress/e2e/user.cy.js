/// <reference types="cypress" />

describe('User', () => {
  beforeEach(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
  });

  it('should sign up a new user', () => {
    const user = {
      username: 'testuser',
      password: 'testpassword',
      email: 'testuser@example.com',
      firstname: 'Test',
      lastname: 'User',
      personalnummer: 12345,
      role: 'user',
    };

    cy.visit('localhost:4200/sign-up');

    cy.contains('Sign up').click();

    cy.get('input[name="username"]').type(user.username);
    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="firstname"]').type(user.firstname);
    cy.get('input[name="lastname"]').type(user.lastname);
    cy.get('input[name="personalnummer"]').type(user.personalnummer);
    cy.get('input[name="password"]').type(user.password);

    cy.get('button[type="Sign-up"]').click();

    cy.visit('localhost:4200/login');

    cy.get('input[name="username"]').type(user.username);
    cy.get('input[name="password"]').type(user.password);

    cy.get('button[type="login"]').click();
  });


  it('should log out a logged in user', () => {
    const user = {
      username: 'testuser',
      password: 'testpassword',
      email: 'testuser@example.com',
      firstname: 'Test',
      lastname: 'User',
      personalnummer: 12345,
      role: 'user',
    };

    cy.request('POST', '/users/signup', user).then(response => {
      const { id, username } = response.body;

      expect(response.status).to.eq(201);
      expect(id).to.be.a('number');
      expect(username).to.eq(user.username);
    });

    cy.visit('localhost:4200/login');

    cy.contains('Log in').click();

    cy.get('input[name="username"]').type(user.username);
    cy.get('input[name="password"]').type(user.password);

    cy.get('button[type="login"]').click();

    cy.url().should('include', '/protected');

    cy.contains('Log out').click();

    cy.url().should('include', '/login');
  });
});
