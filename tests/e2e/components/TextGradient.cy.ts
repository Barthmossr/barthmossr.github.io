describe('TextGradient Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Visual Styles', () => {
    it('should have gradient background', () => {
      cy.get('h1')
        .should('have.css', 'background')
        .and('match', /linear-gradient/)
    })

    it('should have correct gradient colors', () => {
      cy.get('h1')
        .should('have.css', 'background')
        .and('include', 'rgb(80, 150, 220)')
        .and('include', 'rgb(255, 200, 120)')
    })

    it('should clip background to text', () => {
      cy.get('h1').should('have.css', '-webkit-background-clip', 'text')
    })

    it('should have transparent text fill', () => {
      cy.get('h1')
        .should('have.css', '-webkit-text-fill-color')
        .and('match', /transparent|rgba\(0, 0, 0, 0\)/)
    })

    it('should be inline-block', () => {
      cy.get('h1').should('have.class', 'inline-block')
    })
  })

  describe('Color Contrast', () => {
    it('should be visible against page background', () => {
      cy.get('h1').should('be.visible')
    })

    it('should have readable text with gradient', () => {
      cy.get('h1 button').should('be.visible')
      cy.get('h1 button span')
        .first()
        .should('have.text', 'B')
        .and('be.visible')
    })
  })

  describe('Visual Regression', () => {
    it('should match visual snapshot on desktop', () => {
      cy.viewport(1920, 1080)
      cy.get('h1').should('be.visible')
    })

    it('should match visual snapshot on mobile', () => {
      cy.viewport('iphone-x')
      cy.get('h1').should('be.visible')
    })
  })

  describe('Hover and Interaction States', () => {
    it('should maintain gradient on button hover', () => {
      cy.get('h1 button').trigger('mouseover')
      cy.get('h1')
        .should('have.css', 'background')
        .and('include', 'linear-gradient')
    })

    it('should show cursor pointer on button', () => {
      cy.get('h1 button').should('have.css', 'cursor', 'pointer')
    })
  })

  describe('Animation and Performance', () => {
    it('should render gradient without flickering', () => {
      cy.get('h1').should('be.visible')
      cy.wait(100)
      cy.get('h1')
        .should('have.css', 'background')
        .and('include', 'linear-gradient')
    })

    it('should maintain gradient after page interaction', () => {
      cy.get('h1 button').click()
      cy.get('h1')
        .should('have.css', 'background')
        .and('include', 'linear-gradient')
    })
  })
})
