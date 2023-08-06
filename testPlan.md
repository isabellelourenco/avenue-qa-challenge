# Avenue Test Plan

Based on the exploratory tests executed in the Avenue Web Application, below is a list of test cases to ensure that the most critical functionalities works from the user's perspective. The test plan was written following the risk-based testing approach. 

> Note: This test plan only tests the app end-to-end, ensuring that both the frontend and API works as expected when connected with each other.

## Login

Following the risk-based testing approach, the user can't access the application if the login isn't working.

### Pre-condition

- Access the url: https://pit.avenue.us/login
- Already have a account in the system.

### Valid Test Cases

#### TC1 - Login with Correct Credentials:

Fill in the required fields with valid credentials.
Verify if the user is redirected correctly to the home page.

### Invalid Test Cases

#### TC2 - Login with Invalid Credentials:

Fill in the required fields with invalid credentials.
Verify if an error message is displayed.

## Create Account 

If the user can't create a new account the software cannot be used by new users and the company can lose customers, money and credibility.

### Pre-condition

- Access the url: https://pit.avenue.us/register/invitation?utm_source=header_create_account

### Valid Test Cases

#### TC1 - Create Account filling only the required fields:

Fill in all required fields in the create account form.
Verify if the registration is successfully completed and the account is created.

#### TC2 - Create Account filling all the fields:

Fill in all the fields in the create account form.
Verify if the registration is successfully completed and the account is created.

### Invalid Test Cases

#### TC1 - Create Account with Empty Required Fields:

Leave one or more mandatory fields blank in the registration form for every step.
Verify if the system displays appropriate error messages for the empty fields and does not allow registration until all mandatory fields are filled.

#### TC2 - Upload invalid files:

Fill in all the required fields in the registration form for every step, and upload invalid files to the document and residence permit.
Verify if the system displays appropriate error messages and does not allow registration until all mandatory fields are filled correctly.

## Balance

Critical Functionality, essential for buying and selling stocks and currencies.  

### Pre-condition

- Already have a account in the system.

### Valid Test Cases

#### TC1 - Balance Transfer with success:

Transfer a specific amount to another Avenue account.
Check if the balance transfer is correctly executed and reflects in the involved accounts.

### Invalid Test Cases

#### TC2 - Invalid transfer with Insufficient Balance:

Attempt a transfer with an amount greater than the sender's balance.
Check if that the transfer is not allowed, and an error message is displayed.

## Exchange

Critical Functionality, user should be able to access the exchange to use the functionality to buy or sell real or dollar coins.

### Pre-condition

- Already have a account in the system.

### Valid Test Cases

#### TC1 - Dollar Balance Conversion:

The user has a balance in BRL, and select the option to convert their balance to USD.
The system performs the conversion correctly according to the current exchange rate.
Verify that the USD balance is updated correctly in the user's account.

#### TC2 - Real Balance Conversion:

The user has a balance in USD, and select the option to convert their balance to BRL.
The system performs the conversion correctly according to the current exchange rate.
Verify that the BRL balance is updated correctly in the user's account.

#### TC3 - Updated Exchange Rate:

The user performs a balance conversion and system gets the current exchange rate.
Verify that the conversion uses the most recent available exchange rate.

### Invalid Test Cases

#### TC1 - Conversion with Insufficient Balance:

The user has an insufficient balance in BRL to perform an conversion to USD.
They attempt to convert an amount larger than the available balance.
Verify that the system displays an error message indicating that the balance is insufficient for the conversion.

#### TC2 - Conversion with Insufficient Exchange Limit: 

The user has a balance in BRL in their account, and select a option to convert the exchange to USD exceeding the exchange limit. 
Verify that the system displays an error message indicating that the value exceeds the exchange limit.



