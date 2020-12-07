import { Component, OnInit } from '@angular/core';
import { VotesService } from '../../services/votes.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
 //GET DAYS 
datadayD: any[] = [];
datadayS: any[] = [];
datadayDAl: any[] = [];
datadaySAl: any[] = [];
datadayDAr: any[] = [];
datadaySAr: any[] = [];

//GET MONTH
dataMonthTD: any[] = [];
dataMonthTS: any[] = [];
dataMonthALD: any[] = [];
dataMonthALS: any[] = [];
dataMonthAD: any[] = [];
dataMonthAS: any[] = [];




typesp = 'spotify';
typede = 'deezer'
track = 'track';
album = 'album';
artist = 'artist';

  constructor(private voteService: VotesService) 
  {
    //DAY VOTES TRACKS
   this.loadTracksDay();

//DAY VOTES ALBUMS
this.loadAlbumDay();

//DAY VOTES ARTISTS
this.loadArtistDay();

//DAY, MONTH AND WEEK ARTISTS, ALBUMS, TRACKS
this.loadTracksM();
this.loadAlbumsM();
this.loadArtistsM();


  }

  ngOnInit(): void {
  }

//LOAD TRACKS DEEZER AND SPOTIFY FOR DAY
loadTracksDay()
{
this.voteService.getVotesDay(this.track, this.typede)
.subscribe((res: any) => {
  this.datadayD = res;
 
})

this.voteService.getVotesDay(this.track, this.typesp)
.subscribe((res: any) => {
  this.datadayS = res;
})
}

loadAlbumDay()
{
this.voteService.getVotesDay(this.album, this.typede)
.subscribe((res: any) => {
  this.datadayDAl = res;
 
})

this.voteService.getVotesDay(this.album, this.typesp)
.subscribe((res: any) => {
  this.datadaySAl = res;
})

}


loadArtistDay()
{
this.voteService.getVotesDay(this.artist, this.typede)
.subscribe((res: any) => {
  this.datadayDAr = res;
 
})

this.voteService.getVotesDay(this.artist, this.typesp)
.subscribe((res: any) => {
  this.datadaySAr = res;
})
}
//LOAD TRACKS DEEZER AND SPOTIFY FOR DAY


//LOAD TRACKS DEEZER AND SPOTIFY FOR MONTH
loadTracksM()
{
this.voteService.getVotesMonth(this.track,this.typede)
.subscribe((res: any) => {
  this.dataMonthTD = res;
})

this.voteService.getVotesMonth(this.track,this.typesp)
.subscribe((res: any) => {
  this.dataMonthTS = res;
})

}

//Load Albums for Month
loadAlbumsM()
{
this.voteService.getVotesMonth(this.album,this.typede)
.subscribe((res: any) => {
  this.dataMonthALD = res;
})

this.voteService.getVotesMonth(this.album,this.typesp)
.subscribe((res: any) => {
  this.dataMonthALS = res;
})

}

loadArtistsM()
{
this.voteService.getVotesMonth(this.artist,this.typede)
.subscribe((res: any) => {
  this.dataMonthAD = res;
})

this.voteService.getVotesMonth(this.artist,this.typesp)
.subscribe((res: any) => {
  this.dataMonthAS = res;
})

}

}

