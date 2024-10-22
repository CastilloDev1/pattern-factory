import { User } from "./user";

export class AdminUser extends User {
    constructor(name: string, email: string, age: number){
        super(name, email, age);
        this.role = 'Admin';
    }
}