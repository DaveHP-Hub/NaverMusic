import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'; 
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

frmRegister: FormGroup;  
datos;
datos_;


  constructor(private _fb: FormBuilder, private router: Router, private registerService: RegisterService) 
  { 

    this.datos = ['M','F'];
    this.datos_ = ['México','USA','Francia','Alemania','China'];

  }

  
   


  ngOnInit(): void {
 this.frmRegister = this._fb.group({  
            username: "",  
            email: "",
            pwd:"",
            gender:"",
            forename:"",
            surname: "",
            picture: "",
            nationality: "",
            numberphone:""
        });  

  }

 AddUser(value) 
 {  
  this.registerService.SaveUser(value);
  

 }  


}
