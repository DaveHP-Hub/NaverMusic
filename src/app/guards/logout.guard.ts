import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from "src/app/services/register.service";

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

constructor(private usuarioServic: RegisterService){}

 canActivate(): boolean {
    if(this.usuarioServic.autentificado === false){

      return true;
    }
    else{
      return false;
    }
  }
  
}
