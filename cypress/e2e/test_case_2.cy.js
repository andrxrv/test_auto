describe('Test Case 2: Count android results', () => {
  it('passes', () => {
    cy.visit('https://start.duckduckgo.com/')
    cy.get("#searchbox_input").type("android{enter}")
    cy.get('a[data-testid="region-filter-label"]').click()
    cy.get('.BDI1KtNF8HUPBZ4Cw_nK').its('length').should('be.gt', 10)
  })
})
