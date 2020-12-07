import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 @Output() fireIsLoggedIn: EventEmitter<string> = new EventEmitter<string>(); 

public username: string;
public idUser: string;
autentificado = false; //Guard
dato = localStorage.getItem('id');
userlocal: string;
data_: any;


  constructor(private http: HttpClient, private router: Router) { }




queryUser(query: string, data?: any)
{
const URL =`https://localhost:44395/api/User/${query}`;
const headers = new HttpHeaders().set("Content-Type", "application/json");
return this.http.post(URL, data,{ headers });

}

SaveUser(empdata) {  
   
 
   const data = JSON.stringify(empdata);
   return this.queryUser("AddUser", data)
   .subscribe((res: any) => {
     if(res != null)
     {
       alert("Registro exitoso!");
       this.router.navigate(["/login"]);
     }
     else
     {
       alert("Oops! ha ocurrido un error, intentalo más tarde");
     }
   },
   err => {
     console.log("Error");
   }
   )
}



queryUserGet(query: string)
{
const URL =`https://localhost:44395/api/User/${query}`;
return this.http.get(URL);

}

loginUser(empdata) {  
  
    return this.queryUserGet(`FindUser?email=${empdata.email}&pwd=${empdata.pwd}`)
            .subscribe((res: any) => {
              if(res != null)
              {
                alert("Bienvenido a Naver Music");
                //this.router.navigate(["/"]).then(() => { window.location.reload() });
                this.router.navigate(["/"]);
                this.autentificado = true;
                this.username = res.username;
                this.idUser = res.idUser;
                localStorage.setItem("id", this.idUser);
                localStorage.setItem("username", this.username);  
                this.getusername(this.username);
                this.getData(res);
              } 

             else
{
  alert("Error: email o contraseña invalidos");
  this.router.navigate(['/login']);
}
            },
             err => {
     alert("Error");
   });
   
}


logOut()
{
alert("Cerrando sesión");
this.router.navigate(["/"]);
this.userlocal = "Invited";
localStorage.clear();

}


getusername(username: string)
{
this.userlocal = username;
}

getData(dta: any)
{
this.data_ = dta;
}



}
