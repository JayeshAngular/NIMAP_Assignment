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
  userdataform !: FormGroup
  stateOptionArr:string[] = ["Maharashtra","Delhi","Karnataka"];
  userimgurl:string = "";
  userData: any;
  interestArr:any[] = []

  constructor(private fb:FormBuilder, private httpservice:HttpSVCService){}
    ngOnInit(): void{
    this.display='block';
    this.userdataform = this.fb.group({
      userimg:['',[Validators.required]],
      firstName:['', [Validators.required,  Validators.pattern('[A-Za-z]{1,20}')]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,  Validators.pattern('[a-zA-Z0-9_.-]+[@][a-z]+[.][a-z]{2,3}')]],
      number:['',[Validators.required, Validators.pattern('[1-9]{10}')]],
      age:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      address1:['',[Validators.required]],
      address2:['',[Validators.required]],
      interest:['',[]]
    })
 }
 addInterest(){
    this.interestArr.push(this.userdataform.controls['interest'].value);
 }
 removeInterest(data:any){
    this.interestArr.splice(data,1)
 }
 save(){
  const userData = new FormData;
  this.userData = this.userdataform.value;
  this.userData.userProfile = this.userimgurl;
  this.userData.interestArray= this.interestArr;
  
  this.httpservice.postDataFromServer("users", this.userData).subscribe({
    next: (response: any) => {
      console.log("Response Received ", response);
    }
 })
}

onselectimg(eventData:any){
 var reader = new FileReader();
 reader.readAsDataURL(eventData.target.files[0]);
 reader.onload = (event:any)=> {
  this.userimgurl = event.target.result; 
 }

}
}
