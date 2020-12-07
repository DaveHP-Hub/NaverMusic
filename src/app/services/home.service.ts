import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeService {



  constructor(private http: HttpClient) { }




//SPOTIFY API
getQuery(queryUrl: string) {
const URL = `https://api.spotify.com/v1/playlists/${queryUrl}?limit=8`;
const headers = new HttpHeaders({
  'Authorization': 'Bearer myToken'
});

return this.http.get(URL, { headers });

}

 getNewReleases() {

   return this.getQuery('3WxTnGherpf7t4F0VzchD4')
    .pipe(map( data => data['tracks'].items));
  
  }



//DEEZER API
getQueryDeezer(queryUrl: string){
const URL = `https://localhost:44395/api/deezer/${queryUrl}`;


return this.http.get(URL);
}

getChartsDeezer() {
  return this.getQueryDeezer("getCharts");
  }


queryAPIPost(query: string, data: any)
{
const URL =`https://localhost:44395/api/${query}`;
const headers = new HttpHeaders().set("Content-Type", "application/json");
return this.http.post(URL, data, {headers});

}

favoritePost(data)
{
  const data_ = JSON.stringify(data);
return this.queryAPIPost("Favorite/AddFavorite", data_)
.subscribe((res: any) => {
  if(res != null){
alert("Favorito guardado con exito");
  }
  else
  {
    alert("Oops! ha ocurrido un error, intentalo más tarde");
  }
},
err => {
  alert("Error");

})
}

votePost(data)
{
  const data_ = JSON.stringify(data);
return this.queryAPIPost("Vote/AddVote", data_)
.subscribe((res: any) => {
  if(res != null){
alert("Voto exitoso");
  }
  else
  {
    alert("Oops! ha ocurrido un error, intentalo más tarde");
  }
},
err => {
  alert("Error");
 
})
}






}
