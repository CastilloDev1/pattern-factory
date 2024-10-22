export class User{
    public id?: string;
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number){
        this.id = this.generateId();
        this.name = name;
        this.email = email;
        this.age = age;
    }

    private generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }
}