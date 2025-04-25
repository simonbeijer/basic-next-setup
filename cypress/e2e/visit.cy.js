describe('Home Page', () => {
  it('should visit the homepage and see the navbar', () => {
    cy.visit('/');
    cy.get('nav').should('exist');
    cy.get('nav').should('contain', 'My navbar');
  });

  it('should click the Login button and navigate to login page', () => {
    cy.visit('/');
    cy.contains('Login').should('be.visible').click();
    cy.url().should('include', '/login');
  });
});
