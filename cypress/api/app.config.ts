require('dotenv').config()

export const appConfig = {
    baseUrl: Cypress.env('BASE_URL')
};