import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

favoriteid: string;

  constructor(private http: HttpClient, private router: Router) 
  {
    
  }

query(query: string)
{
const URL =`https://localhost:44395/api/Favorite/${query}`;
return this.http.get(URL);
}

getFavoritesByIdUser(id: number, _type: string)
{
 
 return this.query(`GetFavoritesById?id=${id}&_type=${_type}`);
}

getFavoritesByIdUserS(id: number, type_: string)
{
 return this.query(`GetFavoritesByIdS?id=${id}&type_=${type_}`);
}





}
