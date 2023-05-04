
describe('About MoneyCorp',() =>{
    beforeEach(() => {
        cy.visit("https://www.moneycorp.com/en-gb/")
    })
it('Payment for Internation currency',() =>{
cy.viewport(1400,720)


//click on the language item and select USA-English
cy.get('#language-dropdown-flag > span > img').click
cy.wait(4000)
cy.get('.country').contains('USA').click

//Enter "internationpayments" in tech search field and Navigate to search page and verify teh text"
const search =('body > section > header > div > div > div.u-flex.u-flex-align-center.u-flex-justify-end > div form')
const magnify =('body > section > header > div >div > div.u-flex.u-flex-align-center.u-flex-justify-end > div >form > [type="submit"]')
cy.get(search).should('be.visible').type('international payments')
cy.get(magnify).click()
cy.wait(4000)
cy.get('.chosen-select').should('have.text','')
//verify landing page url
cy.wait(4000)
cy.url().should('include','/en-gb/')
})
})
