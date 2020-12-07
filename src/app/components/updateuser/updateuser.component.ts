import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormBuilder , FormGroup} from '@angular/forms';
import { UpdateService } from '../../services/update.service';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

frmUpdate: FormGroup;
datos;
datos_;
user;
  constructor(private _fb: FormBuilder, public registerService: RegisterService, private updateService: UpdateService) 
  { 

    this.datos = ['M','F'];
    this.datos_ = ['México','USA','Francia','Alemania','China'];
     this.user = this.registerService.data_;    

  }

  ngOnInit(): void {
    this.frmUpdate = this._fb.group({
            
        });  
  }


  UpdateUser(username_: string, email_: string, pwd_: string, gender_: string, forename_: string, surname_: string, nationality_: string, numberphone_: string) 
 {  
  
  var dataUpdate = 
  {
idUser: this.user.idUser, 
username: username_, 
email: email_, 
pwd: pwd_, 
gender: gender_, 
picture: "",
forename: forename_, 
surname: surname_, 
nationality: nationality_, 
numberphone: numberphone_

  }

this.updateService.updateUser(dataUpdate);

 }  

}
