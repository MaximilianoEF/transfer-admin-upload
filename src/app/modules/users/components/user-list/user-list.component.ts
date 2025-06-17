import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  columnas = ['username', 'acciones'];
  usuarios = [
    { username: 'institucion1' },
    { username: 'admin' }
  ];

  ngOnInit(): void {
    // Acá va el fetch real a tu microservicio más adelante
  }

  crearUsuario() {
    console.log('Crear usuario');
  }

  editarUsuario(user: any) {
    console.log('Editar', user);
  }

  eliminarUsuario(user: any) {
    console.log('Eliminar', user);
  }
}
