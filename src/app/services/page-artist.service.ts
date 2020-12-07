import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PageArtistService {

  constructor(private http: HttpClient) { }


//SPOTIFY API
getQuery(queryUrl: string) {
const URL = `https://api.spotify.com/v1/${queryUrl}`;
const headers = new HttpHeaders({
  'Authorization': 'Bearer BQBSQ1VgIlUJDJmd8xKgtYOV4PQVS9lWjRIB8WD8RlvjXfm32RixW-69ccOt87lY1-G_tSWeZEH0vpXAVgU'
});

return this.http.get(URL, { headers });

}


 getArtist(id: string) {

   return this.getQuery(`artists/${id}`);
  
  }



   getTopTracks(id: string) {

   return this.getQuery(`artists/${id}/top-tracks?country=us`)
   .pipe(map(data => data['tracks']));
  
  }
//END SPOTIFY API

/********************************************************************************************************************/
/********************************************************************************************************************/
/********************************************************************************************************************/
absoluteUrl(query: string) {
const URLDe = `https://localhost:44395/api/deezer/${query}`;

return this.http.get(URLDe);

}

getDeezerArtist(id_: string)
{
return this.absoluteUrl(`getArtistId?id_=${id_}`);

}



   getTopDeezer(id: string) {

   return this.absoluteUrl(`getArtistTop?id_=${id}`)
   .pipe(map(data => data['data']));
  
  }




}
