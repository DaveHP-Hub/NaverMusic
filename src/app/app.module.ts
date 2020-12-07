import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarNComponent } from './shared/sidebar-n/sidebar-n.component';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { ContactComponent } from './components/contact/contact.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ArtistDeezerComponent } from './components/artist-deezer/artist-deezer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NewreleasesComponent } from './components/newreleases/newreleases.component';
import {DatePipe} from '@angular/common';
import { DomsegurodPipe } from './pipes/domsegurod.pipe';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { PlaydeezerComponent } from './shared/playdeezer/playdeezer.component';
import { DomplayerdeezerPipe } from './pipes/domplayerdeezer.pipe';
import { TopartistComponent } from './components/topartist/topartist.component';
import { TopalbumComponent } from './components/topalbum/topalbum.component';
import { AlbumsComponent } from './components/favorites/albums/albums.component';
import { TracksComponent } from './components/favorites/tracks/tracks.component';
import { ArtistsComponent } from './components/favorites/artists/artists.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DomplayerspotifyPipe } from './pipes/domplayerspotify.pipe';
import { RankingsComponent } from './components/rankings/rankings.component';
import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarNComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,
    NoimagePipe,
    ArtistComponent,
    DomseguroPipe,
    ArtistDeezerComponent,
    LoginComponent,
    RegisterComponent,
    FavoritesComponent,
    NewreleasesComponent,
    DomsegurodPipe,
    UpdateuserComponent,
    PlaydeezerComponent,
    DomplayerdeezerPipe,
    TopartistComponent,
    TopalbumComponent,
    AlbumsComponent,
    TracksComponent,
    ArtistsComponent,
    DomplayerspotifyPipe,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
