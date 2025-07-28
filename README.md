# cypress-automation-exercise

## Project overview

- This is a QA automation project with **Cypress** to demonstrate my skills as **QA Engineer.** The application this project is based on is **Automation-Excercise**, a sandbox that emaulates an **E-Commerce.**

- Link to the application: https://www.automationexercise.com/
  
- I divided this project in 3 main tasks: 

1. **Explore the application and report any bug / issue finded.**

2. **Write positive, negative and edge use cases.**

3. **Automate the use cases.**
  
- ⚠️Please note that **this project is currently in progress.**

This repository contains:

- Automated end-to-end tests using **Cypress.**
- Automation test cases for core application workflows.
- Use cases with **positive, negative and edge scenarios.**
- Exploratory testing findings.
- Detailed bug reports with evidence.

---------

## How did I approach this project?

**I approached this project by doing this three tasks iteratively, rather than strictly sequentially. This helped me:**

1. Understand the application’s behavior more deeply early on.

2. Identify bugs while writing initial use cases.

3. Begin automation in parallel to validate and improve the test cases.

I went back and forth between tasks to refine each deliverable as I progressed. This iterative approach reflects how I would typically work in a real-world QA workflow — continuously improving documentation, test coverage, and reporting based on findings and feedback loops.

-------

### Scope and out of scope

Due the fact this sandbox emulates an E-Commerce, I focussed in the main features:

- **Signup**

- **Login / Logout**

- **Cart** and

- **Checkout**

This project focuses in automation testing with Cypress, so **the API test cases are out of scope.**

------

### Tools

- **Cypress**

- **JavaScript:** all the automated test cases are written with Javascript.

- **Git**

- **ChatGPT:** to create additional unexpected test scenarios, and as a guide to create specific test cases when I don't know how to do it.

- **Loom:** to document visual proof / evidence. The screenshots links are available to be accessed.

---------

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

-------

## How to run the Test Cases

### Prerequisites

- Make sure you have the following installed:

- Node.js (v16+ recommended)

- npm or yarn
  
- **Before installing Cypress, ensure you have a package.json file in the root of your project.**

### Installation

1. Clone this repository and open it in your code editor:

```
git clone https://github.com/marianaluduena/cypress-automation-exercise

```

2. Install dependencies:
   
```
npm install

```

3. Install Cypress:

 ```
npm install cypress --save-dev

  ```

### Run the Tests

Option 1: Open Cypress Test Runner (GUI)

```
npx cypress open

```

This will launch the Cypress UI where you can select and run individual test files interactively.

Option 2: Run Tests in Headless Mode

```
npx cypress run

```
