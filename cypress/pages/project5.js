class Project5 {
getHeading (){
    return cy.get('.is-size-3')
}
getSubHeading() {
    return cy.get('#sub_heading')
}
getCityInfo(){
    return cy.get('.Pagination_pagBodyData__vG6oj > p')
}
getCityImage(){
    return cy.get('.city_image')
}
getParagraph() {
    return cy.get('#content')
}
getNextButton() {
    return cy.get('#next')
}
getPreviousButton() {
    return cy.get('#previous')
}

getHeadingByName (name) {
    switch(name) {
        case "Pagination":
            return this.getHeading()
        case "World City Populations 2022":
            return this.getSubHeading()
    }
}
getButtonByName (name) {
    switch(name) {
        case "Previous":
            return this.getPreviousButton()
        case "Next":
            return this.getNextButton()
    }
}
clickButtonByName (name) {
   return this.getButtonByName(name).click()
}
clickButtonTillEnabled(buttonName) {
    this.getButtonByName(buttonName).then((button) => {
        const clickButtonUntilDisabled = () => {
          if (button.is(':enabled')) {
            button.click();
    
            this.getButtonByName(buttonName).then((button) => {
              if (button.is(':enabled')) {
                clickButtonUntilDisabled();
              }
            })
          }
        }
        clickButtonUntilDisabled();
      });
}

}
module.exports = Project5