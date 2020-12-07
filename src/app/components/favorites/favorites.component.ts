import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

favorites: any[] = [];
favoritess_: any[] = [];
uriplay;

  constructor(private router: Router, private favoriteService: FavoritesService, private registerService: RegisterService) 
  {
 
  }

  ngOnInit(): void {
  }
  



  seeArtistDeezer(item: any) {
let artistId;
artistId = item.idGetFav;

this.router.navigate(['/deezer-artist', artistId]);
  }





}
