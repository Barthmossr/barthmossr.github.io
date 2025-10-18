describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render an h1 with text B', () => {
    cy.get('h1').should('exist').and('have.text', 'B')
  })

  it('should have the correct title', () => {
    cy.title().should('not.be.empty')
  })
})
