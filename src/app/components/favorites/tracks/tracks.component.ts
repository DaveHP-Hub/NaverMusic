import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

id = localStorage.getItem('id');
tracksspotify: any[] = [];
tracksdeezer: any[] = [];
type = "track";

dato = localStorage.getItem('id');
  constructor(private favoriteService: FavoritesService) 
  {
this.favoriteService.getFavoritesByIdUserS(parseInt(this.dato), this.type)
.subscribe((res_: any) => {
  this.tracksspotify = res_;
  
})

this.favoriteService.getFavoritesByIdUser(parseInt(this.dato), this.type)
.subscribe((data: any) => {
this.tracksdeezer = data;

})
  }

  ngOnInit(): void {
  }

}
