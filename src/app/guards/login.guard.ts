import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from "src/app/services/register.service";
import { Router } from '@angular/router' 
 
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
constructor(private usuarioService: RegisterService, private router: Router){}


  canActivate(): boolean {
    if(this.usuarioService.autentificado === true){
      return true;
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
  }

}