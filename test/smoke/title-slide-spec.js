describe('Title Slide', () => {
  it('should render the title', () => {
    cy.visit('/');

    cy.get('div.spectacle-content').should('contain', 'CI vs CDthe unexpected conflict');
  });
});
