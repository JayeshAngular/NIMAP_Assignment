import { Component } from '@angular/core';
import { HttpSVCService } from '../services/http-svc.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userDetails:userDetails = new userDetails;
  str:string= "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-little-girl-baby-girl-hd-wallpapers-indian-baby-image_2948600.jpg";
  constructor(private httpsvc:HttpSVCService){}

  ngOnInit(){
    this.httpsvc.getDataFromServer("users").subscribe((resp:any)=> {
      this.userDetails.userFirstName = resp[0].firstName;
      this.userDetails.userLastName = resp[0].lastName;
      this.userDetails.userEmailId = resp[0].email;
      this.userDetails.userAge = resp[0].age;
      this.userDetails.userPhone = resp[0].number;
      this.userDetails.userState = resp[0].state;
      this.userDetails.userCountry = resp[0].country;
      this.userDetails.userAddress1 = resp[0].address1;
      this.userDetails.userAddress2 = resp[0].address2;
      this.userDetails.userProfile = resp[0].userProfile;
      this.userDetails.inretesrArr = resp[0].interestArray;
    })
  }
}

export class userDetails {
  userFirstName : string = ''
  userLastName : string = ''
  userEmailId : string = ''
  userAge : string = ''
  userPhone : string = ''
  userState : string = ''
  userCountry : string = ''
  userAddress1 : string = ''
  userAddress2 : string = ''
  userProfile:string = ''
  inretesrArr:any[] = [] 
}
