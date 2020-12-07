import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-playdeezer',
  templateUrl: './playdeezer.component.html',
  styleUrls: ['./playdeezer.component.css']
})
export class PlaydeezerComponent implements OnInit {
idsong;
  constructor(private _fService: FavoritesService) 
  {
 this.idsong = this._fService.favoriteid;
 console.log(this.idsong);
 console.log(this._fService.favoriteid);
  }

  ngOnInit(): void {
  }

}
