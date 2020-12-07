import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'; 
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
frmLogin: FormGroup;


  constructor(private _fb: FormBuilder, private router: Router, private loginService: RegisterService) { }

  ngOnInit(): void {
this.frmLogin = this._fb.group({
email:"",
pwd:""

  });

  }

  loginUser(value)
  {
this.loginService.loginUser(value);

  }

}
