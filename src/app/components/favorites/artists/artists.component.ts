import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

favorites: any[] = [];
favoritess_: any[] = [];
uriplay;
dato = localStorage.getItem('id');
type = "artist";

  constructor(private favoriteService: FavoritesService, private router: Router) 
  {
     this.favoriteService.getFavoritesByIdUser(parseInt(this.dato), this.type)
    .subscribe((res: any) => {
      this.favorites = res;
    })

    this.favoriteService.getFavoritesByIdUserS(parseInt(this.dato),this.type)
    .subscribe((res: any) => {
      this.favoritess_ = res;
    })
   }

  ngOnInit(): void {
  }

seeArtist(item: any) {
let artistId;
artistId = item.idGetFav;
this.router.navigate(['/spotify-artist', artistId]);
}


  seeArtistDeezer(item: any) {
let artistId;
artistId = item.idGetFav;

this.router.navigate(['/deezer-artist', artistId]);
  }

}
