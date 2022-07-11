export interface UserDb{
    clientId: string,
      firstName: string,
      lastName: string,
      middleName: string,
      country: string,
      passportId: string
      accessionDate: string,
      clientStatus: string,
      mobilePhone: string,
      passportNumber: string,
      userProfileId: string,
      smsNotification: boolean,
      pushNotification: boolean,
      passwordHashed: string,
      password: string,
      email: string,
      question: string,
      answer: string,
      appRegistrationDate: string,
      emailSubscribtion: boolean,
      rolesId: string
  }

  export interface User {
    countryOfResidence: string|null,
    email?: string|null,
    firstName: string|null,
    lastName: string|null,
    middleName?: string|null,
    mobilePhone: string|null,
    passportNumber: string|null,
    password: string|null,
    securityAnswer: string|null,
    securityQuestion: string|null
  }