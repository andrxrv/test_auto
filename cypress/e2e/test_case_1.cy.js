describe('Test Case 1: Search for android word', () => {
  it('passes', () => {
    cy.visit('https://start.duckduckgo.com/')
    cy.get("#searchbox_input").type("android{enter}")
    cy.get('a[data-testid="result-title-a"]').should("contain", "Android")
  })
})