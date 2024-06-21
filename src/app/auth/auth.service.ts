import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario : String, password : String) {
    sessionStorage.setItem("isLogged", 'true');
  }

  logout() {
    sessionStorage.clear();
  }

  isLogged() : Boolean {
    return !!sessionStorage.getItem("isLogged");
  }
}
