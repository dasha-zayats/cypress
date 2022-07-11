import { faker } from "@faker-js/faker";
import { UserDb, User } from "../models/user.model";

export function getUserDb(): UserDb{
    const date= new Date();
    return {
        clientId: faker.datatype.uuid(),
        firstName: "Alex",
        lastName: "Alex",
        middleName: "Alex",
        country: "Russia",
        passportId: faker.datatype.uuid(),
        accessionDate: date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2),
        clientStatus: "NOT_ACTIVE",
        mobilePhone: faker.random.numeric(12),
        passportNumber: faker.random.numeric(10),
        userProfileId: faker.datatype.uuid(),
        smsNotification: true,
        pushNotification: true,
        passwordHashed: "$2a$10$f22cszTbPJjnZXWE5QUD1uPdRdb4bwOeA74MJ6kbDOQQWZbsCM3E6",
        password: "!Rf@12345",
        email: faker.internet.email(),
        question: "party",
        answer: "birthday",
        appRegistrationDate: date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2),
        emailSubscribtion: true,
        rolesId: '0356f29a-dd57-4e0f-8168-51f73aeb5d74'
    };
}

export function generateUserDto(): User {
    return {
        countryOfResidence: "Russia",
        email: faker.word.noun(7)+'@gmail.com',
        firstName: "John",
        lastName: "John",
        middleName: "John",
        mobilePhone: faker.random.numeric(12),
        passportNumber: faker.random.numeric(10),
        password: faker.random.numeric(3) + "!Rf@12",
        securityAnswer: "sunday",
        securityQuestion: "summer"
    };
}