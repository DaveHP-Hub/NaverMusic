import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RegisterService } from '../../services/register.service';



@Component({
  selector: 'app-sidebar-n',
  templateUrl: './sidebar-n.component.html',
  styles: [
  ]
})
export class SidebarNComponent {
panelOpenState = false;
  username_: string;
  
  autentificar: boolean;
dato: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

validatePhoto = localStorage.getItem('id');
photo: string;

  constructor(private breakpointObserver: BreakpointObserver, public registerService: RegisterService) 
  { 
    if(this.registerService.userlocal === undefined)
    {
       this.registerService.userlocal = "Invited";
    }

if(this.validatePhoto != null)
{
this.photo = "../../../assets/image/DaveHP.jpg";
}
else 
{
  this.photo = "../../../assets/image/noimageuser.jpg"
}

  }

  ngOnInit() 
  {
    
   
  }


  logOut()
  {
    this.registerService.logOut();
    this.registerService.autentificado = false;
  }

 
}
