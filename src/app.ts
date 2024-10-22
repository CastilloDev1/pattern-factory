import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "./controllers/userController";
const app = express();
app.use(express.json());

app.get('/user', getUsers);
app.post('/user', createUser);
app.patch('/user', updateUser);
app.delete('/user', deleteUser);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});