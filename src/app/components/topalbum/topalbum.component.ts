import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder} from '@angular/forms'; 
import {DatePipe} from '@angular/common';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-topalbum',
  templateUrl: './topalbum.component.html',
  styleUrls: ['./topalbum.component.css']
})
export class TopalbumComponent implements OnInit {

topAlbums: any[] = [];
topAlbumsD: any[] = [];
date = new Date();

latestpipe;
dato = localStorage.getItem('id');
typefav: string;
idfav_: string;
iduser_: number;
namefav_: string;
picture_: string;
namesong_:string;
nameapi: string;
uri: string;
id: number;

  constructor(private albumService: AlbumsService, private router: Router, private _fb: FormBuilder, public datepipe: DatePipe, private serviceHome: HomeService)
  {
  this.albumService.getTopAlbums()
  .subscribe((res: any) => {
    this.topAlbums = res;
  })

this.albumService.getAlbumsDeezer()
.subscribe((res: any) => {
  this.topAlbumsD = res;
})

  }

  ngOnInit(): void {
  }


favPost(typefav: string, idfav: string, namefav: string, picture: string,namesong: string, nameapp: string, _uri: string)
{
this.typefav =   typefav;
this.idfav_ = idfav;
this.namefav_ = namefav;
this.picture_ = picture;
this.namesong_ = namesong;
this.nameapi = nameapp;
this.uri = _uri;


if(this.dato === null)
{
  alert("No puedes agregar a favoritos, inicia sesión para poder hacerlo");
}
else
{
  this.id = parseInt(this.dato);
  this.iduser_ = this.id;
  
  var data = {
    typeFav: this.typefav,
    idGetFav: this.idfav_ ,
    idUser: this.iduser_,
    songFav: this.namesong_,
    pictureFav: this.picture_,
    nameFav: this.namefav_ ,
    apiname: this.nameapi,
    uri: this.uri
}; 

this.serviceHome.favoritePost(data);
}


}

votePosts(typeVote_: string, idGetVote_: string, nameVote_:string, pictureVote_: string, api_: string)
{
  

  if(this.dato === null)
  {
    alert("No puedes votar, inicia sesión para poder hacerlo");
  }
  else
  {

this.latestpipe = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');  

    var data_ = {
      idUser: parseInt(this.dato),
      typeVote: typeVote_,
      idGetVote: idGetVote_,
      nameVote: nameVote_,
      pictureVote: pictureVote_,
      dateVote: this.latestpipe.toString(),
      apiname: api_
    };

this.serviceHome.votePost(data_);
  }
}


}
