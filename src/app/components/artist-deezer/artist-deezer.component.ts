import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PageArtistService } from '../../services/page-artist.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-artist-deezer',
  templateUrl: './artist-deezer.component.html',
  styleUrls: ['./artist-deezer.component.css']
})
export class ArtistDeezerComponent implements OnInit {

artistGetDeezer: any = {};
topTracksDeezer: any[] = []
urldeezer: string;
  constructor(private router: ActivatedRoute, private artistService: PageArtistService, public registerS: RegisterService) { 


      this.router.params.subscribe( params => {
     this.getDeezerA(params['id']);
     this.getTopDeezer(params['id']);
     

    })

  }

  ngOnInit(): void {
  }


  getDeezerA(id_: string)
{
  this.artistService.getDeezerArtist(id_)
    .subscribe(data =>{
      this.artistGetDeezer = data;
      
    })
}

getTopDeezer(id_: string)
{
this.artistService.getTopDeezer(id_)
.subscribe((data: any) => {
this.topTracksDeezer = data;

 
})

}

}
