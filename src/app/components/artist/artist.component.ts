import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PageArtistService } from '../../services/page-artist.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

artistGet: any = {};
topTracks: any[] = []

  constructor(private router: ActivatedRoute, private artistService: PageArtistService, public registerS: RegisterService) { 
    this.router.params.subscribe( params => {
     this.getArtist(params['id']);
     this.getTopTracks(params['id']);
    })

  }



  ngOnInit(): void {
  }


//SPOTIFY API
  getArtist(id: string) {
this.artistService.getArtist(id)
.subscribe( data => {
this.artistGet = data;

})
  }


getTopTracks(id: string)
{
  this.artistService.getTopTracks(id)
  .subscribe( topTracks => {
   this.topTracks = topTracks;
   
  })
}





}
