import { Injectable } from '@angular/core';
import { Cliente } from '@models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";


  constructor() { }

  salvar(cliente: Cliente){
    const storage = this.getStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  /**
   * Obtém os clientes salvos no localStorage
   * @returns Cliente
   */
  getStorage() : Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    // Verifica se existe algum cliente salvo no localStorage
    if(repositorioClientes){
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }
    
    // Caso não exista nenhum cliente salvo, cria um array vazio e salva no localStorage
    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
