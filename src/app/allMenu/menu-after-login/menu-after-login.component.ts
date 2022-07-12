import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-after-login',
  templateUrl: './menu-after-login.component.html',
  styleUrls: ['./menu-after-login.component.css']
})
export class MenuAfterLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoff(){
    environment.token = ''
    this.router.navigate(['/login'])
  }

}
