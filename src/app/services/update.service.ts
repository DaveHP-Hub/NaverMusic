import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient, private router: Router) { }

  queryUser(query: string, data?: any)
{
const URL =`https://localhost:44395/api/User/${query}`;
const headers = new HttpHeaders().set("Content-Type", "application/json");
return this.http.put(URL, data,{ headers });

}

updateUser(data: any)
{
  return this.queryUser("UpdateUser", data)
  .subscribe((res: any) => {  
     if(res != null){
alert("Actualización exitosa");
this.router.navigate(["/"])
     }
     else
     {
       alert("Ocurrio un error inesperado, intentalo más tarde");
     }
     
  },
  err => {
    alert("Error de conexión con el servidor");
  })
}

}
