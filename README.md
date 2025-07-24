# cypress-automation-exercise

## Project overview

- This is a QA automation project with **Cypress** to demonstrate my skills as **QA Engineer.** The application this project is based on is **Automation-Excercise**, a sandbox that emaulates an **E-Commerce.**

- Link to the application: https://www.automationexercise.com/

This repository contains:

- Automated end-to-end tests using **Cypress.**
- Automation test cases for core application workflows.
- Use cases with **positive, negative and edge scenarios.**
- Exploratory testing findings.
- Detailed bug reports with evidence.

## How did I approach this project?

### Scope and out of scope

Due the fact this sandbox emulates an E-Commerce, I focussed in the main features:

- **Signup**

- **Login / Logout**

- **Cart** and

- **Checkout**

This project focuses in automation testing with Cypress, so **the API test cases are out of scope.**

### Approach

While there is no docummentation, I started doing **exploratory testing sessions** to undestand the workflows before writing use cases, and **to find potencial bugs.**

### Tools

- **Cypress**

- **JavaScript:** all the automated test cases are written with Javascript.

- **Git**

- **ChatGPT**

- **Loom:** to document visual proof / evidence. The screenshots links are available to be accessed.


### Environment

- **OS:** Windows 11

-  **Browser:** Chrome Version 137.0.7151.120





---------

## Project Structure

```
CYPRESS-AUTOMATION.EXERCISE/

cypress/   
├── e2e/                          # Automated test suites (organized by feature)
│   ├── login.cy.js
│   ├── purchaseItems.cy.js
│   └── signup.cy.js
├── fixtures/                     # Static test data (currently unused)
│   ├── example.json
│  
├── support/                      # Reusable commands and Cypress config overrides
│   ├── commands.js               # Custom Cypress commands (currently unused)
│   ├── e2e.js                    # Global setup for tests
│ 
├── docs/                          # Documentation files
│   ├── bugs-found.md              # List of bugs found
│   ├── exploratory-notes.md       # Exploratory testing notes   
│   └── use-cases.md               # List of use cases
│
│── .gitignore                     # All untracked files 
│ 
├── README.md                      # Main project overview
├── cypress.config.js              # Cypress settings 
├── package-lock.json              # Package lock file
└── package.json                   # Project config


```
