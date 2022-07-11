import { JsonRequest } from "./request.form";
import { User } from "../models/user.model";

export default class UsersController {
  createUser(obj: User) {
    return new JsonRequest()
      .url("/api/v1/registration/user-profile/new")
      .method("POST")
      .body(obj)
      .send();
  }

  deleteUser(phone:string){
    const response = new JsonRequest()
      .url("/api/v1/login")
      .method("DELETE")
      .qs({ mobilePhone: phone })
      .send();
    return response;
  }
}
