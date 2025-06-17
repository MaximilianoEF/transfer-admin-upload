import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  usuario = { username: '', password: '' };

  guardar() {
    console.log('Guardado', this.usuario);
  }
}

