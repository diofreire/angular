import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Component({
  selector: 'app-root',
  imports: [ListaComprasComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';

  adicionarItem(item: string) {
    console.log('Item adicionado:', item);
  }

  
}
