import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpSVCService } from 'src/app/services/http-svc.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  display: string | undefined;
  userData:any;
  userdataform !: FormGroup
  stateOptionArr:string[] = ["Maharashtra","Delhi","Karnataka"];

  constructor(private fb:FormBuilder, private httpservice:HttpSVCService){}
    ngOnInit(): void{
    this.display='block';
    this.userdataform = this.fb.group({
      userimg:['',[Validators.required]],
      firstName:['', [Validators.required,  Validators.pattern('[A-Za-z]{1,20}')]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      number:['',[Validators.required, Validators.pattern('[1-9]{10}')]],
      age:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      address1:['',[Validators.required]],
      address2:['',[Validators.required]]
    })
 }
 save(){
  this.userData = this.userdataform.value
  console.log(this.userdataform);
  
  this.httpservice.postDataFromServer("users", this.userData).subscribe({
    next: (response: any) => {
      console.log("Response Received ", response);
    }
 })
}
}
