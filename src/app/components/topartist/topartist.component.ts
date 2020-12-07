import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder} from '@angular/forms'; 
import {DatePipe} from '@angular/common';
import { HomeService } from '../../services/home.service';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-topartist',
  templateUrl: './topartist.component.html',
  styleUrls: ['./topartist.component.css']
})
export class TopartistComponent implements OnInit {
topArtists: any[] = [];
topArtistDeezer: any[] = [];
date = new Date();
photo: any;
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
photores: string;
photovote: string;


res: any[] = [];

  constructor(private artistService: ArtistsService,  private router: Router, private _fb: FormBuilder, public datepipe: DatePipe, private serviceHome: HomeService) 
  {
    this.artistService.getTopArtists()
    .subscribe((res: any) => {
      this.topArtists = res;
      
    })

this.artistService.getTopArtistDeezer().subscribe((res: any) => {

  this.topArtistDeezer = res;
  console.log(this.topArtistDeezer);
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

 this.artistService.getPhotoArtist(this.picture_)
  .subscribe((res: any) => {
    this.photores = res.images[0].url;
     this.id = parseInt(this.dato);
  this.iduser_ = this.id;
  
  var data = {
    typeFav: this.typefav,
    idGetFav: this.idfav_ ,
    idUser: this.iduser_,
    songFav: this.namesong_,
    pictureFav: this.photores,
    nameFav: this.namefav_ ,
    apiname: this.nameapi,
    uri: this.uri
}; 


this.serviceHome.favoritePost(data);
  
  })
 
 


}

}

votePosts(typeVote_: string, idGetVote_: string, nameVote_: string, pictureVote_: string, api_: string)
{
  
  if(this.dato === null)
  {
    alert("No puedes votar, inicia sesión para poder hacerlo");
  }
  else
  {
    this.artistService.getPhotoArtist(pictureVote_)
  .subscribe((res: any) => {
    this.photovote = res.images[0].url;
    this.latestpipe = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');  

    var data_ = {
      idUser: parseInt(this.dato),
      typeVote: typeVote_,
      idGetVote: idGetVote_,
      nameVote: nameVote_,
      pictureVote: this.photovote,
      dateVote: this.latestpipe.toString(),
      apiname: api_
    };

    this.serviceHome.votePost(data_);
    
    })

  }
}





favPostD(typefav: string, idfav: string, namefav: string, picture: string,namesong: string, nameapp: string, _uri: string)
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

 this.artistService.getPhotoArtistDeezer(this.picture_)
  .subscribe((res: any) => {
    this.photores = res.picture_big;
     this.id = parseInt(this.dato);
  this.iduser_ = this.id;
  
  var data = {
    typeFav: this.typefav,
    idGetFav: this.idfav_ ,
    idUser: this.iduser_,
    songFav: this.namesong_,
    pictureFav: this.photores,
    nameFav: this.namefav_ ,
    apiname: this.nameapi,
    uri: this.uri
}; 

this.serviceHome.favoritePost(data);
  
  })
 
 


}

}

votePostD(typeVote_: string, idGetVote_: string, nameVote_: string, pictureVote_: string, api_: string)
{
  
  if(this.dato === null)
  {
    alert("No puedes votar, inicia sesión para poder hacerlo");
  }
  else
  {
    this.artistService.getPhotoArtistDeezer(pictureVote_)
  .subscribe((res: any) => {
    this.photovote = res.picture_big;
    this.latestpipe = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');  

    var data_ = {
      idUser: parseInt(this.dato),
      typeVote: typeVote_,
      idGetVote: idGetVote_,
      nameVote: nameVote_,
      pictureVote: this.photovote,
      dateVote: this.latestpipe.toString(),
      apiname: api_
    };

this.serviceHome.votePost(data_);
    }) 
    }
}






}
