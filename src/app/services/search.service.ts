import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }


getQuery(queryUrl: string) {
const URL = `https://api.spotify.com/v1/${queryUrl}`;
const headers = new HttpHeaders({
  'Authorization': 'Bearer BQBSQ1VgIlUJDJmd8xKgtYOV4PQVS9lWjRIB8WD8RlvjXfm32RixW-69ccOt87lY1-G_tSWeZEH0vpXAVgU'
});

return this.http.get(URL, { headers });

}


getArtists(query: string) {


   return this.getQuery(`search?q=${ query }&type=artist&limit=20`)
   .pipe(map( data => data['artists'].items));
  }

}
