import { v4 as uuidv4 } from 'uuid';

export class Cliente {
    id?: string;
    nome?: string;
    cpf?: string;
    dataNascimento?: string;
    email?: string;

    static newCliente(): Cliente {
        const cliente = new Cliente();
        cliente.id = uuidv4();
        return cliente;
    }
}
