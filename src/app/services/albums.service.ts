import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router } from '@angular/router';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

queryDeezer(query: string)
{
const URL =`https://localhost:44395/api/deezer/${query}`;
return this.http.get(URL);
}


querySpotify(query: string)
{
  const URL = `https://api.spotify.com/v1/playlists/${query}?limit=8`;
  const headers  = new HttpHeaders({
    'Authorization': 'Bearer myToken'
  });
  return this.http.get(URL, {headers});
}


getTopAlbums()
{
   return this.querySpotify('6OkfgeQopcFhSIlbAbNkmg')
   .pipe(map(data => data["tracks"].items));

}

getAlbumsDeezer()
{
return this.queryDeezer("getAlbums")
.pipe(map(data => data["tracks"].data));
}



}
