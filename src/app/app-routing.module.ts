import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistDeezerComponent } from './components/artist-deezer/artist-deezer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NewreleasesComponent } from './components/newreleases/newreleases.component';
import { LoginGuard } from "./guards/login.guard";
import { LogoutGuard } from "./guards/logout.guard";
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { TopartistComponent } from './components/topartist/topartist.component';
import { TopalbumComponent } from './components/topalbum/topalbum.component';
import { ArtistsComponent } from './components/favorites/artists/artists.component';
import { AlbumsComponent } from './components/favorites/albums/albums.component';
import { TracksComponent } from './components/favorites/tracks/tracks.component';
import { RankingsComponent } from './components/rankings/rankings.component';

const routes: Routes = [
   {path: '', component: HomeComponent },
   {path: 'contact', component: ContactComponent},
   {path: 'search', component: SearchComponent},
   {path:'deezer-artist/:id', component: ArtistDeezerComponent},
   {path: 'spotify-artist/:id', component: ArtistComponent},
   {path: 'register', component: RegisterComponent, canActivate: [LogoutGuard]},
   {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
   {path: 'rankings', component: RankingsComponent},
   {path: 'favorites', component: FavoritesComponent, 
   children:
   [
  { path:'artistsuser', component: ArtistsComponent },
  { path:'albumsuser', component: AlbumsComponent },
  { path:'tracksuser', component:  TracksComponent }
   ]
   ,canActivate: [LoginGuard]},
   {path:'new-releases', component: NewreleasesComponent},
   {path:'updateuser', component: UpdateuserComponent, canActivate: [LoginGuard]},
   {path:'topartists', component: TopartistComponent},
   {path:'topalbums', component: TopalbumComponent},
   {path: '**', pathMatch:'full', redirectTo:''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
