//your JS code here. If required.
cy.get('.signup').click();
cy.url().should('include', '/reg/');
