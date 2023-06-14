import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Enzo Velarde', tipoCliente: 'Platino' },
    { id: 2, name: 'Diego Velarde', tipoCliente: 'Oro' },
    { id: 3, name: 'Gabriel Aguayo', tipoCliente: 'Plata' }
  ];

  selectedUser: any; // Variable para almacenar el usuario seleccionado

  showDetails(user: any) {
    this.selectedUser = user;
  }
}
