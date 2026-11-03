import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '@services/cliente.service';
import { Cliente } from '@models/cliente';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  listaClientes: Cliente[] = [];
  colunasTable: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'email'];
  nomeBusca: string = '';

  constructor(private clienteService: ClienteService) {

  }

  /**
   * Ao entrar na tela de consulta, busca todos os clientes salvos no localStorage e exibe na tela
   */
  ngOnInit() {
    this.listaClientes = this.clienteService.pesquisarClientes('');
  }

  pesquisarClientes() {
    this.listaClientes = this.clienteService.pesquisarClientes(this.nomeBusca);
  }

}
