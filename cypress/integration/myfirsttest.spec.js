describe('The Home Page', function() {
  it('successfully loads the page', function() {
    cy.visit('http://localhost:3000/')
  })

  it('shows the proper navigation bar', function() {
    cy.get('.navbar>li').should('have.length', 3)

    cy.get('.navbar>li')
      .eq(0)
      .should('contain', 'Home')
    cy.get('.navbar>li')
      .eq(1)
      .should('contain', 'Location')
    cy.get('.navbar>li')
      .eq(2)
      .should('contain', 'Settings')
  })

  it('shows Home as the active page', function() {
    cy.get('.navbar>li')
      .eq(0)
      .find('.highlighter')
      .should('have.class', 'active')
  })

  it('loads a valid illustration component', function() {
    cy.get('.weather-illustration')
      .find('h1')
      .should('not.be.empty')

    cy.get('.weather-illustration')
      .find('.weather-location')
      .should('not.be.empty')
  })

  it('loads a Real feel stat w/data', function() {
    cy.get('.weather-stats-item')
      .eq(0)
      .within(() => {
        cy.get('.weather-stats-text span').should('have.text', 'Real feel')
        cy.get('.weather-stats-text p').contains('°C')
      })
  })

  it('loads a Wind Speed stat w/ data', function() {
    cy.get('.weather-stats-item')
      .eq(1)
      .within(() => {
        cy.get('.weather-stats-text span').should('have.text', 'Wind Speed')
        cy.get('.weather-stats-text p').contains('km/h')
      })
  })

  it('loads a Pressure stat w/ data', function() {
    cy.get('.weather-stats-item')
      .eq(2)
      .within(() => {
        cy.get('.weather-stats-text span').should('have.text', 'Pressure')
        cy.get('.weather-stats-text p').contains('mb')
      })
  })

  it('loads a Humidity stat w/ data', function() {
    cy.get('.weather-stats-item')
      .eq(3)
      .within(() => {
        cy.get('.weather-stats-text span').should('have.text', 'Humidity')
        cy.get('.weather-stats-text p').contains('%')
      })
  })

  it('loads a UV Index stat w/ data', function() {
    cy.get('.weather-stats-item')
      .eq(4)
      .within(() => {
        cy.get('.weather-stats-text span').should('have.text', 'UV Index')
        cy.get('.weather-stats-text p').should('not.be.empty')
      })
  })

  it('loads a Visibility stat w /data', function() {
    cy.get('.weather-stats-item')
      .eq(5)
      .within(() => {
        cy.get('.weather-stats-text span').should('have.text', 'Visibility')
        cy.get('.weather-stats-text p').contains('km')
      })
  })

  it('displays an hourly forecast of 12 items', function() {
    cy.get('.weather-hourly-forecast > ul > li').should('have.length', 12)
  })

  it('displays a daily forecast of 5 items', function() {
    cy.get('.weather-daily-forecast > li').should('have.length', 5)
  })
})
