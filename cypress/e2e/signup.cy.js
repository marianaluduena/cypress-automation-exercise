
describe('Happy path Sign up', () => {

  beforeEach(() => {

    // Step 1: Visit the main URL
    cy.visit('https://www.automationexercise.com/')

    // Step 2: Click the Signup / Login link
    cy.get('a[href= "/login"]').click();

    // Confirm the user is on the Login page
    cy.url().should('include', '/login');
  })

  it("Create new user", () => {

    // Step 1: Enter the name
    cy.get('input[name= name]').should('be.visible').type('Ana');

    // Step 2: Enter the email
    // There are two forms (signup and login), an the email element repeats in both of them
    cy.get('form[action = "/signup"]').should('be.visible').type('ana@fake.com');

    // Step 3: Click the Signup button

    cy.get('button').contains("Signup").click();

    // Step 4: Confirm the user is redirected to the Signup page

    cy.url().should('include', '/signup');

    // Step 5: Fill the form

    cy.get('#id_gender2').check();
    cy.get('#password').type("Ana123");
    cy.get('#days').select('21');
    cy.get('#months').select('June');
    cy.get('#years').select('1991');

    cy.get('#newsletter').check();

    cy.get('#first_name').type('Elsa');
    cy.get('#last_name').type('Von Arendelle');
    cy.get('#company').type('Disney');
    cy.get('#address1').type('Castle');
    cy.get('#address1').type('Castle');
    cy.get('#country').select('Canada');
    cy.get('#state').type('IDK');
    cy.get('#city').type('Vancouver');
    cy.get('#zipcode').type('123');
    cy.get('#mobile_number').type('123123');

    // Step 6: Click Create Account button

    cy.get('button').contains('Create Account').click();

    // Step 7: Assert that the account has been successfully created

    cy.get('h2.title.text-center').should('be.visible').and('contain', 'Account Created!');
    cy.get('p').should('be.visible').and('contain', 'Congratulations! Your new account has been successfully created!');
    cy.get('p').should('be.visible').and('contain', 'You can now take advantage of member privileges to enhance your online shopping experience with us.');

    // Step 8: Click the Continue button

    cy.get('a.btn.btn-primary').click();

    // Step 9: Confirm the user is redirected to the Home page

    cy.url().should('include', 'https://www.automationexercise.com');
  })

})