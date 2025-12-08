describe('Login Flow', () => {
  it('logs in with prompt', () => {
    cy.prompt([
      'visit https://rahulshettyacademy.com/AutomationPractice/',
      'click radio button with name as Radio 1',
      'Select value Option1 in the select list box ',
      'Click Home button',
      'verify it navigates to https://rahulshettyacademy.com/'
    ])
  })
})
