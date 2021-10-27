import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  username = '';
  constructor(private myService:MyserviceService,
    private _router: Router) {
    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/main/login'])
    )
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }
}
