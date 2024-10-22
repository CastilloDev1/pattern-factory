import { User } from "../models/user";

export default class UserFactory {
    static createUser(name: string, email: string, age: number): User {
        return new User(name, email, age);
    }
}