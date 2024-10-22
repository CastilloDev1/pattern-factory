import { User } from "../models/user";
import { UserRepository } from "./userRepository";

export class UserMemoryRepository implements UserRepository {

    private users: User[] = [];

    createUser(newUser: User): Promise<User> {
        this.users.push(newUser);
        return Promise.resolve(newUser);
    }

    getAllUsers(): Promise<any> {
        return Promise.resolve(this.users);
    }

    updateUser(id: string, updateFields: object): Promise<User> {
        const index = this.users.findIndex(user => user.id === id);
        const existingUser = this.users[index];
        return Promise.resolve(
            this.users[index] = { ...existingUser, ...updateFields } as User
        );
    }

    deleteUser(id: string): void {
        this.users = this.users.filter(user => user.id !== id);
    }

}