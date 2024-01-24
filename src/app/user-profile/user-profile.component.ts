import { Component } from '@angular/core';
import { HttpSVCService } from '../services/http-svc.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userDetails:any;
  str:string= "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-little-girl-baby-girl-hd-wallpapers-indian-baby-image_2948600.jpg";
  constructor(private httpsvc:HttpSVCService){}

  ngOnInit(){
    this.httpsvc.getDataFromServer("users").subscribe((resp:any)=> {
      this.userDetails = resp[0];
    })
  }
}
