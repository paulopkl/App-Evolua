import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {  }

  canActivate(): Promise<boolean> { // canActivate retorna uma promise booleana
      return new Promise(resolve => {
        this.authService.getAuth().onAuthStateChanged(user => { // Pega o método
          if(!user){ // Se não existir é pq é nulo ou seja o usuário não está logado
            this.router.navigate(['login']);
          }

            resolve(user ? true : false); // Retorno da Promisse
            // Se existir usuario retorna true, se não, retorna false
        });
      });
  }

}
