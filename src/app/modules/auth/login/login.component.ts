import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuarios: Usuario ={
    uid: '',
    nombre: '',
    rol:'',
    email: '',
    contrasena: ''
  }

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
    ){}
  
  async Iniciar(){
    const credenciales={
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };


    const res = await this.servicioAuth.IniciarSesion(credenciales.email,credenciales.contrasena)
    //METODO THEN => CUANDO FUNCIONA CORRECTAMENTE
    .then(res =>{
      alert("Ha accedido con exito :)")
      console.log(credenciales.email);

      this.router.navigate(['/inicio']);
    })
  }

  //llamamos funciòn para CERRAR SESION
    async salir(){
      const res = await this.servicioAuth.CerrarSesion()
      .then(res =>{
        alert("Ha cerrado sesion con exito."),
        console.log(res);

        this.router.navigate(["/inicio"])
      })
    }
  }

// {}[]