# Amex Customer Login

This is a simple server that enables Layer Connect customer login by generating a JWE token and redirecting to customer console.

## Configuration

Make sure the following environmental variables are set:
- `CUSTOMER_CONSOLE_NAME` Customer console name displayed on the login page
- `CUSTOMER_CONSOLE_URL` Customer console URL for redirect after successful login

## Install dependencies

    yarn

## Start the Server

    yarn start
