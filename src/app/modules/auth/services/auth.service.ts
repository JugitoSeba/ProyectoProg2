import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Referenciar la autentificacion de firebase
  constructor(public auth: AngularFireAuth) {}

  registrar(nombre: string, contraseña: string){
    //Retorna nueva informacion de registro
    return this.auth.createUserWithEmailAndPassword(nombre,contraseña);
  }
}
