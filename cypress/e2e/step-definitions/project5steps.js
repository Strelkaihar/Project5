const { When,Then,Given } = require("@badeball/cypress-cucumber-preprocessor")
const Project5 = require("../../pages/project5")

const project5 = new Project5 ()

Given(/^the user is on "([^"]*)"$/, (URL) => {
	cy.visit(URL)
})

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
    project5.getHeadingByName(heading).should('have.text', heading)
})

Then(/^the user should see the "([^"]*)" paragraph$/, (paragraph) => {
    project5.getParagraph().should('have.text', paragraph)
})


Then(/^the user should see the "([^"]*)" button is disabled$/, (buttonName) => {
    project5.getButtonByName(buttonName).should('be.disabled')
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (buttonName) => {
    project5.getButtonByName(buttonName).should('be.enabled')
})


When(/^the user clicks on the "([^"]*)" button$/, (buttonName) => {
    project5.clickButtonByName(buttonName)
})

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (buttonName) => {
    project5.clickButtonTillEnabled(buttonName)
})

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (cityName, dataTable) => {
    project5.getCityImage().should('have.attr', 'alt', cityName)

	const arr = dataTable.rawTable.flat()
	project5.getCityInfo().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})


