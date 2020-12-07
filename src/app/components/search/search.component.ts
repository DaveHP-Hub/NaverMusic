import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor(private searchService: SearchService, private router: Router) { }


artistSearch: any[] =[];
  ngOnInit(): void {
  }

  searchInput(query: string) {
this.searchService.getArtists(query)
.subscribe((data:any) => {
 this.artistSearch = data;
})
  }


   seeArtist(item: any) {
let artistId;
if(item.type === 'artist')
{
artistId = item.id;

}
else{
  artistId = item.artists[0].id;
  
}
this.router.navigate(['/spotify-artist', artistId])
  }

}
