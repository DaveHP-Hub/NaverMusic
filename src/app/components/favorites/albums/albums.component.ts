import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {

  albumspotify: any[] = [];
albumsdeezer: any[] = [];
type = "album";
id = localStorage.getItem('id');

  constructor(private favoriteService: FavoritesService) 
  {
this.favoriteService.getFavoritesByIdUserS(parseInt(this.id), this.type)
.subscribe((sres: any) => {
  this.albumspotify = sres;

})

this.favoriteService.getFavoritesByIdUser(parseInt(this.id), this.type)
.subscribe((dres: any) => {
  this.albumsdeezer = dres;
  
})



  }

  ngOnInit(): void {
  }

}
