import { MainPage } from "../pages/main.page";
import { User } from "../models/user.model";
import { generateUserDto } from "../helpers/user.helper";
import UsersController from "../api/user.requests";

const mainPage = new MainPage()
let api = new UsersController();
let user: User;

before(() => {
  user = generateUserDto()
  api.createUser(user);
});

// after(async()=>{
//   await api.deleteUser(user.mobilePhone);
// })

it("open main page",() => {
  mainPage.visit();
  mainPage.login(user.mobilePhone, user.password);
});