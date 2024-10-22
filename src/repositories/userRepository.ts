import { User } from "../models/user";
import { updateUser } from '../controllers/userController';

export interface UserRepository{
    createUser(newUser: User): Promise<User>;
    getAllUsers(): Promise<User[]>;
    updateUser(id: string, updateFields: object): Promise<User>;
    deleteUser(id: string): void;
}