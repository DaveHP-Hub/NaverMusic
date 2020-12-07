import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

public photourl: string;
clonep: string;
  constructor(private http: HttpClient) 
  {
  
  }

queryDeezer(query: string)
{
const URL = `https://localhost:44395/api/deezer/${query}`;
return this.http.get(URL);

}


getArtistSpotify(query: string)
{
  const URL = `https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer myToken'
  });
  return this.http.get(URL, {headers});
}


getTopArtists()
{

  return this.getArtistSpotify("playlists/37i9dQZF1DWXgY89J4Sjdb?limit=8")
  .pipe(map(data => data["tracks"].items));
}


getPhotoArtist(queryphoto: string)
{
  
return this.getArtistSpotify(`artists/${queryphoto}`);

  
}


getTopArtistDeezer()
{
return this.queryDeezer("getAlbums")
.pipe(map(data =>  data["tracks"].data));
}

getPhotoArtistDeezer(query: string)
{
  return this.queryDeezer(`getArtistId?id_=${query}`);
}



}
