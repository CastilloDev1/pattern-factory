import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { UserMemoryRepository } from "../repositories/userMemoryRepository";

const userRepository = new UserMemoryRepository();
const userService = new UserService(userRepository);

export const createUser = async (req: Request, res: Response) =>{
    try {
        const {name, email, age} = req.body;
        const user = await userService.createUser(name, email, age);
        res.status(201).json({message: 'user created succesfully', user});
    } catch (error) {
        res.status(500).json({message:'Failed to created user'});
    }
};

export const getUsers = async (req: Request, res: Response) =>{
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users'});
    }
};

export const updateUser = async (req: Request, res: Response) =>{
    try {
        const id: string = req.query.id as string;
        const updateFields: object = req.body;
        const user = await userService.updateUser(id, updateFields);
        res.status(200).json({message:'user updated succesfully', user});
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users'});
    }
};

export const deleteUser = async (req: Request, res: Response) =>{
    try {
        const id: string = req.query.id as string;
        userService.deleteUser(id);
        res.status(200).json({message:'user deleted succesfully'});
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users'});
    }
}