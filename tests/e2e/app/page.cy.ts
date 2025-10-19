describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Layout', () => {
    it('should render the main container with correct viewport height', () => {
      cy.get('div.flex.justify-center.items-center')
        .should('exist')
        .and('have.class', 'h-screen')
        .and('have.class', 'w-screen')
    })

    it('should have overflow hidden and smooth scroll', () => {
      cy.get('div.overflow-hidden').should('exist')
      cy.get('div.scroll-smooth').should('exist')
    })
  })

  describe('Heading', () => {
    it('should render an h1 element', () => {
      cy.get('h1').should('exist')
    })

    it('should render h1 with text B', () => {
      cy.get('h1 button').should('contain.text', 'B')
      cy.get('h1 button span').first().should('have.text', 'B')
    })

    it('should have gradient text styles', () => {
      cy.get('h1').should('have.class', 'inline-block')
    })

    it('should have responsive text size classes', () => {
      cy.get('h1')
        .should('have.class', 'text-8xl')
        .and('have.class', 'font-bold')
        .and('have.class', 'md:text-9xl')
    })

    it('should have gradient background applied', () => {
      cy.get('h1')
        .should('have.css', 'background')
        .and('include', 'linear-gradient')
    })

    it('should have text fill transparent for gradient effect', () => {
      cy.get('h1')
        .should('have.css', '-webkit-text-fill-color')
        .and('match', /transparent|rgba\(0, 0, 0, 0\)/)
    })
  })

  describe('Button', () => {
    it('should render a button inside h1', () => {
      cy.get('h1 button').should('exist')
    })

    it('should have button with type attribute', () => {
      cy.get('h1 button').should('have.attr', 'type', 'button')
    })

    it('should have cursor pointer class', () => {
      cy.get('h1 button').should('have.class', 'cursor-pointer')
    })

    it('should have transition classes', () => {
      cy.get('h1 button')
        .should('have.class', 'transition-transform')
        .and('have.class', 'duration-300')
        .and('have.class', 'ease-in-out')
    })

    it('should have hover and active scale classes', () => {
      cy.get('h1 button')
        .should('have.class', 'hover:scale-105')
        .and('have.class', 'active:scale-95')
    })

    it('should display initial text B', () => {
      cy.get('h1 button').contains('B').should('be.visible')
    })

    it('should have hidden "arthmossr" text initially', () => {
      cy.get('h1 button').contains('arthmossr').should('exist')
    })

    it('should expand to show full name when clicked', () => {
      cy.get('h1 button').click()
      cy.wait(1700)
      cy.get('h1 button').should('contain.text', 'Barthmossr')
    })

    it('should not collapse when clicked again', () => {
      cy.get('h1 button').click()
      cy.wait(1700)
      cy.get('h1 button').should('contain.text', 'Barthmossr')
      cy.get('h1 button').should('be.disabled')
      cy.get('h1 button').should('have.class', 'cursor-default')
      cy.get('h1 button').should('contain.text', 'Barthmossr')
    })

    it('should animate expansion smoothly', () => {
      cy.get('h1 button').click()
      cy.wait(200)
      cy.get('h1 button').should('contain.text', 'B')
      cy.wait(800)
      cy.get('h1 button').should('contain.text', 'Barthm')
      cy.wait(800)
      cy.get('h1 button').should('contain.text', 'Barthmossr')
    })
  })

  describe('Viewport and Responsiveness', () => {
    it('should render correctly on mobile viewport', () => {
      cy.viewport('iphone-x')
      cy.get('h1').should('be.visible')
      cy.get('h1 button').should('be.visible')
    })

    it('should render correctly on tablet viewport', () => {
      cy.viewport('ipad-2')
      cy.get('h1').should('be.visible')
      cy.get('h1 button').should('be.visible')
    })

    it('should render correctly on desktop viewport', () => {
      cy.viewport(1920, 1080)
      cy.get('h1').should('be.visible')
      cy.get('h1 button').should('be.visible')
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      cy.get('h1').should('have.length', 1)
    })

    it('should have focusable button', () => {
      cy.get('h1 button').focus().should('have.focus')
    })
  })

  describe('Page Metadata', () => {
    it('should have a title', () => {
      cy.title().should('not.be.empty')
    })
  })
})
