# Test Scenarios
 
## SignIn Section
 
### Tigger:
 
- User fills in Name + Email on the “New User Signup!” section , then clicks “Signup

### Positive Scenarios

**UC-001: Successful user registration**

#### Description:

- Allows a new user to create an account by filling only required form fields through the SignIn form.

#### Preconditions:

- None

#### Steps:

1- Fill all required fields (name, email, password, first name, last name, address, country, state, city, zipcode and mobile number).
2- Click the Create Account button.
3- Click the Continue button.
 
#### Expected result:

- The user creates their account successfully.
- The user now has an active login session.

**UC-002: Successful user registration with all checkbox and radio buttons marked**

#### Description:

- Allows a new user to create an account by filling all the form fields through the SignIn form.

#### Preconditions:

- None


#### Steps:

1- Fill all fields.
2- Asign a Title.
3- Check all checkbox.
4- Click the Continue button.

#### Expected result:

- The user creates their account successfully.
- The user now has an active login session.
  

### Negative Scenarios

**UC-0003: Duplicate email**

#### Description:

- Ensures the system prevents sign in when duplicate emails are provided.
  
#### Preconditions:

- At least one previous email adress exists.

#### Steps:

1. Fill all required fields.
2- Click the Create Account button.
3- Click the Continue button.
 
#### Expected result:

- An error message indicates the email already exists.
- The user remains on the sign in screen.
