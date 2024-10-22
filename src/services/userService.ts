import UserFactory from '../factories/userFactory';
import { User } from "../models/user";
import { UserRepository } from "../repositories/userRepository";


export class UserService {
    constructor(private userRepository: UserRepository) {}

    createUser(type: string, name: string, email: string, age: number): Promise<User>{
        const user: User = UserFactory.createUser(type, name, email, age);
        return this.userRepository.createUser(user);
    }

    getAllUsers(): Promise<User[]> {
        return this.userRepository.getAllUsers();
    }

    updateUser(id: string, updateFields: Partial<User>): Promise<User>{
        return this.userRepository.updateUser(id, updateFields);
    }

    deleteUser(id: string): void {
        this.userRepository.deleteUser(id);
    }
}