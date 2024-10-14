describe('Test Case 3: Manage json result', () => {
  it('passes', () => {
    cy.request('https://api.duckduckgo.com/?q=simpsons&format=json').its('body').should('not.include', 'Icon') //Not able to see Icon in the response.
  })
})
