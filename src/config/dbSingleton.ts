import { UserMemoryRepository } from "../repositories/userMemoryRepository";

export class Database {
    private static instance: UserMemoryRepository;

    private constructor(){};

    public static async getInstance(): Promise<UserMemoryRepository> {
        if(!Database.instance){
            Database.instance = new UserMemoryRepository();
            console.log('Conectado a la base de datos de memoria');
        }
        return Database.instance;
    }
}