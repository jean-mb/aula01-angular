import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  roteador = inject(Router);
  usuario: Usuario = new Usuario()
  login(){
    if(this.usuario.login ==="admin" && this.usuario.senha === "admin"){
      this.roteador.navigate(['/app'])
    }else{
      alert("Login incorreto!")
    }
  }
}
