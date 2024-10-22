import { AdminUser } from "../models/adminUser";
import { GuestUser } from "../models/guestUser";
import { User } from "../models/user";

export default class UserFactory {

    private static userMap: {[key: string]: typeof User} = {
        admin: AdminUser,
        guest: GuestUser,
        default: User
    }
    
    static createUser(type: string, name: string, email: string, age: number): User {
        const UserClass = this.userMap[type] || this.userMap['default'];
        return new UserClass(name, email, age);
    }
}