import { User } from "./user";

export class GuestUser extends User {
    constructor(name: string, email: string, age: number){
        super(name, email, age);
        this.role = 'Guest';
    }
}